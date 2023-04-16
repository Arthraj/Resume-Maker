import React, { useState } from "react";
import PersonalForm from "./components/Form";
import SkillsForm from "./components/Skillsform";
import WorkEx from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import "./css/Form.css";
import './script.js';

const Resume = () => {
  const [step, setStep] = useState(1);

  const [allData, setAllData] = useState({});

  const [personalData, setPersonalData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [skillsData, setSkillsData] = useState([{ skill: "", proficiency: 0 }]);
  const [workExperience, setworkExperienceData] = useState([
    {
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      aboutRole: "",
    },
  ]);
  const [projects, setProjectsData] = useState([
    {
      projectName: "",
      techUsed: "",
      startDate: "",
      endDate: "",
      aboutProject: "",
    },
  ]);
  const [education, setEducationData] = useState([
    {
      institutionName: "",
      degreeName: "",
      startDate: "",
      endDate: "",
      percentage: "",
    },
  ]);

  const handlePersonalDataSubmit = (data) => {
    const temp = { ...allData, personalData: data };
    console.log(temp);
    setAllData(temp);
    setPersonalData(data);
  };

  const handleSkillsDataSubmit = (data) => {
    const temp = { ...allData, skills: data };
    console.log(temp);
    setAllData(temp);
    setSkillsData(data);
  };

  const handleWorkExDataSubmit = (data) => {
    const temp = { ...allData, workExperience: data };
    console.log(temp);
    setAllData(temp);
    setworkExperienceData(data);
  };

  const handleProjectsDataSubmit = (data) => {
    const temp = { ...allData, projects: data };
    console.log(temp);
    setAllData(temp);
    setProjectsData(data);
  };

  const handleEducationDataSubmit = (data) => {
    const temp = { ...allData, education: data };
    console.log(temp);
    setAllData(temp);
    setEducationData(data);
  };

  const handleFinalDataSubmit=()=>{
    let person=prompt("I hereby declare that all the information given by me are true and verified from my end.", "Your Name here");
    if (person == null || person == "" || person=="Your Name here") {
      handleFinalDataSubmit();
    } else {
      let text=`${person} your resume Data has been uploaded please check your Dashboard.`
      document.getElementById("finalSubmitMessage").innerHTML=text;
    }

  }

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalForm onSave={handlePersonalDataSubmit} data={personalData} next={handleNextStep}/>
        );
      case 2:
        return <SkillsForm onSave={handleSkillsDataSubmit} data={skillsData} next={handleNextStep}/>;
      case 3:
        return <WorkEx onSave={handleWorkExDataSubmit} data={workExperience} next={handleNextStep}/>;
      case 4:
        return <Projects onSave={handleProjectsDataSubmit} data={projects} next={handleNextStep}/>;
      case 5:
        return (
          <Education onSave={handleEducationDataSubmit} data={education} next={handleNextStep}/>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="msform">
        {/* <ul id="progressbar">
          <li className="active">Personal Details</li>
          <li>Social Profiles</li>
          <li>Account Setup</li>
        </ul> */}
        {renderFormStep()}
        {step > 1 && <button onClick={() => handlePrevStep()}>Previous</button>} : {step>5 && <button onClick={()=>handleFinalDataSubmit()}>Submit</button>}
      </div>
      <p id="finalSubmitMessage"></p>
    </>
  );
};

export default Resume;
