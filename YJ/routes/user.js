const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.post('./reg',function(req,res){
var obj=req.body;
var i=400;
  for(var key in obj){
     i++; 
      if(!obj[key]){
	  res.send({code:i,msg:key+'required'});
	  return;
  }
 pool.query('INSERT INTO yj_user SET?',[obj],function(err,result){
 if(err) throw err;
 if(result.affectedRows>0){
 res.send({code:200,msg:'reg suc'});
 }
 });
});
router.post('./login,'function(req,res){
var obj=req.body;
var i=400;
  for(var key in obj){
     i++; 
      if(!obj[key]){
	  res.send({code:i,msg:key+'required'});
	  return;
  }
 pool.query('SELECT*FROM yj_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){if(err) throw err;
 //console.log(result);
 if(result.length>0){res.send({code:200,msg:'login suc'});
 }else{
 res.send({code:201,msg:'uname or upwd error'});
 }
 })
}
})