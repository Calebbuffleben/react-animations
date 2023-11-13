import React, { useState } from 'react'

const FormValidation = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = () => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {}
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.email = 'Password is required';
        }

        if (!formData.confirmPassword) {
            newErrors.email = 'Confirm password is required';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Password do not match';
        }
        setErrors(newErrors);
    }
    return(
        <form
            onSubmit={handleSubmit}
            noValidate
        >
            <input name="email" type="email" onChange={handleChange} required />
            <input name="password" type="password" onChange={handleChange} required />
            <input name="confirm-password" type="password" onChange={handleChange} required />
        </form>
    );
}

export default FormValidation;