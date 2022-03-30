const Category = require('./model')

module.exports = {
   index: async(req, res)=>{
      try {
         const category = await Category.find()
         res.render('admin/category/view_category',{
            category
         })
      } catch (error) {
         console.log(error)
      }
   },
   createView: async(req, res)=>{
      try {
         res.render('admin/category/create')
      } catch (error) {
         console.log(error)         
      }
   },
   createAction: async(req, res)=>{
      try {
         const { name } = req.body
         
         let category = await Category({ name })
         await category.save();

         res.redirect('/category')
      } catch (error) {
         console.log(error)
      }
   },
   editView: async(req, res)=>{
      try {
         const { id } = req.params
         const category = await Category.findOne({_id: id})

         res.render('admin/category/edit', {
            category
         })
      } catch (error) {
         console.log(error)         
      }
   },
   editAction: async(req, res)=>{
      try {
         const { id } = req.params
         const { name } = req.body
         
         const category = await Category.findOneAndUpdate({ 
            _id: id 
         }, { name })

         res.redirect('/category')
      } catch (error) {
         console.log(error)
      }
   },
   deleteAction: async(req, res)=>{
      try {
         const { id } = req.params
         
         const category = await Category.findOneAndRemove({ 
            _id: id 
         })

         res.redirect('/category')
      } catch (error) {
         console.log(error)
      }
   },
}