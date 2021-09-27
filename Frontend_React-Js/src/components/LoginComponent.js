import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params.id,
           userId:null,
           password:null
            
        }

        this.changeIdHandler= this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.signup=this.signup.bind(this);
        this.login=this.login.bind(this);
    }

    signup(){
        this.props.history.push(`/add-employee`);
    }
   
    login=(e)=>{
        e.preventDefault();
        let employeeName={id: this.state.id, userId: this.state.userId, password: this.state.password};
        if(employeeName.userId===null&&employeeName.password===null)
        window.alert("Enter username & password, these fields are mandatory...");
        else{
        if(employeeName.userId==='admin'&&employeeName.password==='admin'){
        window.alert("Admin...Login Successfully")
            this.props.history.push('/list');
        }
        else{
        EmployeeService.loginEmp(employeeName.userId,employeeName.password).then(res=>{
            if(res.data.success===true){
                this.props.history.push(`/one/${res.data.data.id}`);
            }
                else if(res.data.success===false){
                window.alert("Invalid credential, User not found");
                this.props.history.push('/');
                }
                else
                this.props.history.push('/');
        });
    }
}
    }

    changeIdHandler=(event)=>{
        this.setState({userId : event.target.value});
       }
   
       changeNameHandler=(event)=>{
           this.setState({password : event.target.value});
          }

    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset -md-3">
                        <div className="card-body"></div>
    
        <center> <h1><b> Log-in or Sign-up </b> </h1> </center> 
        <br/>  
        <body>
        <form>  
            <div class="container">   
                <label>Username : </label>  
                <input type="text" placeholder="Enter Username" name="username"  value={this.state.userId} onChange={this.changeIdHandler} /> <br/> 
                <br/>
                <label>Password : </label>   
                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.changeNameHandler} /> <br/> 
                <br/>
                <button type="submit" className="btn btn-success"  onClick={this.login}>LOGIN</button>
                <br/>
                <br/>   
                <button type="submit" className="btn btn-primary" onClick={this.signup}>SIGNUP</button> 
                <br/> 
                <br/>   
            </div>   
        </form>  
        </body>
       </div> 
       </div> 
       </div> 
       </div> 
        )
    }
}

export default LoginComponent
