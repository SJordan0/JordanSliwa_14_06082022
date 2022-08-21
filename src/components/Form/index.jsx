import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import states from '../../Data/states.json';
import department from '../../Data/department.json';
// import listEmployees from '../../Data/employees.json';

// const data = listEmployees.employees;

// async function getEmployeesList(employees){
//   const response = data.parse(localStorage.getItem('employees'));
//   return response.json(employees);
// }

// async function postEmployee(employees, employee){
//   const list = listEmployees.parse(localStorage.getItem('employees'));
//   return employees.push(employee);
// }

// function getEmployeesList() {
//     fetch('../../Data/employees.json')
//     .then((res) => {
//       return res.json();  
//   })
//   .then((employees) => {
//       console.log(employees);
//   })
//   .catch(function(error) {
//     console.log(error.message);
//   });
// }

// getEmployeesList();
async function getEmployeesList(employees) {
    try {
      const response = await fetch('../../Data/employees.json');
      return response.json();   
    } catch (error) {
      console.log(error.message);
      return employees;
    }
  }
    
async function postEmployee(employee, employees) {
    try {
      const response = await fetch('../../Data/employees.json');
      return response.json();
    } catch (error) {
      console.log(error);
      return employees.push(employee);
    }
  }


  function formatDates(date) {
    return date.toISOString().substring(0, 10);
  }
  
  function searchIdMax(data) {
    let max = 0;
    Array.from(data).forEach((obj) => {
      if (obj.id > max) {
        max = obj.id;
      }
    });
    return max + 1;
  }

export default function Form({ employees, setEmployees, setIsOpen }) {
  const [employee, setEmployee] = useState({
    id: searchIdMax(employees),
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  useEffect(() => {
    setEmployee({
      id: searchIdMax(employees),
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      startDate: null,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales',
    });
  }, [employees]);

  async function validForm() {
    if (
      employee.firstName &&
      employee.lastName &&
      employee.dateOfBirth &&
      employee.startDate &&
      employee.street &&
      employee.city &&
      employee.state &&
      employee.zipCode &&
      employee.department
    ) {
      const formatDateOfBirth = formatDates(employee.dateOfBirth);
      const formatStartDate = formatDates(employee.startDate);
      const newEmployee = {
        ...employee,
        dateOfBirth: formatDateOfBirth,
        startDate: formatStartDate,
      };
      await postEmployee(newEmployee, employees);
      const newList = await getEmployeesList(employees);
      setEmployees(newList);
      setIsOpen(true);
    }
  }

  return (
    <form id="form" onSubmit={(e) => validForm(e)}>
      <label htmlFor="firstName">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        onChange={(e) =>
          setEmployee({ ...employee, firstName: e.target.value })
        }
        required
        minLength={2}
        maxLength={20}
        value={employee.firstName}
      />

      <label htmlFor="lastName">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
        required
        minLength={2}
        maxLength={20}
        value={employee.lastName}
      />

      <label htmlFor="dateOfBirth">
        Date of Birth
      </label>
      <DatePicker
        name="dateOfBirth"
        defaultValue={new Date()}
        maxDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 18))
        }
        onChange={(newDate) =>
          setEmployee({
            ...employee,
            dateOfBirth: newDate,
          })
        }
        value={employee.dateOfBirth}
        required
      />

      <label htmlFor="startDate">
        Start Date
      </label>

      <DatePicker
        name="startDate"
        maxDate={new Date()}
        onChange={(startDateValue) =>
          setEmployee({
            ...employee,
            startDate: startDateValue,
          })
        }
        value={employee.startDate}
        required
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">
          Street
        </label>
        <input
          type="text"
          id="street"
          onChange={(e) => setEmployee({ ...employee, street: e.target.value })}
          required
          minLength={2}
          maxLength={20}
          value={employee.street}
        />

        <label htmlFor="city">
          City
        </label>
        <input
          type="text"
          id="city"
          onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          required
          minLength={2}
          maxLength={20}
          value={employee.city}
        />

        <label htmlFor="state">
          State
        </label>

        <Select
          name="state"
          inputId="state"
          getOptionValue={option => option.abbreviation}
          getOptionLabel={option => option.name}
          options={states.states}
          onChange={(e) => {
            if (e === null) {
              setEmployee({ ...employee, state: '' });
              return;
            }
            setEmployee({ ...employee, state: e.name });
          }}
          form="form"
          menuPlacement="auto"
          isClearable
          required
          value={{ name: employee.state, abbreviation: employee.state }}
        />

        <label htmlFor="zipCode">
          Zip Code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          type="number"
          min={10000}
          max={99999}
          onChange={(e) =>
            setEmployee({ ...employee, zipCode: e.target.value })
          }
          required
          value={employee.zipCode}
        />
      </fieldset>

      <label htmlFor="department">
        Department
      </label>
      <Select
        name="department"
        inputId="department"
        options={department.department}
        defaultValue={department.department[0]}
        onChange={(e) => {
          if (e === null) {
            setEmployee({ ...employee, department: '' });
            return;
          }
          setEmployee({ ...employee, department: e.value });
        }}
        form="form"
        menuPlacement="auto"
        value={{ label: employee.department, value: employee.department }}
      />

      <button onClick={validForm}>Save</button>
    </form>
  );
}