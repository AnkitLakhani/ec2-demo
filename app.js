const app = require('express')()
const port =  process.env.PORT || 3000
app.get('/',(req,res,next)=>{
    res.status(200).send({
        message:"test done"
    })
})
app.listen(port,()=>{
    console.log("running on =>",port)
})