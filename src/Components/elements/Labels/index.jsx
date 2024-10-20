import React from "react";
import './index.css'


const Label = ({children})=> {
    return (
        <div className="frame-50">
        <label htmlFor="">{children}</label>
        </div>
    );
}



export default Label