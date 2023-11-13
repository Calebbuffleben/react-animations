import React, { useState } from 'react'

const FormValidation = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
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

        if(Object.keys(newErrors).length === 0) {
            setIsSubmitted(true);

            setFormData({
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    }
    return(
        <form
            onSubmit={handleSubmit}
            noValidate
        >   
            <div>
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required /> 
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" value={formData.password} onChange={handleChange} required />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input name="confirm-password" type="password" value={formData.confirmPassword  } onChange={handleChange} required />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
        </form>
    );
}

export default FormValidation;