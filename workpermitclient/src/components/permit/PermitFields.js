import React from 'react';

const permitFields = ({input, label, type, meta: {error, touched}}) => {
    return(
        <div>
            <div className="loginField">
            <label>{label}</label>
            <input type={type} {...input} />
            </div>
            <div style={{marginBottom: '20px',color: "red"}}>
                { touched && error}
            </div>
        </div>
    )
};


export default permitFields;