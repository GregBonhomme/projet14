import "../../style/components/dropdown.css"
import { useState } from "react"
import List from "../List"

function Dropdown ({data,value,setValue}) {

    const [display, setDisplay] = useState( "none" )

    function toggleMenu() {
        if ( display === "none") {
            setDisplay( "flex" )
        } else {
            setDisplay( "none" )
        }
    }

    function handleClick(e) {
        let selection = e.target.innerHTML
        setValue(selection)
        setDisplay( "none" )
    }

    return (
        <div className="dropdown">
            <div className="menu_bar" onClick={toggleMenu}>
                {value}
                <img src="/assets/down-arrow.png" className="arrowIcon" alt="Icone de menu déroulant"/>
            </div>
            <div className="menu_content" style={{display:display}} onClick={handleClick}>
                <List list={data} />
            </div>
        </div>
    )
}

export default Dropdown