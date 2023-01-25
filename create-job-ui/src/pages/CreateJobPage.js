import React, { useState } from 'react'
import { Calander } from '../components/Calander';
import { DropDownMenu } from '../components/DropDownMenu'
import { DropDownSearch } from '../components/DropDownSearch';
import { ListOfCheckboxes } from '../components/ListOfCheckboxes';
import { ListOfOptions } from '../components/ListOfOptions';
import { MultiSelectDropDown } from '../components/MultiSelectDropDown';
import { SimpleDropDown } from '../components/SimpleDropDown';
import { Textfeild } from '../components/Textfeild'
import './CreateJobPage.css';
export const CreateJobPage = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [employmentCategories, setEmploymentCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [location, setLocation] = useState('');
  const [softskills, setSoftskills] = useState([]);
  const [technicalskills, setTechnicalskills] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [perksAndBenefits, setPerksAndBenefits] = useState([]);
  const [travelling, setTravelling] = useState([]);
  const [vacancies, setVacancies] = useState('');
  const [closingDate, setClosingDate] = useState(null);


  // const [departmentOptions, setDepartmentOptions] = useState(['Cloud Native Development', 'Data Engineering']);
  //const [responsibilityOption, setResponsibilityOption] = useState(['backend development', 'databases']);
  //const [degreeOption, setDegreeOption] = useState(['B.E - CIS', 'BSCS']);
  //const [softskillsOption, setSoftskillsOption] = useState(['soft skill A', 'soft skill B']);
  //const [technicalskillsOption, setTechnicalskillsOption] = useState(['technical skill A', 'technical skill B']);
  //const [benifitsOptions, setBenifitsOptions] = useState(['Benefit A', 'Benefit B']);


  //const[responsibilityOption,setResponsibilityOption] = useState([]);
const[selectedResponsibilites, setSelectedResponsibilities] = useState([]);



  const experienceLevelOptions = ['1', '2', '3', '4', '5'];
  const genderOptions = ['male', 'female', 'both male & female'];
  const travellingOptions = ['yes', 'no', 'may-be '];

  let responsibilityOptions = ['Contribute in all phases of the development lifecycle',
  'Write well designed, testable, efficient code',
  'Ensure designs are in compliance with specifications']
  
  let departmentOptions =  ['Cloud Native Development', 'Data Engineering'];

  let degreeOptions = ['B.E - CIS', 'BSCS'];

  let employmentCategoriesOptions = ['part time','full time','contract','online','onsite'];

  let softSkillsOptions = ['soft skill A', 'soft skill B'];

  let technicalskillsOptions = ['technical Skill A' , 'technical Skill B'];

  let benefitsAndPerksOptions=['benefit A','benefit B','benefit C'];

  let locationOptions=['karachi','lahore','islamabad']

  //console.log(department);

  return (
   
    <div className='mainContainer'>
      <div className="create-job-page" > <h1 className='heading'>CREATE JOB PAGE</h1>
        <form>
        
        <div className='enterjobtitle'>
          <h4 className='heading2'>Job Title</h4>
          <Textfeild  inputValue={jobTitle} setInputValue={setJobTitle} labelText="title" placeholderText="enter job title" ></Textfeild></div>
          <div className='jobdescription'>
          <h4 className='heading3'>Job Description</h4>
         
          <Textfeild inputValue={description} setInputValue={setDescription} placeholderText="enter job description" ></Textfeild>
       </div>
       <br></br>

       <div className='div2'>
       <div className="dropdown">
          <h4 className='heading4'>Department</h4>
          {/* <DropDownMenu selectedValue={department} setSelectedValue={setDepartment} options={departmentOptions} setOptions={setDepartmentOptions} ></DropDownMenu> */}
        
          <SimpleDropDown selectedOption={department} setSelectedOption={setDepartment} options={departmentOptions}  ></SimpleDropDown></div>
          <div className="responsibilities">
          <h4 className='heading5'>Responsibilities</h4>
          
        <MultiSelectDropDown fetchedOptions={responsibilityOptions} selected={selectedResponsibilites} setSelected={setSelectedResponsibilities}  ></MultiSelectDropDown></div>
       </div>
        
       <div className='div3'>
       <div className="education">
       <h4 className='heading6'>Degrees/Education</h4>
      
        <MultiSelectDropDown fetchedOptions={degreeOptions} selected={degrees} setSelected={setDegrees}  ></MultiSelectDropDown></div>

        <div className="employmentcategory">
        <h4 className='heading7'>Employment Category</h4>
        
        <MultiSelectDropDown fetchedOptions={employmentCategoriesOptions} selected={employmentCategories} setSelected={setEmploymentCategories}></MultiSelectDropDown></div>
        </div>
        <br></br>
        <div className='div4'>
        <div className="softskills">
        <h4 className='heading8'>Soft Skills</h4>
     
        <MultiSelectDropDown fetchedOptions={softSkillsOptions} selected={softskills} setSelected={setSoftskills} > </MultiSelectDropDown></div>

        <div className="technicalskills">
        <h4 className='heading9'>Technical Skills</h4>
       
        <MultiSelectDropDown fetchedOptions={technicalskillsOptions} selected={technicalskills} setSelected={setTechnicalskills} > </MultiSelectDropDown></div>
        </div>
        <br></br>
        <div className='div5'>
        <div className="perksandbenifits">
        <h4 className='heading10'>Perks and Benifits</h4>
       
        <MultiSelectDropDown fetchedOptions={benefitsAndPerksOptions} selected={perksAndBenefits} setSelected={setPerksAndBenefits} ></MultiSelectDropDown></div>

        <div className="Location">
        <h4 className='heading11'>Location</h4>
       
        {/* <DropDownMenu selectedValue={location} setSelectedValue={setLocation} ></DropDownMenu> */}

        {/* <DropDownSearch selectedOption={location} setSelectedOption={setLocation} ></DropDownSearch> */}

        <SimpleDropDown selectedOption={location} setSelectedOption={setLocation} options={locationOptions}  ></SimpleDropDown></div>

</div>
        </form>

        {/* <button onClick={submitFrom}>submit</button> */}
        <br></br>
        {/* <h4>Responsibilities</h4>
        <ListOfOptions items={responsibilities} setItems={setResponsibilities} options={responsibilityOption} setOptions={setResponsibilityOption}></ListOfOptions>
        <br></br> */}

        
       
        {/* <ListOfOptions items={degrees} setItems={setDegrees} options={degreeOption} setOptions={setDegreeOption} ></ListOfOptions> */}
        <br></br>
        {/* <h4>Employment Category</h4> */}
        {/* <ListOfCheckboxes selectedOptions={employmentCategories} setSelectedOptions={setEmploymentCategories} ></ListOfCheckboxes> */}
        <br></br>
        {/* <br></br>
        <h4>Soft Skills</h4> */}
        {/* <ListOfOptions items={softskills} setItems={setSoftskills} setOptions={setSoftskillsOption} options={softskillsOption} ></ListOfOptions> */}

        {/* <br></br>
        <h4>Technical Skills</h4> */}
        {/* <ListOfOptions items={technicalskills} setItems={setTechnicalskills} setOptions={setTechnicalskillsOption} options={technicalskillsOption}  ></ListOfOptions> */}

        {/* <br></br>
        <h4>location</h4> */}
        {/* <DropDownMenu selectedValue={location} setSelectedValue={setLocation} ></DropDownMenu> */}

        {/* <DropDownSearch selectedOption={location} setSelectedOption={setLocation} ></DropDownSearch> */}

        <br></br>
      
        <section className='form2'>
          <div className='div6' >
          <div className="experience">
        <h4 className='heading12'>Experience</h4>
 
        <SimpleDropDown selectedOption={experienceLevel} setSelectedOption={setExperienceLevel} options={experienceLevelOptions} ></SimpleDropDown></div>
        <div className="vacancies">
       
        <h4 className='heading13'>No# Vacancies</h4>
        
        <Textfeild inputValue={vacancies} setInputValue={setVacancies} labelText="title" placeholderText="enter the number of vacancies" ></Textfeild></div>

</div>
<div className='div7' >
<div className="gender">
        <h4 className='heading14'>Gender</h4>
       
        <SimpleDropDown selectedOption={genders} setSelectedOption={setGenders} options={genderOptions}></SimpleDropDown></div>

        {/* <br></br>
        <h4>Perks and Benifits</h4>
        <ListOfOptions items={perksAndBenefits} setItems={setPerksAndBenefits} options={benifitsOptions} setOptions={setBenifitsOptions}  ></ListOfOptions> */}
  <div className="requirestravelling">
      
        <h4 className='heading15'>Requires Travelling</h4>
      
        <SimpleDropDown selectedOption={travelling} setSelectedOption={setTravelling} options={travellingOptions} ></SimpleDropDown></div>

        </div>
       
        <div className="closingdate">
        <h4 className='heading16'>Closing date</h4>
        <Calander selectedDate={closingDate} setSelectedDate={setClosingDate} ></Calander></div>
</section>
<button className='button' type="button"><a href='#'>
 SUBMIT</a>
</button>

      </div>
      
    </div>
  )
}
