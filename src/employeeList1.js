import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setEmployees(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className="head-cont">
        <h1 className="Main-heading">Employee List</h1>
      <input
        type="text"
        className="textbox"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
   </div>
      <ul className="list-cont">
        {employees
          .filter((employee) =>
            employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((employee) => (
            <div >
            <li key={employee.id}>
                <div className="image-cont">
                    <p className="list-id">{employee.id}</p>
              <img src={employee.avatar} className="image" alt={employee.first_name} />
             </div>
             <p className="first_name"> {employee.first_name} </p>
            </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
