import React, {forwardRef} from 'react';
import './Modal.css';

const Modal = forwardRef((props, ref) => (
    (props.isOpen 
        ?   <div ref={ref} className="fixed z-50 flex overflow-auto animate__animated animate_fadeIn pin bg-blend-overlay bg-smoke-dark">
                <div className="fixed flex flex-col justify-end w-full m-auto align-top transition-all bg-white shadow-inner animate__animated animate_fadeInUp md:relative pin-y pin-x md:justify-center md:rounded-md md:h-auto md:shadow modal__lg">
                    {props.children} 
                </div>
            </div>
            
        : ``    
    )
));

export default Modal;
