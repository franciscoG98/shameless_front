import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <h2 className='form_title--dumb'>Shameless</h2>

      <div className="register__container">

        <h1 className="form__title">Registrarse</h1>

        <form action="" className="login__form">

          <label className='form__label' htmlFor="name">Nombre y apellido</label>
          <input className='form__input' id='name' name='name' type="text" />

          <label className='form__label' htmlFor="mail">Correo electrónico</label>
          <input className='form__input' id='mail' name='mail' type="text" />

          <label className='form__label' htmlFor="password">Contraseña</label>
          <input className='form__input' id='password' name='password' type="password" />

          <label className='form__label' htmlFor="password2">Repita su contraseña</label>
          <input className='form__input' id='password2' name='password2' type="password" />

          <Link className='login__link--to-register' to='/login'>¿Ya tienes cuenta?</Link>

          <button className='form__button'>Entrar</button>
        </form>


      </div>

    </>
  )
}

export default Register