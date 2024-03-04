import React from 'react'

const ListDepartmentComponent = () => {

    const dummyData = [
        {
            id:1,
            departmentName :'R&D',
            departmentDescription : "Research and Development"
        },
        {
            id:2,
            departmentName :'Finance',
            departmentDescription : "Finance Department"
        }
    ]

  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>List of Departments</h1>
            {/* <button className="btn btn-primary" onClick={addNewEmployee}>Add Deparment</button> */}
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
                        dummyData.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departmentDescription}</td>
                                {/* <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} 
                                        style={{ marginLeft: '10px' }}>Delete</button>
                                </td> */}
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