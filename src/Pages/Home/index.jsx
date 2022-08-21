import { Link } from "react-router-dom"
import './home.css'
// import data from '../../Data/states.json'
import React, { useState } from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

// function saveEmployee() {
//     const firstName = document.getElementById('first-name');
//     const lastName = document.getElementById('last-name');
//     const dateOfBirth = document.getElementById('date-of-birth');
//     const startDate = document.getElementById('start-date');
//     const department = document.getElementById('department');
//     const street = document.getElementById('street');
//     const city = document.getElementById('city');
//     const state = document.getElementById('state');
//     const zipCode = document.getElementById('zip-code');

//     const employees = JSON.parse(localStorage.getItem('employees')) || [];
//     const employee = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         dateOfBirth: dateOfBirth.value,
//         startDate: startDate.value,
//         department: department.value,
//         street: street.value,
//         city: city.value,
//         state: state.value,
//         zipCode: zipCode.value
//     };
//     console.log(employee)
//     employees.push(employee);
//     localStorage.setItem('employees', JSON.stringify(employees));
//     console.log(localStorage)
// }


    



export default function Home(employees, setEmployees ) {

    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
            <Link to={`/employees-list`}> View Current Employees </Link>
                <h2>Create Employee</h2>
                <Form
                employees={employees}
                setEmployees={setEmployees}
                setIsOpen={setIsOpen}
                />
        </div>
            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </main> 
    )
}