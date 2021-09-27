import axios from 'axios';
import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

class EmptyList extends Component {

    constructor(props){
        super(props);
        this.state={
            empployees: [],
            data:[],
            message : null
        }
        this.logout= this.logout.bind(this);
        this.addEmployee= this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    
    }

    componentDidMount(){
        this.getAllEmployees();
    }

    getAllEmployees(){
    EmployeeService.getAllEmployees().then((response)=>{
        this.setState({data:response.data.data});
        console.log(response.data.data)
    });

    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(response=>{
            window.alert(response.data.message);
            this.setState({message:response.data.message});
            this.getAllEmployees();
        
        });
    }

    logout(){
        this.props.history.push('/');
    
    }

    addEmployee(){
        this.props.history.push('/list/add-employee');
    
    }

    editEmployee(id){
        this.props.history.push(`/list/update-employee/${id}`);
       

    }
   

    render() {
        return (
            <div>
                <h2> ALL USERS LIST </h2>
                <div className = "row">
                <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-danger" onClick={this.logout} >LOGOUT</button>
                <br/>
                <br/>
                    <button type="button" className="btn btn-primary" onClick={this.addEmployee} > ADD USER</button>
                 </div>
                 </div>
                 <br></br>
                <table className="table table-hover" >
                    <thead>
                    <tr className="bg-info text-white">
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>NAME</th>
                    <th>PASSWORD</th>
                    <th>PHONENUM</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    </tbody>
                    
                </table>
                <p >  <h2 >No Users Found</h2></p>
                {
                    this.state.message &&(
                        <div className="alert alert-success">{this.state.message}</div>
                    )
                }
                
            </div>
        )
    }
}

export default EmptyList
