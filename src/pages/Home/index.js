import "../../style/pages/home.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import DatePicker from "react-datepicker"
import Dropdown from "../../components/Dropdown"
import Modal from "../../components/Modal/index.js"
import {states} from "../../states.js"
import {departments} from "../../departments.js"
import "react-datepicker/dist/react-datepicker.css"

function Home () {

    const [birthDay,setBirthDay] = useState(new Date())
    const [startDate,setStartDate] = useState(new Date())
    const [isModalOpened,setModalOpened] = useState(false)

    const handleClick = () => {
        if ( isModalOpened === false ) {
            setModalOpened(true)
        }
    }

    return (
            <div>
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <div className="container">
                    <Link to="/employees">View Current Employees</Link>
                    <h2>Create Employee</h2>
                    <form action="#" id="create-employee">
                        <div className="label">First Name</div>
                        <input type="text" id="first-name" />

                        <div className="label">Last Name</div>
                        <input type="text" id="last-name" />

                        <div className="label">Date of Birth</div>
                        <DatePicker onChange={setBirthDay} selected={birthDay}/>

                        <div className="label">Start Date</div>
                        <DatePicker onChange={setStartDate} selected={startDate}/>

                        <fieldset className="address">
                            <legend>Address</legend>

                            <div className="label">Street</div>
                            <input id="street" type="text" />

                            <div className="label">City</div>
                            <input id="city" type="text" />

                            <div className="label">State</div>
                            <Dropdown data={states}/>

                            <div className="label">Zip Code</div>
                            <input id="zip-code" type="number" />
                        </fieldset>

                        <div className="label">Department</div>
                        <Dropdown data={departments}/>
                    </form>

                    <button onClick={handleClick}>Save</button>
                </div>
                <Modal isOpen={isModalOpened} setModalOpened={setModalOpened}>
                <div id="confirmation" className="modal">Employee Created!</div>
                </Modal>
        </div>
    )
}

export default Home