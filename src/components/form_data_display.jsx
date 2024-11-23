import { useState } from 'react';

const FormDataDisplay = ({ formData }) => {
  return (
    <div className="form-data-display">
      <h2>Form Data</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>School Name:</strong> {formData.school_name}</p>
      <p><strong>Qualification Title:</strong> {formData.qualification_title}</p>
      <p><strong>Graduation Year:</strong> {formData.grad_year}</p>
      <p><strong>Company Name:</strong> {formData.company_name}</p>
      <p><strong>Role Title:</strong> {formData.role_title}</p>
      <p><strong>Main Responsibilities:</strong> {formData.main_responsibilities}</p>
      <p><strong>Date Started:</strong> {formData.date_started}</p>
      <p><strong>Date Ended:</strong> {formData.date_ended}</p>
    </div>
  );
};

export default FormDataDisplay;