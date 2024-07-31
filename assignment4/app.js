// Express
// cruds operations
// 1 create=>post
// 2 read=>get
// 3 update=>patch
// 4 delete=>delete
const express=require("express")
const app=express()
var hbs=require("hbs")
const port=process.env.port||3000;
app.get("/pricess",(req,res)=>{
    res.send("pricess page")
})

const path=require("path")
const x=path.join(__dirname,"public")
app.use(express.static(x))
app.set('view engine','hbs')
app.get("/service",(req,res)=>{
    res.render("service",{
        title:"SERVICES",
        name:"ahmed",
        city:"mansoura",
        age:40,

    })

})
app.get("/page2",(req,res)=>{
    res.render("page2",{
        title:"PAGE2",
        name:"gomaa",
        city:"Aswan",
        age:60,

    })

})
app.get("/team",(req,res)=>{
    res.render("team",{
        title:"TEAM",
        name:"hadee1",
        age:22,
        city:"mahala",


    })

})
app.get("/",(req,res)=>{
    res.render("index",{
        title:"HOME",
        desc:"this is des home page",

    })

})

const geoCode=require("./views/geoCode")
const forcast=require("./views/forcast")
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
        error:"address is not found"
        })
    }
    geoCode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forcast(data.longtitude,data.laititude,(error,response)=>{
            if(error){
                return res.send({error})
    
            }
            res.send({
                
                    longitude: data.longtitude,
                    latitude: data.laititude,
                    weather: response.forecast,
                  
            })

        })
    })
})
app.get("*",(req,res)=>{
    res.send("404 page not founded")

})

const partialpath=path.join(__dirname,"./public/partials")
hbs.registerPartials(partialpath)
app.listen(port,()=>{
    console.log(` hello hidar ${port}`)
})
