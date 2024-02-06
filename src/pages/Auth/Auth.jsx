import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'
const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);
 
  console.log(loading);

  const [data, setData] = useState({firstName: "", lastName: "", password: "", confirmpass: "", userName: ""});

  const [confirmpass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(isSignUp)
    {
      
     data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    
    }else {
      dispatch(logIn(data));
    }
  }

  const resetForm = () => {
    setConfirmPass(true);
    setData({ userName: "", password: "", firstName: "", lastName: "", confirmpass: ""});
  };

  return (
    <div className="Auth">
      {/*Left Side*/}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
     {/*Right Side*/}   
    <div className="a-right">
      <form  className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

        {isSignUp && 
         (<div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstName'  onChange={handleChange} value={data.firstName}
          />
          <input type="text" placeholder='Last Name' className='infoInput' name='lastName'   onChange={handleChange} value={data.lastName}
          />
        </div>)
        }

        <div>
        <input type="text" placeholder='userNames' className='infoInput' name='userName'  onChange={handleChange} value={data.userName}/>
        </div>

        <div>
        <input type="password" placeholder='password' className='infoInput' name='password'  onChange={handleChange} value={data.password}
        />
        {isSignUp && 
        (<input type="password" placeholder='confirm pass' className='infoInput' name='confirmpass'  onChange={handleChange} value={data.confirmpass}
        />
        )}
        </div>
        <span style={{
          display: confirmpass ? "none" : "block", fontSize: "12px", alignSelf: "flex-end", color: "red", marginRght: "5px"
        }}>* Confirm Password is not same</span>

        <div>
          <span style={{fontSize: '12px', cursor: "pointer"}} onClick = {() =>{ setIsSignUp((prev) => !prev); resetForm()}} >{isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}</span>
        </div>
        <button className="button infoButton" type='submit' disabled={loading}>{loading ? "Loading..." : isSignUp ? "SignUp" : "Log In"}</button>
      </form>
    </div>
    

    </div>
  )
}



export default Auth