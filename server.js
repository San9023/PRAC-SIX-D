var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// const addNumbers=(number1,number2) =>{
//     var num1 = parseInt(number1)
//     var num2 = parseInt(number2)
//     var result  = num1+num2;
//     return result;
// }

// app.get("/addTwoNumbers",(req,res) =>{
//     var number1 = req.query.number1;
//     var number2 = req.query.number2;
//     var result = addNumbers(number1,number2)
//     res.json({statusCode:200, data:result, message:'success'})
// })

    app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  

        var firstNumber = parseInt(req.params.firstNumber) 
        var secondNumber = parseInt(req.params.secondNumber)
        var result = firstNumber + secondNumber || null
        if(result == null) {
         res.json({result: result, statusCode: 400}).status(400)
        }
        else { res.json({result: result, statusCode: 200}).status(200) } 
      })


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to http://localhost:"+port)
})




