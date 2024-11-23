import "./App.css";
import GetInfo from "./components/get_info.jsx";
import EducationInfo from "./components/education_info.jsx";
import WorkExperience from "./components/work_experience.jsx";
import FormDataDisplay from "./components/form_data_display.jsx";
import { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school_name: "",
    qualification_title: "",
    grad_year: "",
    company_name: "",
    role_title: "",
    main_responsibilities: "",
    date_started: "",
    date_ended: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    console.log('Form data updated:', formData);
  }, [formData]);

  return (
    <div className="App">
    <div className="test-container">
    <GetInfo formData={formData} handleChange={handleChange} isEditing={isEditing} />
        <EducationInfo formData={formData} handleChange={handleChange} isEditing={isEditing} />
        <WorkExperience formData={formData} handleChange={handleChange} isEditing={isEditing} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleEdit}>Edit</button>

    </div>
      {isSubmitted && <FormDataDisplay formData={formData} />}
    </div>
  );
}

export default App;
