const fs=require("fs")
const addPerson=(id,age,fname,lname,city)=>{
    const allData=loadInfo()
    const duplicatedData=allData.filter((obj)=>{
        return obj.id===id
    })
    if(duplicatedData.length==0){
        allData.push({
            id:id,
            age:age,
            fname:fname,
            lname:lname,
            city:city
        })
    saveAllData(allData)

    }
    else{
        console.log("ERROR DUPLICATED DATA")
    }
}
// //////////////////////////
const loadInfo=()=>{
    try{
        const dataObj=fs.readFileSync("data10.json").toString()
    return JSON.parse(dataObj)
    }
    catch{
        return []
    }
}
const saveAllData=(allData)=>{
    const saveAllData=JSON.stringify(allData)
    fs.writeFileSync("data10.json",saveAllData)
}
const deleteData=(id)=>{
    const allData=loadInfo()
    const toKeepData=allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(toKeepData)

 
}
const readData=(id)=>{
    const allData=loadInfo()
    const NewItem=allData.find((obj)=>{
        return obj.id ==id
    })
    if(NewItem){
        console.log(NewItem)
    }else{
        console.log("item not found")
    }
}
const listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj)=>{
        console.log(obj.fname,obj.lname)
    })
}
module.exports={
    addPerson,
    deleteData,
    readData,
    listData

}
