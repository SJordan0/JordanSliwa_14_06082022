import DataTable from 'react-data-table-component';

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

const data = [
    {
        id: 1,
        FirstName: 'Oui',
        LastName: 'Oui',
        DateOfBirth: '20/01/1990',
        StartDate: '20/01/2010',
        Street: 'Ici',
        City: 'là bas',
        State: 'Alabama',
        ZipCode: '66666',
        Department: 'Sales',
    },
]

export default function Table() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};