import React,{useEffect} from 'react'
import "./Form.css"
import "./RegisterForm.css"
function RegisterForm({changeState}) {
  
  useEffect(()=>{
    const fileInput = document.getElementById("image");
    const imageLabel = document.getElementById("imageLabel");

    fileInput.addEventListener("change",function(){
      if(fileInput.files.length > 0 && fileInput.files[0].type.startsWith("image/")){
        const reader = new FileReader();
        reader.onload = function(event){
          imageLabel.innerHTML= "";
          imageLabel.style.backgroundImage = `url(${event.target.result})`;
        }
        reader.readAsDataURL(fileInput.files[0])
      }else{
        imageLabel.style.backgroundImage = "";
        imageLabel.innerHTML = "Envie sua imagem"
      }
    })
  },[])
  return (
      <form className="form">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="idade">Idade</label>
        <input type="number" id="idade" name="idade" />
        <label id="imageLabel" htmlFor="image">Envie sua imagem</label>
        <input 
          type="file" 
          id="image" 
          name="image" 
          required
          accept="image/*"

        />
        <label htmlFor="password">Senha</label>
        <input type="text" id="password" name="password" />
        <label  htmlFor="confirmPassword">Confirme sua senha</label>
        <input type="text" id="confirmPassword" name="confirmPassword" />
        <button type="submit">Criar conta</button>
        <div className="" onClick={changeState}>Login</div>
      </form>
  )
}

export default RegisterForm