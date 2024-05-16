
import React, { useRef, useState } from 'react'

function UserForm() {

    const userNameRef = useRef(null)
    const passwordRef = useRef(null)
    const [usernameError,setUserNameError]=useState(false)

    const onFormSubmit =(event)=>{

        event.preventDefault()

        const username=userNameRef.current.value
        const password=passwordRef.current.value
        console.log(password,"passwordpassword")

        if(username.length<3){
            setUserNameError(true)
            alert("please enter more than 3 characters")
        }else{
            setUserNameError(false)
            console.log("form validated successfully")
        }



    }
  return (
    <form  onSubmit={onFormSubmit} >
    <div className="mb-3 mt-3">
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="text"
        className="form-control"
        id="email"
        placeholder="Enter email"
        name="email"
        ref={userNameRef}
      />
      {
        usernameError &&
        <span style={{color:"red"}} >Please enter more than 3 characters</span>
      }
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter Password"
        name="password"
        ref={passwordRef}
      />
     
    </div>

    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  
  )
}

export default UserForm