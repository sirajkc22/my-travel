import React from 'react'
import './Register.css'
import { useState } from 'react'
import { Form ,Image} from 'react-bootstrap'
const Register = () => {
	const useGetFromInput = (initialValue) => {
		let [value, setValue] = useState(initialValue)
	
		const handleChange = (e) => {
		  setValue(e.target.value)
		}
		return {
		  value,
		  onChange: handleChange
		}
	  }
	  let name = useGetFromInput('')
  let contact = useGetFromInput('')
  let email = useGetFromInput('')
  let password = useGetFromInput('')
  let username = useGetFromInput('')

  const handleForm = (e) => {
    e.preventDefault()
    const request = {
      name: name.value,
     contact:contact.value,
	 email:email.value,
	 password:password.value,
	 username:username.value
    }
    console.log(request)
    window.location = '/login'
  }
  
  return (
    <div>
		  
		<Form onSubmit={handleForm}>
    <div class="form-holder">
	<h2>Regustration Form</h2>
	
  <div class="form-controler">
		<input type="text" class="form-input" placeholder="Name"  {...name}/>
		<span class="form-label-holder">
			<label>
     <span>Name</span>
			</label>
		</span>
	</div>
  <div class="form-controler">
		<input type="integer" class="form-input" placeholder="Contact" {...contact}/>
		<span class="form-label-holder">
			<label>
     <span>Contact</span>
			</label>
		</span>
	</div>
  <div class="form-controler">
		<input type="email" class="form-input" placeholder="email" {...email}/>
		<span class="form-label-holder">
			<label>
     <span>Email</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="text" class="form-input" placeholder="username" {...username}/>
		<span class="form-label-holder">
			<label>
				<span>Username</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="password" class="form-input" placeholder="Password" {...password}/>
		<span class="form-label-holder">
			<label>
				<span>Password</span>
			</label>
		</span>
	</div>
	<div class="form-controler">
		<input type="submit" class="form-button" value="Register"/>

	</div>
	
</div> 
</Form>
</div>       
  )
}

export default Register;