
const fs=require("fs")
const yargs=require("yargs")
const data10=require("./data10")
yargs.command({
    command:"add",
    describe:"you are added an item",
    builder:{
        fname:{
           describe:"this is first item added",
           demandOption:true,
           type:"string"

        },
        lname:{
            describe:"this is last item added",
            demandOption:true,
            type:"string"
 
         }
    },
    handler:(x)=>{
        data10.addPerson(x.id,x.age,x.fname,x.lname,x.city)
    }
})
yargs.command({
    command:"delete",
    describe:"you are deleted an item",
    handler:(x)=>{
        data10.deleteData(x.id)

    }
})
yargs.command({
    command:"read",
    describe:"you are read an item",
    builder:{
        id:{
           describe:"this is id desc in read item",
           demandOption:true,
           type:"string"

        },
        
    },
    handler:(x)=>{
        data10.readData(x.id)
    }
})
yargs.command({
    command:"list",
    describe:"to list data",
    handler:()=>{
        data10.listData()

    }
})
yargs.parse()


