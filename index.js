const {createPool}=require('mysql');
const pool=createPool({
    host:"localhost",
    user:"root",
    password:"Anjali@2312",
    database:"organization",
    connectionLimit:10
}) 

pool('Select * from employee',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return  console.log(result)
})