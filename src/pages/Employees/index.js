import "../../style/pages/employees.css"
import React from "react"
import { Link } from "react-router-dom"
import { useTable } from "react-table"
import {data} from "../../mockup.js"

function Employees () {

    const columns = React.useMemo(
        () => [
            {Header:"First Name", accessor:"firstName"},
            {Header:"Last Name", accessor:"lastName"},
            {Header:"Start Date", accessor:"startDate"},
            {Header:"Department", accessor:"department"},
            {Header:"Birthday", accessor:"dateOfBirth"},
            {Header:"Street", accessor:"street"},
            {Header:"City", accessor:"city"},
            {Header:"State", accessor:"state"},
            {Header:"Zipcode", accessor:"zipcode"}
        ],
        []
    )

    const tableInstance = useTable({columns,data})

    const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = tableInstance

    return (
        <body>
        <div id="employee-div" class="container">
            <h3>Current Employees</h3>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <Link to="/">Home</Link>
        </div>
    </body>
    )
}

export default Employees