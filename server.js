var express=require('express');


var app=express();

var bodyparser=require('body-parser');

var fs=require('fs');

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    fs.createReadStream("index.html").pipe(res);
});


app.get("/test",(req,res)=>{
if(req.query.id=="000"){
res.send("sleep");
}else if(req.query.id=="341"){
res.send("ing");
}else if(req.query.id=="956"){
res.send("bear");
}else{
	res.send("");
}
})

app.post("/",(req,res)=>{
if(req.body.val=="sleepingbear"){
res.send("FLAG{tha4_1s_3rillian4}");
}else{
res.send("You wish");
}
});

app.listen(process.env.PORT ||3000);
