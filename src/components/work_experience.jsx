import { useState } from 'react';

const WorkExperience = ({formData, handleChange, isEditing}) => { 

    return (
        <>
            <div>
                <label htmlFor="company_name">Company Name:</label>
                <input
                    id="company_name"
                    type="text"
                    name="company_name"
                    placeholder="Enter your company name"
                    value={formData.company_name}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="role_title">Role Title:</label>
                <input
                    id="role_title"
                    type="text"
                    name="role_title"
                    placeholder="Enter your role title"
                    value={formData.role_title}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="main_responsibilities">Main Responsibilities:</label>
                <textarea
                    id="main_responsibilities"
                    name="main_responsibilities"
                    placeholder="Enter your main responsibilities"
                    value={formData.main_responsibilities}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="date_started">Date Started:</label>
                <input
                    id="date_started"
                    type="date"
                    name="date_started"
                    value={formData.date_started}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="date_ended">Date Ended:</label>
                <input
                    id="date_ended"
                    type="date"
                    name="date_ended"
                    value={formData.date_ended}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
        </>
    )
}

export default WorkExperience;

