import "../../style/components/modal.css"
import { useRef,useState,useEffect } from "react"

function Modal ({isOpen,setModalOpened ,children}) {

    const modalRef = useRef(HTMLDialogElement)
    const [modalDisplay, setModalDisplay] = useState( "none" )

    
    useEffect(()=> {
        const modalElement = modalRef.current
        if (modalElement) {
            if (isOpen === true) {
                setModalDisplay("flex")
            } else {
                setModalDisplay("none")
            }
        }
    },[isOpen])

    const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
            handleCloseModal()
        }
    }

    const handleCloseModal = () => {
        setModalOpened(false)
    }

    return (
        <dialog ref={modalRef} onKeyDown={handleEscapeKey} className="modal" style={{display:modalDisplay}}>
            <div className="modal_closeBtn" onClick={handleCloseModal}>
                <img src="/assets/closeBtn.png" alt="Bouton de fermeture" />
            </div>
            {children}
        </dialog>
    )
}

export default Modal