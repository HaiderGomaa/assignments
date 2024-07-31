const request=require("request")
const forcast=(longtitude,laititude,callback)=>{
    const url=`https://api.weatherapi.com/v1/current.json?key=e8cfb077008e4b74bc7174056241507&q=${longtitude}, ${laititude}`
request({url,json:true},(error,data)=>{
    if(error){
        callback("api has an error",undefined)
    }else if(data.body.error){
        callback(data.body.error.message,undefined)
    }else{
        callback(undefined,{
            forecast:` ${data.body.location.name} is ${data.body.current.condition.text} And Temp: ${data.body.current.temp_c}C`,
          })
    }

})
}
// forcast(29.871903452398, 26.494183829971,(error,data)=>{
//     console.log("data",data)
//     console.log("error",error)
// })
module.exports=forcast