const express = require('express');
const mongoose = require('mongoose');
const { notFound, appError } = require('./middleware/error');
const router = require('./router');
const helmet = require('helmet')
async function init(){
    try{
        await mongoose.connect("mongodb://localhost:27017/tpkportal",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Database is ready")
        const todosApp = express();
        todosApp.use(helmet())
        todosApp.use(express.json());

        todosApp.use(router);

        todosApp.use(notFound);
        todosApp.use(appError);
        
        todosApp.listen(6969,()=>{
            console.log("todosApp est opérationel")
        })
    } catch(e){
        console.log(e)
    }
    
}

init();