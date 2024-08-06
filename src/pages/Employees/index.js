import "../../style/pages/employees.css"
import React from "react"
import { useState } from "react"
import { mockup } from "../../mockup"
import { tableStyle } from "./dataTable.js"
import { Link } from "react-router-dom"
import DataTable from "react-data-table-component"

const columns = [
    {name:"First Name", selector: row => row.firstName, sortable: true},
    {name:"LastName", selector: row => row.lastName,sortable: true},
    {name:"StartDate", selector: row => row.startDate,sortable: true},
    {name:"Department", selector: row => row.department,sortable: true},
    {name:"BirthDay", selector: row => row.birthDay,sortable: true},
    {name:"Street", selector: row => row.street,sortable: true},
    {name:"City", selector: row => row.city,sortable: true},
    {name:"State", selector: row => row.state,sortable: true},
    {name:"Zipcode", selector: row => row.zipcode,sortable: true}
]

function Employees () {

    const employees = JSON.parse(localStorage.getItem("employees"))
    const [data, setData] = useState(employees)

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const newRows = mockup.filter(row => 
            (row.firstName && row.firstName.toString().toLowerCase().includes(searchTerm)) ||
            (row.lastName && row.lastName.toString().toLowerCase().includes(searchTerm)) ||
            (row.startDate && row.startDate.toString().toLowerCase().includes(searchTerm)) ||
            (row.department && row.department.toString().toLowerCase().includes(searchTerm)) ||
            (row.birthDay && row.birthDay.toString().toLowerCase().includes(searchTerm)) ||
            (row.street && row.street.toString().toLowerCase().includes(searchTerm)) ||
            (row.city && row.city.toString().toLowerCase().includes(searchTerm)) ||
            (row.state && row.state.toString().toLowerCase().includes(searchTerm)) ||
            (row.zipcode && row.zipcode.toString().toLowerCase().includes(searchTerm))
        );

        setData(newRows);
    };

    return (
        <div>
            <div id="employee-div">
                <h3 className="pageTitle">Current Employees</h3>
                <div className="input-group">
                    <input
                        type="search"
                        className="form-control-sm border ps-3 searchBar"
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                </div>
                <DataTable
                    columns={columns} 
                    data={data}
                    customStyles={tableStyle}
                    pagination
                />
            </div>
            <div className="homeArea">
                <Link to="/" className="homeBtn">
                    Back to homepage
                </Link>
            </div>
        </div>
    )
}

export default Employees