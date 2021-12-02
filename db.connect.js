const mongoose=require('mongoose');
async function initialiseDB()
{
    try{
        await mongoose.connect(process.env['uri'],{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("DB Initialised");
    }
    
    catch(err)
    {
        console.log("Some Error Occured",err)
    }
}

module.exports={initialiseDB}
