import React, { useState } from 'react';
import '../css/Form.css';

const skillOptions = [
    "Java","Cpp","HTML","CSS","Node Js"
  ]

function SkillsForm({ onSave,data,next}) {
  const [skills, setSkills] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(skills);
    next();
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkills = [...skills];
    if (name === 'proficiency') {
      updatedSkills[index][name] = parseInt(value);
    } else {
      updatedSkills[index][name] = value;
    }
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: '', proficiency: 0 }]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <>
    <h1 className='fs-title'>Skills</h1>
    <h4 className='fs-subtitle'></h4>
    
    <form onSubmit={handleSubmit}>
      {skills.map((skill, index) => (
        <div key={index}>
          <label htmlFor={`skill${index}`}>Skill:</label>
          <select id={`skill${index}`} name="skill" value={skill.skill} onChange={(event) => handleChange(index, event)} required>
            <option value="">Select a skill</option>
            {skillOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label htmlFor={`proficiency${index}`}>Proficiency:</label>
          <select id={`proficiency${index}`} name="proficiency" value={skill.proficiency} onChange={(event) => handleChange(index, event)} required>
            <option value="">Select proficiency level</option>
            <option value="25">Beginner</option>
            <option value="50">Intermediate</option>
            <option value="75">Advanced</option>
            <option value="100">Proficient</option>
          </select>

          <button type="button" onClick={() => handleRemoveSkill(index)}>Remove Skill</button>
        </div>
      ))}

      <button type="button" onClick={handleAddSkill}>Add Skill</button>
      <input type="submit" value="Save & Next" />
    </form>
    </>
  );
}

export default SkillsForm;
