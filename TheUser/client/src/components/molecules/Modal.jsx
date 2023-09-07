import './Modal.scss';

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "container-modal active" : "container-modal"} onClick={() => { setActive(false); }}>
            <div className={active ? "modal-wrapper active" : "modal-wrapper"} onClick={(e) => { e.stopPropagation(); }} >
                { children }
            </div>
        </div>
    )
}

export default Modal;