import React from 'react'
import{Nav,Form,Image} from "react-bootstrap"
import { useEffect, useState } from 'react'
import  './Login.css';
const Login = () => {
	let [username, setusername] = useState('')
  let [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let request = { username, password }
    localStorage.setItem('user', request)
    window.location = '/'
   
  }
  return (
 <>
 <Image src="https://previews.123rf.com/images/mipan/mipan1312/mipan131200011/24691387-login-concept-with-red-mouse-and-cable-in-the-shape-of-login-word.jpg"fluid />
	<Form onSubmit={handleSubmit}>
<div class="form-holder">
	<h2>Login Form</h2>
	<div class="form-controler">
		<input type="text" class="form-input" placeholder="username"onChange={(e) => setusername(e.target.value)} />
		<span class="form-label-holder">
			<label>
				<span>User name</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="password" class="form-input" placeholder="Password"onChange={(e) => setPassword(e.target.value)} />
		<span class="form-label-holder">
			<label>
				<span>Password</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="submit" class="form-button" value="login"/>
	</div>
	<Nav.Link href="/register">If you don't have an account</Nav.Link>
	
</div>
</Form>
</>
  )
  }
export default Login