import React from 'react'
import "./Form.css"
function RegisterForm({changeState}) {
  return (
      <form className="form">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Senha</label>
        <input type="text" id="password" name="password" />
        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <input type="text" id="confirmPassword" name="confirmPassword" />

        <div className="" onClick={changeState}>criar conta</div>
      </form>
  )
}

export default RegisterForm