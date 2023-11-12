import React from 'react'

const FormValidation = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formElement = event.target;
        
    }
    return(
        <form
            onSubmit={handleSubmit}
            noValidate
        >
            <input name="email" type="email" required />
            <input name="password" type="password" required />
            <input name="confirm-password" type="password" required />
        </form>
    );
}

export default FormValidation;