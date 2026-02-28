import fs from 'fs'
const file='api/stock.json'

export default function(req,res){
  let data=JSON.parse(fs.readFileSync(file))
  if(req.method==='GET') return res.json(data)

  if(req.method==='POST'){
    data.push({id:Date.now().toString(),...req.body})
  }

  if(req.method==='PUT'){
    const p=data.find(x=>x.id===req.body.id)
    if(p) p.cantidad+=req.body.val
  }

  fs.writeFileSync(file,JSON.stringify(data,null,2))
  res.json({ok:true})
}
