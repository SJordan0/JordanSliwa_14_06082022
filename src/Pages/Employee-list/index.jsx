import { Link } from "react-router-dom"
import Table from "../../components/Table"

export default function EmployeeList() {
    return(
        <main>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <Table id="employee-table" className="display"></Table>
                <Link to={`/`}> Home </Link>
            </div>
        </main>
    )
}