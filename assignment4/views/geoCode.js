const request=require("request")
const geoCode=(address,callback)=>{
    const geoUrl=`https://api.mapbox.com/search/geocode/v6/forward?q=${address}&proximity=ip&access_token=pk.eyJ1IjoiaGlkYXJnb21hYSIsImEiOiJjbHo4enhta28wNjdwMmlzYWVhMGhocms2In0.RU3B8Rgrr42HbNjrfAJ1HA`
    request({url:geoUrl,json:true} ,(error,data)=>{
        if(error){
            callback("unable to connect geourl service",undefined)
        }
        else if(data.body.message){
            callback(data.body.message,undefined)
        }
        else if(data.body.features.length==0){
            callback("un able to fond location",undefined)
    
        }
        else{
            callback(undefined,{
                longtitude:data.body.features[0].geometry.coordinates[0],
                laititude:data.body.features[0].geometry.coordinates[1],
              })
            
        }
        }
        
    )
    
    }
    // geoCode("egypt",(error,data)=>{
    //     console.log("data",data)
    //     console.log("error",error)

    // })
    module.exports=geoCode