import React, { useState } from 'react';
import MyDatePicker from './DatePicker/MyDatePicker';
import States from '../../Data/states';
import Departments from '../../Data/department';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Slice/employeeSlice";
import { Modal } from "sjordan0-p14";
import Input from './Input';
import Dropdown from './Dropdown/Dropdowns';


export default function Form() {

  const myTheme = {
    containerBg: "white",
    messageBg: "grey",
    borderColor: "black",
    buttonBg: "grey",
    buttonHoverBg: "white",
    buttonHoverTxt: "black",
  };

  const [
    firstNameToAdd,
    lastNameToAdd,
    startDateToAdd,
    departmentToAdd,
    birthDateToAdd,
    streetToAdd,
    cityToAdd,
    stateToAdd,
    zipCodeToAdd,
  ] = useSelector((state) => [
    state.firstName,
    state.lastName,
    state.startDate,
    state.department,
    state.birthDate,
    state.street,
    state.city,
    state.state,
    state.zipCode,
  ]);

  const [firstName, setFirstName] = useState(firstNameToAdd);
  const [lastName, setLastName] = useState(lastNameToAdd);
  const [birthDate, setBirthDate] = useState(birthDateToAdd);
  const [startDate, setStartDate] = useState(startDateToAdd);
  const [street, setStreet] = useState(streetToAdd);
  const [city, setCity] = useState(cityToAdd);
  const [State, setState] = useState(stateToAdd);
  const [zipCode, setZipCode] = useState(zipCodeToAdd);
  const [department, setDepartment] = useState(departmentToAdd);

  const [valueBirthDate, setValueBirthDate] = useState(null);
  const [valueStartDate, setValueStartDate] = useState(null);

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const dateForTable = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`.toString();
  };

  const employee = {
    firstName,
    lastName,
    startDate: dateForTable(new Date(startDate)),
    department,
    birthDate: dateForTable(new Date(birthDate)),
    street,
    city,
    State,
    zipCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(employee));
    e.target.reset();
    setValueBirthDate(null);
    setValueStartDate(null);
    onOpenModal();
  };

  console.log(employee);
  console.log("BIRTH", birthDate);
  console.log("START", startDate);
  console.log("STATE", State);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstname"
          labelTitle="First Name:"
          value={firstNameToAdd}
          setInput={setFirstName}
        />
        <Input
          type="text"
          name="lastname"
          labelTitle="Last Name:"
          value={lastNameToAdd}
          setInput={setLastName}
        />
        <MyDatePicker
          required
          labelTitle="Birth Date:"
          selected={valueBirthDate}
          setValueDate={setValueBirthDate}
          setDate={setBirthDate}
          placeholder="Select a birth date"
        />
        <MyDatePicker
          required
          labelTitle="Start Date:"
          selected={valueStartDate}
          setValueDate={setValueStartDate}
          setDate={setStartDate}
          placeholder="Select a start date"
        />
        <div className="adress">
          <Input
            type="text"
            name="street"
            labelTitle="Street:"
            value={streetToAdd}
            setInput={setStreet}
          />
          <Input
            type="text"
            name="city"
            labelTitle="City:"
            value={cityToAdd}
            setInput={setCity}
          />
          <Dropdown
            name="state"
            labelTitle="State:"
            value={State}
            setDrop={setState}
            datas={States}
          />
          <Input
            type="number"
            name="zipcode"
            labelTitle="Zipcode:"
            value={zipCodeToAdd}
            setInput={setZipCode}
          />
        </div>
        <Dropdown
          name="department"
          labelTitle="Department"
          value={departmentToAdd}
          setDrop={setDepartment}
          datas={Departments}
        />
        <Input
          type="submit"
          name="submit"
          className="submit"
          value="Save"
        />
      </form>
      {openModal && (
        <Modal theme={myTheme} close={onCloseModal} text="Employee Created!" />
      )}
    </>
  );
};