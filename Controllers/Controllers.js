
const UserSchema  = require('../Schemas/Users')
const bcrypt =  require('bcrypt')

exports.GetWelcome  = (req,res) =>{
console.log(req.query)
res.send("This is New Welcome Server")
}



exports.login = (req,res) =>{
    const {email , password} =  req.body;
    UserSchema.find({email  : email}).then((result)=>{
        if(result.length >  0)
        {
            bcrypt.compare(password , result[0].password , function(err, status){
                if(err)
                {
                    console.log(err)
                    res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})
  
                }
                else
                {
                    if(status == true)
                    {
                        res.status(200).send({status : 200 , message : "Login Successfully"  , data : result[0]})

                    }
                    else
                    {
                        res.status(400).send({status : 400 , message : "Incorrect Password"})
 
                    }
                }
            } )
        }
        else
        {
            res.status(400).send({status : 400 , message : "User Not Registered"})

        }
    }).catch((err)=>{
        res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})

    })



}

exports.RegsiterUser = (req,res) =>{
   const {name , mobile , email  , address  , password}  = req.body;
   bcrypt.genSalt(10 ,  function(err , salt){
    if(err)
    {
        res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})
    }
    else{
        bcrypt.hash(password , salt  , function(err, hash) {
            if(err)
            {
                res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})

            }
            else
            {
                
                UserSchema.insertMany({name :  name ,  email  :email ,  mobile :  mobile , address :  address ,  password :  hash}).then((result)=>{
                    console.log(result)
                   if(result.length > 0)
                   {

                       res.status(200).send({status : 200 , message : "User Registered Successfully"})
                   }
                   else
                   {
                    res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})

                   }
                }).catch((err)=>{
                    res.status(500).send({status : 500 , message : "Something Went Wrong || try Again"})

                })
            
            }
        })
    }
   })
   
}