const bcrypt = require('bcrypt');
const prisma = require('../Db/index')
const jwt = require('jsonwebtoken');
exports.postSignup = async (req, res, next) => {
  
    let {name, password, email,role} = req.body;

    const saltOrRounds = 10;
    password = await bcrypt.hash(password, saltOrRounds);
    console.log(password);
    console.l
   
    try {
        var user;

        const existingUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});

        if(existingUser){
            return res.send({"registered":false,
            "status":"user with email "+email+" already exsist",
        })

        }

        user = await prisma.user.create({
            data:{name,email,password,role}
        });

        return res.send({
            "registered":true,
            "status":"registration successfully",
            "user":user});
    } catch (error) {
        res.send(error)
    }
};

exports.postLogin = async (req, res, next) => {
    let {email, password} = req.body;
    
    process.env.SECRET_KEY
     try{

        const existingUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});

        if(!existingUser){
           return res.send({
               "isLoggedin":false,
               "status":"user doesn't exist"
           });
        }

        var passwordMatch = await bcrypt.compare(password, existingUser.password);
        if(!passwordMatch){
            return res.send({
                "isLoggedin":false,
                "status":"Password didn't Match"})
        }

        const obj={
            unique: existingUser.id
        }

        const token=jwt.sign(obj, process.env.SECRET_KEY)
        res.send({
            "isLoggedin":true,
            "token":token,
            "status":"Logged in Successfully",
            "user":existingUser
        })

     }catch(err){
        console.log(err)
     }


}

exports.getDetails = async(req,res)=>{
    return res.send(req.user);
}

exports.update=async(req,res)=>{
    userId= parseInt(req.body.id);
    const {name,email,address}=req.body;

    const updateUser = await prisma.user.update({
        where: {
            id:userId,
          },
          data: {
            name,email,address
          },
    })
    res.send(updateUser);
}