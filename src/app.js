const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public")
const templetPath=path.join(__dirname,"../templete/views")
const partialsPath=path.join(__dirname,"../templete/partials")

app.set("view engine","hbs");

app.set("views",templetPath);
app.use(express.static(static_path));
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("welCome to weatherPage");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Oops! Page Not Found"
    });
});
app.listen(port,()=>{
    console.log(`listening with port: ${port} `);
});