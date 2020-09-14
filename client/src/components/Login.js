import React from "react";
import axios from "axios"

class Login extends React.Component {

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 state = {
   user: {
     username: "",
     password: ""
   }
 };

 handleChange =(e) => {
   this.setState({
     user: {
       ...this.state.user,
       [e.target.name]: e.target.value
     }
   });
 };

 login = (e) => {
   e.preventDefault();
   axios
    .post("http://localhost:5000/api/login", this.state.user)
    .then((res)=> {
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/bubblepage")
        
    })
    .catch((err)=> {
      console.log("oh shit! Login.js has an error:", err)
    })

   };


 



   render(){
      return (
        <>
          <h1>Welcome to the Bubble App!</h1>
          <form onSubmit = {this.login}>
            <input
              type = "text"
              name = "username"
              placeholder = "username"
              value = {this.state.user.username}
              onChange = {this.handleChange}
              />
            <input
              type = "text"
              name = "password"
              placeholder = "password"
              value = {this.state.user.password}
              onChange = {this.handleChange}
              />
            <button>Log In</button>
          </form>
        </>
      );

    }


};

export default Login;
