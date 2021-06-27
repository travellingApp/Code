import React, { Component, useState } from "react";
import axios from 'axios';

export default function SignUp () {
    

    
    const apiUrl = 'http://localhost:3000'
  
const [State,SetState]=useState({
    FName: '',
    LName: '',
    Email: '',
    Password: '',
    RPassword: '',
    Bday:''
})

const FName =(Data)=>{
SetState({
    ...State,
    FName : Data.target.value
});
}    

const LName =(Data)=>{
SetState({
    ...State,
    LName : Data.target.value
});
}    

const Email =(Data)=>{
SetState({
    ...State,
    Email : Data.target.value
});
}    

const Bday =(Data)=>{
    SetState({
        ...State,
        Bday : Data.target.value
    });
    }   

const Pass =(Data)=>{
SetState({
    ...State,
    Password : Data.target.value

});
strCompare (Data.target.value,State.RPassword)
}    

const RPass =(Data)=>{
SetState({
    ...State,
    RPassword : Data.target.value
});

strCompare (State.Password,Data.target.value)
}    



const Submit =(event)=>{
    event.preventDefault();
    console.log(State)
    axios.post(apiUrl+"/user" , {
      "fname" : State.FName,
      "lname" : State.LName,
      "email" : State.Email,
      "pw" : State.Password,
      "bday" : State.Bday
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    return(
        console.log(State)
    )
    
}


function strCompare(str1,str2){
    return console.log(str1 === str2) ;
}
   

        return (
            <div>
            <form onSubmit={Submit}> 
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={FName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={LName}/>
                </div>

                <div className="form-group">
                    <label>Birth Day</label>
                    <input type="date" className="form-control" placeholder="Enter email" onChange={Bday}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={Email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={Pass}/>
                </div>

                <div className="form-group">
                    <label>Re-Enter Password</label>
                    <input type="password" className="form-control" placeholder="Re-Enter password" onChange={RPass}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" value='Submit' >Register</button>
                <p className="forgot-password text-right">
                    Already registered <a>log in?</a>
                </p>
            </form>
            </div>
            
        );
    
}