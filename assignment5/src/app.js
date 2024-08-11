const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "proj-1"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log("error has occured")
    }
    console.log("all Perfect")

    const db = res1.db(dbname)
    //////////////////
    db.collection('users').insertOne({
        name: "mohamed",
        age: 26,
        city: "luxor"
    }, (error, data) => {
        if (error) {
            console.log('Unable to isert Data')
        }
        console.log(data.insertedId)
    })
    db.collection('users').insertOne({
        name: "hidar",
        age: 22,
        city: "mahala"
    }, (error, data) => {
        if (error) {
            console.log('Unable to isert Data')
        }
        console.log(data.insertedId)
    })
//     ///////////////////////////////////////////////
    db.collection('users').insertMany(
        [{
        name: "mohamed",
        age: 26,
        city: "luxor"
        
    },
    {
        name: "islam",
        age: 19,
        city: "mansoura"
        
    },{
        name: "gomaa",
        age: 60,
        city: "aswan"
        
    },{
        name: "soso",
        age: 16,
        city: "louxor"
        
    },{
        name: "mona",
        age: 36,
        city: "kafr"
        
    },
    {
        name: "ismail",
        age: 27,
        city: "cairo"
        
    },
    {
        name: "elsayid",
        age: 27,
        city: "cairo"
        
    },{
        name: "hidar",
        age: 27,
        city: "cairo"
        
    },{
        name: "mahmoud",
        age: 27,
        city: "mahala"
        
    },{
        name: "ahmed",
        age: 27,
        city: "alex"
        
    }
     ]
, (error, data) => {
        if (error) {
            console.log('Unable to isert Data')
        }
        console.log(data.insertedCount)
    })
    /////////////////////////////////////////
//     db.collection("users").findOne({_id:mongodb.ObjectId("66b8eb3093a9568fa826a5d9")},(error,user)=>{
//         if (error) {
//             console.log('Unable to isert Data')
//         }
//         console.log(user)
//     }
    
 
// )
db.collection('users').find({age:27}).toArray((error,user)=>{
    if (error) {
       return console.log('Unable to isert Data')
    }
      console.log(user)
    
}
)
db.collection('users').find({age:27}).limit(4).toArray((error,user)=>{
    if (error) {
       return console.log('Unable to isert Data')
    }
      console.log(user)
    
}
)
// /////////////////////////////////
// db.collection('users').updateOne({_id:mongodb.ObjectId("66b8ee909b92111fc1fc13ff")},{
//     $set:{name:"osama"},
//     $inc:{age:4}
// })
// .then((data1)=>{console.log(data1.modifiedCount)}).catch((error)=>{
//     console.log(error)
// })
db.collection('users').updateMany({},{
    $set:{name:"sawsan"},
    $inc:{age:4}
})
.then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
console.log(error)

// ////////////////////////////////////////
// db.collection('users').deleteOne({_id:mongodb.ObjectId("66b8ee909b92111fc1fc13ff")},{
//     $set:{name:"osama"},
//     $inc:{age:4}
// })
// .then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
//     console.log(error)


})
db.collection('users').updateMany({},{
    $inc:{age:10}
})
.then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
console.log(error)
db.collection('users').deleteMany({age:27})
.then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
    console.log(error)
})
})
})