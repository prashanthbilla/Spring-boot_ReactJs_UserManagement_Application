import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

export default class UpdateComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            userId:'',
            name:'',
            password:'',
            phoneNum:'',
            message:null
        
        }

        this.changeIdHandler= this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeUserIdHandler=this.changeUserIdHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changePhoneNumHandler=this.changePhoneNumHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data.data;
            this.setState({
                id:employee.id,
                userId: employee.userId,
                name: employee.name,
                password: employee.password,
                phoneNum: employee.phoneNum
            });
        })


    }

    updateEmployee=(e)=>{
        e.preventDefault();
        let employee1={ id: this.state.id, userId: this.state.userId, name: this.state.name, password: this.state.password, phoneNum: this.state.phoneNum};
        EmployeeService.updateEmployee(employee1).then(res=>{
            window.alert(res.data.message);
            this.props.history.push(`/one/${this.state.id}`);
        })

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
        this.props.history.push(`/one/${this.state.id}`);
       }
    
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset -md-3">
                        <br/>
                                    
                            <h3 className="text-center"><b>Update User</b></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <label>
                                            Id :
                                        </label>
                                        <input placeholder="id" name="id" className="form-control" 
                                        value={this.state.id} onChange={this.changeIdHandler} disabled/>
                                        <label>
                                            UserName :
                                        </label>
                                        <input placeholder="username" name="userid" className="form-control"
                                        value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        <label>
                                            Name :
                                        </label>
                                        <input placeholder="name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                        <label>
                                            Password :
                                        </label>
                                        <input placeholder="password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                         <label>
                                            PhoneNum :
                                        </label>
                                        <input placeholder="phonenum" name="phonenum" className="form-control"
                                        value={this.state.phoneNum} onChange={this.changePhoneNumHandler}/>
                                    </div>
                                    <br/>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10x"}}>Cancel</button>
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
