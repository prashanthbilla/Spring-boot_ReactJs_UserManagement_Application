import axios from 'axios';
import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

class OneUserList extends Component {

    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            userId:'',
            name:'',
            password:'',
            phoneNum:'',
            empployees: [],
            data:[],
            message : null
        }
        this.logout= this.logout.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    
    }

    componentDidMount(){
        EmployeeService.getOneUser(this.state.id).then((response)=>{
            console.log(response.data.data)
            this.setState({data:response.data.data});
            this.props.history.push(`/one/${this.state.id}`);
            

           
        });
    }


    logout(){
        this.props.history.push('/');
    
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
       

    }
   

    render() {
        return (
            <div>
                <br/>
                <h2> USER DETAILS </h2>
                <br/>
                <div className = "row">
                <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-danger" onClick={this.logout} >LOGOUT</button>
                <br/>
                <br/> 
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((emp)=>
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.userId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.password}</td>
                                <td>{emp.phoneNum}</td>
                                <td> <button className="btn btn-warning" onClick={()=>this.editEmployee(emp.id)} >UPDATE</button> </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default OneUserList
