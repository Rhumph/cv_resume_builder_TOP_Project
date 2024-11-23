import { useState } from 'react';

const EducationInfo = ({ formData, handleChange, isEditing }) => { 
    return (
        <>
            <div>
                <label htmlFor="school_name">School Name:</label>
                <input
                    id="school_name"
                    type="text"
                    name="school_name"
                    placeholder="Enter your school name"
                    value={formData.school_name}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="qualification_title">Qualification Title:</label>
                <input
                    id="qualification_title"
                    type="text"
                    name="qualification_title"
                    placeholder="Enter your qualification title"
                    value={formData.qualification_title}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="grad_year">Graduation Year:</label>
                <input
                    id="grad_year"
                    type="text"
                    name="grad_year"
                    placeholder="Enter your graduation year"
                    value={formData.grad_year}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
        </>
    )
}

export default EducationInfo;


