import "../../style/pages/home.css"
import { Link } from "react-router-dom"
import { useState,useRef } from "react"
import DatePicker from "react-datepicker"
import Dropdown from "../../components/Dropdown"
import Modal from "../../components/Modal/index.js"
import {states} from "../../states.js"
import {departments} from "../../departments.js"
import "react-datepicker/dist/react-datepicker.css"
import {mockup} from "../../mockup.js"

function Home () {

    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees",JSON.stringify(mockup))
    }
    const employees = JSON.parse(localStorage.getItem("employees"))
    const firstName = useRef();
    const lastName = useRef();
    const street = useRef();
    const city = useRef();
    const zipCode = useRef();
    const [birthDay,setBirthDay] = useState(new Date())
    const [startDate,setStartDate] = useState(new Date())
    const [state,setState] = useState(states? states[0] : "empty")
    const [department,setDepartment] = useState(departments? departments[0] : "empty")
    const [isModalOpened,setModalOpened] = useState(false)

    const handleClick = () => {

        const employee = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            startDate: startDate,
            department:department,
            birthDay: birthDay,
            street:street.current.value,
            city:city.current.value,
            state:state,
            zipcode:zipCode.current.value
        }
        employees.push(employee)
        localStorage.setItem("employees",JSON.stringify(employees))
        console.log(employees)
        
        if ( isModalOpened === false ) {
            setModalOpened(true)
        }
    }

    return (
            <div>
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <div className="nav">
                    <Link to="/employees" className="navBtn">
                        View Current Employees
                    </Link>
                </div>
                <div className="container">
                    <form action="#" id="create-employee">
                        <h2>Create Employee</h2>
                        <div className="form_element">
                            <div className="label">First Name</div>
                            <input type="text" id="first-name" ref={firstName}/>
                        </div>
                        <div className="form_element">
                            <div className="label">Last Name</div>
                            <input type="text" id="last-name" ref={lastName}/>
                        </div>
                        <div className="form_element">
                            <div className="label">Date of Birth</div>
                            <DatePicker className="picker" onChange={setBirthDay} selected={birthDay}/>
                        </div>
                        <div className="form_element">
                            <div className="label">Start Date</div>
                            <DatePicker className="picker" onChange={setStartDate} selected={startDate}/>
                        </div>
                        <fieldset className="address">
                            <legend>Address</legend>

                            <div className="label">Street</div>
                            <input id="street" type="text" ref={street}/>

                            <div className="label">City</div>
                            <input id="city" type="text" ref={city}/>

                            <div className="label">State</div>
                            <Dropdown data={states} value={state} setValue={setState}/>

                            <div className="label">Zip Code</div>
                            <input id="zip-code" type="number" ref={zipCode}/>
                        </fieldset>

                        <div className="form_element">
                            <div className="label">Department</div>
                            <Dropdown data={departments} value={department} setValue={setDepartment}/>
                        </div>
                    </form>

                </div>
                <div className="sendBtn">
                    <span onClick={handleClick}>Save</span>
                </div>
                <Modal isOpen={isModalOpened} setModalOpened={setModalOpened}>
                    <div id="confirmation" className="modal">Employee Created!</div>
                </Modal>
        </div>
    )
}

export default Home