import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export class CreateComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:"",
            name:"",
            password:"",
            phoneNum:""
        }

        this.changeIdHandler= this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changePhoneNumHandler=this.changePhoneNumHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
    saveEmployee=(e)=>{
        e.preventDefault();
        let employee={id: Math.floor((Math.random() * 10000000) + 1), userId: this.state.userId, name: this.state.name, password: this.state.password, phoneNum: this.state.phoneNum};
        EmployeeService.createEmployee(employee).then(res=>{
            window.alert(res.data.message);
            this.props.history.push(`/`);
        });

    }
    changeIdHandler=(event)=>{
        this.setState({id: event.target.value});
    }
    changeUserIdHandler=(event)=>{
        this.setState({userId: event.target.value});
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }
    
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    changePhoneNumHandler=(event)=>{
        this.setState({phoneNum: event.target.value});
    }


       cancel(){
        this.props.history.push(`/`);
       }
    
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset -md-3">
                                    <br/>
                            <h3 className="text-center"><b>Add User </b></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>
                                            Id :
                                        </label>
                                        <input placeholder="auto-generated" name="id" className="form-control"
                                        value={this.state.id} onChange={this.changeIdHandler} disabled />
                                        <label>
                                            UserName :
                                        </label>
                                        <input placeholder="username" name="userid" className="form-control"
                                        value={this.state.userId} onChange={this.changeUserIdHandler} required/>
                                        <label>
                                            Name :
                                        </label>
                                        <input placeholder="name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} required/>
                                        <label>
                                            Password :
                                        </label>
                                        <input placeholder="password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} required/>
                                         <label>
                                            PhoneNum :
                                        </label>
                                        <input placeholder="phonenum" name="phonenum" className="form-control"
                                        value={this.state.phoneNum} onChange={this.changePhoneNumHandler} required/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"8x"}}>Cancel</button>
                                    <br/>
                                    <br/>

                                </form>
                                

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default CreateComponent
