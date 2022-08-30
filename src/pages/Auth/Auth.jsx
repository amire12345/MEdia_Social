import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn />
    

    </div>
  )
}
function LogIn(){
  return(
    <div className="a-right">
      <form  className="infoForm authForm">




        <h3>Log In</h3>
       

        <div>
        <input type="text" placeholder='username' className='infoInput' name='firstname' />
        </div>

        <div>
        <input type="text" placeholder='password' className='infoInput' name='password' 
        />
        </div>

        <div>
          <span style={{fontSize: '12px'}}>Don't have an account Sign up</span>
        </div>
        <button className="button infoButton" type='submit'>Login</button>
      </form>
    </div>
  )
}



function SignUp(){
  return(
    <div className="a-right">
      <form  className="infoForm authForm">




        <h3>Sign up</h3>

        <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' 
          />
          <input type="text" placeholder='Last Name' className='infoInput' name='lastname' 
          />
        </div>

        <div>
        <input type="text" placeholder='username' className='infoInput' name='firstname' />
        </div>

        <div>
        <input type="text" placeholder='password' className='infoInput' name='password' 
        />
        <input type="text" placeholder='confirm pass' className='infoInput' name='confirmpass' 
        />
        </div>

        <div>
          <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default Auth