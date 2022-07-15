const jwt = require("jsonwebtoken");
const prisma = require("../Db/index");
const auth = async (req, res, next) => {
  try {
    if (!(req.header("Authorization"))) {
      return res.send({
        "isLoggedin":false,
        "status":"Access Denied"
      });
    }
    
    const token = req.header("Authorization").split(" ")[1];
    var authVerify = jwt.verify(token, process.env.SECRET_KEY);
  
    
    const user = await prisma.user.findFirst({
      where: { id: authVerify.unique },
    });
  
    req.user = user;
  
    next();
  } catch (err) {
    console.log(err);
  } 
};

module.exports = auth;
