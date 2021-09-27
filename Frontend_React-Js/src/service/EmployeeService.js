import axios from 'axios';
const URL="http://localhost:8081/api/v1/signup";
class EmployeeService {

    getAllEmployees(){
        return axios.get(`${URL}/get`);
    }
    deleteEmployee(id){
        return axios.delete(`${URL}/remove/${id}`);
    }

    createEmployee(employee){
        return axios.post(`${URL}/register`, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(`${URL}/get/${employeeId}`);
    }

    updateEmployee(employee1){
        return axios.put(`${URL}/updateuser`,employee1);
    }
    getOneUser(employeeId){
        return axios.get(`${URL}/getlist/${employeeId}`);
    }

    loginEmp(userId, password){
        return axios.get(`${URL}/login?userId=${userId}&password=${password} `);
    }
   

}export default new EmployeeService();