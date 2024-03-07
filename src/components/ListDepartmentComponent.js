import React, { useEffect, useState } from 'react'
import { getAllDepartments } from '../services/DepartmentService';
import { Link,useNavigate } from 'react-router-dom';


const ListDepartmentComponent = () => {

    const [departments,setDepartments] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllDepartments().then((response) => {
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

    function updateDepartment(id) {
        navigator(`/update-department/${id}`)
    }

  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>List of Departments</h1>
            <Link to='/add-department' className="btn btn-primary mb-2">Add Department</Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateDepartment(department.id)}>Update</button>
                                    {/* <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} 
                                        style={{ marginLeft: '10px' }}>Delete</button> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListDepartmentComponent