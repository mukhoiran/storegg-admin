module.exports = {
   isLoginAdmin: (req, res, next)=>{
      if(req.session.user === null || req.session.user === undefined){
         req.flash('alertMessage', 'Sorry your session has ended, please login')
         req.flash('alertStatus', 'danger')
         res.redirect('/')
      }else{
         next()
      }
   }
}