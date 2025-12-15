import React, { useState } from 'react'

function useForm(initialValue = {}, callback) {
    const [values, setValues] = useState(initialValue)

    // Handle input change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name] : value
        }))
    }

    // handle form submit

    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values)
    }

    //Reset Form
    const resetForm = () => setValues(initialValue)

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm
  }
}

export default useForm
