import "../../style/components/list.css"

function List ({list}) {

    return (
        <ul className="list">
            {
                list.map((element,index) => {
                    return (
                        <li key={index}>{element}</li>
                    )
                })
            }
        </ul>
    )
}

export default List