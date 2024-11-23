import { useState } from 'react';

const GenInfo = ({formData, handleChange, isEditing}) => {

    return (
        <>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                />
            </div>
        </>
    );
};

export default GenInfo;