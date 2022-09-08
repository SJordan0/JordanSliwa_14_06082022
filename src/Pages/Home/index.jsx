import { Link } from "react-router-dom"
import './home.css'
import React from "react";
import Form from "../../components/Form";


export default function Home () {
    return (
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
            <Link to={`/employees-list`}> View Current Employees </Link>
                <h2>Create Employee</h2>
                <Form/>
            </div>
        </main> 
    )
}