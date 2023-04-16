import React, { useState } from 'react';
import '../css/Form.css';
function WorkExperience ({onSave,data,next}) {
  const [workExperience, setWorkExperience] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(workExperience);
    next();
  };

  const handleAddField = () => {
    setWorkExperience([...workExperience, { company: '', jobTitle: '', startDate: '',location:'', endDate: '',aboutRole:'' }]);
  };

  const handleDeleteField = (index) => {
    const values = [...workExperience];
    values.splice(index, 1);
    setWorkExperience(values);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...workExperience];
    values[index][name] = value;
    setWorkExperience(values);
  };



  return (
    <>
    <h1 className='fs-title'>Work Experience</h1>
    <h4 className='fs-subtitle'></h4>
    
    <form onSubmit={handleSubmit}>
      {workExperience.map((experience, index) => (
        <div key={index}>
          <label>
            Company:
            <input type="text" name="company" value={experience.company} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Job Title:
            <input type="text" name="jobTitle" value={experience.jobTitle} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDate" value={experience.startDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDate" value={experience.endDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Location:
            <input type="text" name="location" value={experience.location} onChange={(event) => handleInputChange(index, event)}/>
          </label>
          <br />
          <label>
            About Role:
            <input type="text" name="aboutRole" value={experience.aboutRole} onChange={(event) => handleInputChange(index, event)}/>
          </label>
          <br />
          <button onClick={() => handleDeleteField(index)}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      ))}
      <button onClick={() => handleAddField()}>+</button>
    
      <input type="submit" value="Save & Next" />
    </form>

    </>
  );
};

export default WorkExperience;
