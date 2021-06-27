import React,{useState} from "react";
import axios from "axios";


export default function Login (){

const [State,SetState]=useState({
    Pass:'',
    Email:''
});
  
        const Email =(Data)=>{
        SetState({
            ...State,
            Email : Data.target.value
        });
        }    
        
        const Pass =(Data)=>{
        SetState({
            ...State,
            Pass : Data.target.value
        
        });
    }
        const Submit =(event)=>{
            event.preventDefault();
            console.log(State);
            localStorage.setItem("uName",State.uname)
            
            axios.post('http://localhost:3000/api/userLogin/login', {
                uname: State.Email,
                password:State.Pass
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });


        }

        return (
            <form onSubmit={Submit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={Email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={Pass}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
}