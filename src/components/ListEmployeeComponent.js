import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Taniya",
            "lastName": "Pushey",
            "email": "taniya@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Disha",
            "lastName": "Kataria",
            "email": "disha@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Aastha",
            "lastName": "Grover",
            "email": "aastha@gmail.com"
        }
    ]
    

  return (
    <div className='container'>
        <h1 className='text-center'>List of Employees</h1>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent