export default function(req,res){
  const {user,pass}=req.body
  if(user==='admin' && pass==='1234'){
    res.json({ok:true})
  }else res.json({ok:false})
}
