import React from 'react'
import './Auth.css'



const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src=".\.\img\Logo.png" alt="" />
            <div className="Webname">
               <h1>ZKC Media</h1>
               <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

          <LogIn/>

    </div>
  )
}

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {

  return(
      <div className="a-right">
          <form  className="infoForm authForm">

            <h3>sign up</h3>

            <div>
              <input type="text" 
              placeholder='first Name' 
              className='infoInput' 
              name='firstname'/>
           
              <input type="text" 
              placeholder='Last Name' 
              className='infoInput' 
              name='Lastname'/>
            </div>

            <div>
              <input type="text" className='infoInput'
              name='username' placeholder='usernames' />
            </div>

            <div>
              <input type="text" className='infoInput'
              name='password' placeholder='password' />
            

              <input type="text" className='infoInput'
              name='confirm password' placeholder='confirm password' />
            </div>
           
           <div>
                <span style={{fontSize:'12px'}} >Already have an account .Login! </span>
           </div>
           
            <button className="button infoButton" type="submit">Sign up</button>

          </form>

      </div>

  )
  
}

export default Auth