import DataTable from 'react-data-table-component';
import { listEmployees } from '../../Data/employees';

const columns = [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'FirstName',
        selector: row => row.FirstName,
    },
    {
        name: 'LastName',
        selector: row => row.LastName,
    },
    {
        name: 'DateOfBirth',
        selector: row => row.DateOfBirth,
    },
    {
        name: 'StartDate',
        selector: row => row.StartDate,
    },
    
    {
        name: 'Street',
        selector: row => row.Street,
    },
    {
        name: 'City',
        selector: row => row.City,
    },
    {
        name: 'State',
        selector: row => row.State,
    },
    {
        name: 'ZipCode',
        selector: row => row.ZipCode,
    },
    {
        name: 'Department',
        selector: row => row.Department,
    },
];

const employees = listEmployees

export default function Table() {
    return (
        <DataTable
            columns={columns}
            data={listEmployees}
        />
    );
};