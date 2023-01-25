import React, { useState } from "react";
import { Calander } from "../components/Calander";

import { MultiSelectDropDown } from "../components/MultiSelectDropDown";
import { SimpleDropDown } from "../components/SimpleDropDown";
import { Textfeild } from "../components/Textfeild";
import "./CreateJobPage.css";
export const CreateJobPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [degrees, setDegrees] = useState([]);
  const [employmentCategories, setEmploymentCategories] = useState([]);
  const [genders, setGenders] = useState("");
  const [location, setLocation] = useState("");
  const [softskills, setSoftskills] = useState([]);
  const [technicalskills, setTechnicalskills] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [perksAndBenefits, setPerksAndBenefits] = useState([]);
  const [travelling, setTravelling] = useState([]);
  const [vacancies, setVacancies] = useState();
  const [closingDate, setClosingDate] = useState(null);
  const [selectedResponsibilites, setSelectedResponsibilities] = useState([]);

  const experienceLevelOptions = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
  ];
  const genderOptions = ["MALE", "FEMALE", "BOTH_MALE_FEMALE", "ALL"];
  const travellingOptions = ["YES", "NO", "MAYBE "];

  let responsibilityOptions = [
    "Contribute in all phases of the development lifecycle",
    "Write well designed, testable, efficient code",
    "Ensure designs are in compliance with specifications",
  ];

  let departmentOptions = ["CLOUD_NATIVE_ENGINEERING", "DATA_ENGINEERING"];

  let degreeOptions = ["B.E - CIS", "BSCS"];

  let employmentCategoriesOptions = [
    "PART_TIME",
    "FULL_TIME",
    "CONTRACT_BASE",
    "ONLINE",
    "ONSITE",
  ];

  let softSkillsOptions = ["JAVA", "JUNIT", "SQL", "REACT"];

  let technicalskillsOptions = ["technical Skill A", "technical Skill B"];

  let benefitsAndPerksOptions = ["benefit A", "benefit B", "benefit C"];

  let locationOptions = ["karachi", "lahore", "islamabad"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !degrees.length ||
      !employmentCategories.length ||
      !softskills.length ||
      !technicalskills.length ||
      !selectedResponsibilites.length ||
      !perksAndBenefits.length ||
      !experienceLevel.length
    ) {
      alert("Please fill out all the required fields");
      return;
    }

    let requestData = {
      title: jobTitle,
      department: department,
      employementCategory: employmentCategories[0], // ["FULL_TIME","ONLINE"],
      gender: genders, //["MALE","FEMALE"],
      traveling: travelling,
      location: location,
      softSkills: softskills[0].map((ss) => {
        return { softSkill: ss };
      }),
      technicalSkills: technicalskills[0].map((ts) => {
        return { technicalSkill: ts };
      }),
      closeDate: closingDate, //"2023-01-30"
      description: description,
      responsibilitiess: selectedResponsibilites[0].map((rs) => {
        return { responsibility: rs };
      }),
      educations: degrees[0].map((edu) => {
        return { education: edu };
      }),
      benefitPerkss: perksAndBenefits[0].map((pb) => {
        return { benefitPerks: pb };
      }),
      experienceLevel: experienceLevel,
      vacancyCount: vacancies,
    };

    fetch(
      `http://localhost:8080/job/post`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      },
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("sucessful");
      })
      .catch((err) => {
        // setError("Server is busy or crediential is invalid");
      });
  };

  return (
    <div className="mainContainer">
      <div className="create-job-page">
        {" "}
        <h1 className="heading">CREATE JOB PAGE</h1>
        <form onSubmit={handleSubmit}>
          <div className="enterjobtitle">
            <h4 className="heading2">Job Title</h4>
            <Textfeild
              data-testid="title-input"
              inputValue={jobTitle}
              setInputValue={setJobTitle}
              labelText="title"
              placeholderText="enter job title"
            ></Textfeild>
          </div>
          <div className="jobdescription">
            <h4 className="heading3">Job Description</h4>

            <Textfeild
              inputValue={description}
              setInputValue={setDescription}
              placeholderText="enter job description"
            ></Textfeild>
          </div>
          <br></br>

          <div className="div2">
            <div className="dropdown">
              <h4 className="heading4">Department</h4>

              <SimpleDropDown
                title="Department"
                selectedOption={department}
                setSelectedOption={setDepartment}
                options={departmentOptions}
              ></SimpleDropDown>
            </div>
            <div className="responsibilities">
              <h4 className="heading5">Responsibilities</h4>

              <MultiSelectDropDown
                fetchedOptions={responsibilityOptions}
                selected={selectedResponsibilites}
                setSelected={setSelectedResponsibilities}
              ></MultiSelectDropDown>
            </div>
          </div>

          <div className="div3">
            <div className="education">
              <h4 className="heading6">Degrees/Education</h4>

              <MultiSelectDropDown
                fetchedOptions={degreeOptions}
                selected={degrees}
                setSelected={setDegrees}
              ></MultiSelectDropDown>
            </div>

            <div className="employmentcategory">
              <h4 className="heading7">Employment Category</h4>

              <MultiSelectDropDown
                fetchedOptions={employmentCategoriesOptions}
                selected={employmentCategories}
                setSelected={setEmploymentCategories}
              ></MultiSelectDropDown>
            </div>
          </div>
          <br></br>
          <div className="div4">
            <div className="softskills">
              <h4 className="heading8">Soft Skills</h4>

              <MultiSelectDropDown
                fetchedOptions={softSkillsOptions}
                selected={softskills}
                setSelected={setSoftskills}
              >
                {" "}
              </MultiSelectDropDown>
            </div>

            <div className="technicalskills">
              <h4 className="heading9">Technical Skills</h4>

              <MultiSelectDropDown
                fetchedOptions={technicalskillsOptions}
                selected={technicalskills}
                setSelected={setTechnicalskills}
              >
                {" "}
              </MultiSelectDropDown>
            </div>
          </div>
          <br></br>
          <div className="div5">
            <div className="perksandbenifits">
              <h4 className="heading10">Perks and Benifits</h4>

              <MultiSelectDropDown
                fetchedOptions={benefitsAndPerksOptions}
                selected={perksAndBenefits}
                setSelected={setPerksAndBenefits}
              ></MultiSelectDropDown>
            </div>

            <div className="Location">
              <h4 className="heading11">Location</h4>

              <SimpleDropDown
                selectedOption={location}
                setSelectedOption={setLocation}
                options={locationOptions}
              ></SimpleDropDown>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <br></br>

          <section className="form2">
            <div className="div6">
              <div className="experience">
                <h4 className="heading12">Experience</h4>

                <SimpleDropDown
                  selectedOption={experienceLevel}
                  setSelectedOption={setExperienceLevel}
                  options={experienceLevelOptions}
                ></SimpleDropDown>
              </div>
              <div className="vacancies">
                <h4 className="heading13">No# Vacancies</h4>

                <Textfeild
                  inputValue={vacancies}
                  setInputValue={setVacancies}
                  labelText="title"
                  placeholderText="enter the number of vacancies"
                ></Textfeild>
              </div>
            </div>
            <div className="div7">
              <div className="gender">
                <h4 className="heading14">Gender</h4>

                <SimpleDropDown
                  selectedOption={genders}
                  setSelectedOption={setGenders}
                  options={genderOptions}
                ></SimpleDropDown>
              </div>

              <div className="requirestravelling">
                <h4 className="heading15">Requires Travelling</h4>

                <SimpleDropDown
                  selectedOption={travelling}
                  setSelectedOption={setTravelling}
                  options={travellingOptions}
                ></SimpleDropDown>
              </div>
            </div>

            <div className="closingdate">
              <h4 className="heading16">Closing date</h4>
              <Calander
                selectedDate={closingDate}
                setSelectedDate={setClosingDate}
              ></Calander>
            </div>
          </section>
          <button className="button" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
