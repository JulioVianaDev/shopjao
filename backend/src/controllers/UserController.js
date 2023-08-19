const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = class UserController {
  static async RegisterUser(req,res){
    const {role,name,idade,email,password,confirmPassword } = req.body;
    let image = ""
    if (req.file){
      image = req.file.filename
    }
    if(!name){
      return res.status(422).json({message: "O nome é obrigatório"})
    }
    if(!idade){
      return res.status(422).json({message: "A idade é obrigatório"})
    }
    if(!email){
      return res.status(422).json({message: "O email é obrigatório"})
    }
    if(!password){
      return res.status(422).json({message: "O password é obrigatório"})
    }
    if(!confirmPassword){
      return res.status(422).json({message: "O confirmPassword é obrigatório"})
    }
    if(password !== confirmPassword){
      return res.status(422).json({message: "As senhas não coincidem"})
    }
    const userExist = await User.findOne({email: email})
    if(userExist){
      return res.status(422).json({message: "Já tem um usuario com este email"})
    }
    const hash = await bcrypt.genSalt(12) 
    const passwordHash = await bcrypt.hash(password,hash)
    if(role === "Vendedor"){
      role === 0
    }
    if (req.file){
      image = `${req.file.filename}`
    }
    const user = new User({
      name,email,role,name,idade,email,password: passwordHash,image
    })
    
    try {
      const imageURL = `${req.protocol}://${req.get('host')}/uploads/${image}`;
      user.image = imageURL
      await user.save()
      res.status(201).json({message: "Usuario criado com sucesso",user})
    } catch (error) {
      res.status(500).json({message: "ocorreu um erro ao criar o user"})
    }
  }
}