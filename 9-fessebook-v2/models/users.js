const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  slug: {
    unique: true,
    type: String,
  },
  login:String,
  hash:String,
  role:String
});

schema.statics.register = async function register(login,password, isAdmin){
  const role = isAdmin ? 'ADMIN' : 'USER';
  const saltRound = 10;
  const slug = Math.floor(Math.random()*100000);
  const hash = await bcrypt.hash(password, saltRound)
  const user = await this.create({login, hash, role, slug})
}
schema.statics.checkUser = async function checkUser(login, password){
  try{
    const user =await this.findOne({login})
    if(user){
     if( await bcrypt.compare(password,user.hash)){
       return user;
     } else{
       return false;
     }
    } else {
      return false;
    }
  } catch(e){
    console.log(e)
  }

}
module.exports = mongoose.model("users", schema);
