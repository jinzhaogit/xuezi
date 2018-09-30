var express=require("express");
var router=express.Router();
var pool=require("../pool");

router.post("/signin",(req,res)=>{
  var {uname,upwd}=req.body;
  var sql="select * from xz_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      req.session.uid=result[0].uid;
      res.send({ok:1})
    }else{
      res.send({ok:0,msg:"用户名或密码错误!"})
    }
  })
})
router.get("/islogin",(req,res)=>{
  if(req.session.uid==null)
    res.send({ok:0});
  else{
    var sql="select * from xz_user where uid=?";
    pool.query(sql,[req.session.uid],(err,result)=>{
      res.send({ok:1,uname:result[0].uname});
    })
  }
})
router.get("/signout",(req,res)=>{
  delete req.session.uid;
  res.send();
})

module.exports=router;