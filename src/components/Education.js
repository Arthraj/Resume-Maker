import React from "react";
import '../css/Form.css';

import { useState } from "react";

function Education({onSave,data,next}){
    const [education, setEducation] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(education);
    next();
  };

  const handleAddField = () => {
    setEducation([...education, { institutionName: '', degreeName: '', startDate: '', endDate: '', percentage:'' }]);
  };

  const handleDeleteField = (index) => {
    const values = [...education];
    values.splice(index, 1);
    setEducation(values);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...education];
    values[index][name] = value;
    setEducation(values);
  };



  return (
    <>
    <h1 className='fs-title'>Educational Details</h1>
    <h4 className='fs-subtitle'></h4>
    <form onSubmit={handleSubmit}>
      {education.map((educate, index) => (
        <div key={index}>
          <label>
            Degree:
            <input type="text" name="degreeName" value={educate.degreeName} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Institution Name:
            <input type="text" name="institutionName" value={educate.institutionName} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDate" value={educate.startDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDate" value={educate.endDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Percentage:
            <input type="number" name="percentage" value={educate.percentage} onChange={(event) => handleInputChange(index, event)}/>
          </label>
          <br />
          <button onClick={() => handleDeleteField(index)}>Delete</button>
        </div>
      ))}
      <button onClick={() => handleAddField()}>Add Work Experience</button>
    
      <input type="submit" value="Save & Next" />
    </form>

    </>
  );
}
export default Education;