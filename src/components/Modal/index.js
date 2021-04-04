
import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";

import resume1 from '../../assets/images/resume.jpg';

function Modal ({onClose}) {
    
    return(
        // JSX
    
        <div className="modalContainer">
            <div className="modalWrapper">
                <span className="closeBtn" onClick={onClose}>
                    <FaRegWindowClose/>
                </span>
                <img className = "resume" src={resume1} alt= "resume1"/>
            </div>
        </div>
        
    );
}

export default Modal;