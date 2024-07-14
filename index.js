const express=require("express");
const cors =require("cors");
const port=process.env.PORT || 9000;

const app=express();
app.use(cors());

app.get("/find" , (req,res)=>{
	let num=req.query.number;
	let n=parseInt(num);
	let r=n % 2 == 0 ? "Even" : "Odd";
	res.json({"msg":r});

});




app.listen(port, ()=>{console.log("ready @" + port);});