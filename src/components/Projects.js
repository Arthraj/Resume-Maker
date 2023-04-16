import React from "react";
import '../css/Form.css';
import { useState } from "react";

function Projects({onSave,data,next}){
    const [projects, setProjects] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(projects);
    next();
  };

  const handleAddField = () => {
    setProjects([...projects, { projectName: '', techUsed: '', startDate: '', endDate: '', aboutProject:'' }]);
  };

  const handleDeleteField = (index) => {
    const values = [...projects];
    values.splice(index, 1);
    setProjects(values);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...projects];
    values[index][name] = value;
    setProjects(values);
  };



  return (
    <>
    <h1 className='fs-title'>Projects</h1>
    <h4 className='fs-subtitle'></h4>
    <form onSubmit={handleSubmit}>
      {projects.map((project, index) => (
        <div key={index}>
          <label>
            Project Name:
            <input type="text" name="projectName" value={project.projectName} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Technologies Used:
            <input type="text" name="techUsed" value={project.techUsed} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDate" value={project.startDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDate" value={project.endDate} onChange={(event) => handleInputChange(index, event)} required/>
          </label>
          <br />
          <label>
          About Project:
            <input type="text" name="aboutProject" value={project.aboutProject} onChange={(event) => handleInputChange(index, event)}/>
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

export default Projects;