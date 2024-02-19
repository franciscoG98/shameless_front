import React from 'react'

const Login = () => {
  return (
    <>
      <h2 className='form_title--dumb'>Shameless</h2>

      <div className="login__container">

        <h1 className="form__title">Inicia sesión</h1>

        <form action="" className="login__form">
          <label className='form__label' htmlFor="mail">Correo electrónico</label>
          <input className='form__input' id='mail' name='mail' type="text" />

          <label className='form__label' htmlFor="password">Contraseña</label>
          <input className='form__input' id='password' name='password' type="password" />

          <button className='form__button'>Entrar</button>
        </form>

      </div>

    </>
  )
}

export default Login