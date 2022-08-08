import { Link } from "react-router-dom"
import './home.css'
import data from '../../Data/states.json'
import { useState, useEffect } from "react";
import Modal from "../../components/Modal";

const states = data.states;

function States() {
    const stateSelect = document.getElementById('state');
        states.forEach((state) => {
            const option = document.createElement('option');
            option.value = state.abbreviation;
            option.text = state.name;
            stateSelect.appendChild(option);
        });

    // $( "#department" ).selectmenu();
    // $( "#state" ).selectmenu();

    // $('#date-of-birth').datetimepicker({
    //     timepicker: false,
    //     format: 'm/d/Y'
    // });
    // $('#start-date').datetimepicker({
    //     timepicker: false,
    //     format: 'm/d/Y'
    // });
}

function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        startDate: startDate.value,
        department: department.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value
    };
    console.log(employee)
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    console.log(localStorage)
}


    



export default function Home() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

    useEffect(() => {
        States();
    }, []);

    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
            <Link to={`/employees-list`}> View Current Employees </Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>
                <button onClick={openModal}>Save</button>
            </div>
            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </main> 
    )
}