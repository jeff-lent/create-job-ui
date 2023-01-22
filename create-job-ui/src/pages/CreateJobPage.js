import React,{useState} from 'react'
import { DropDownMenu } from '../components/DropDownMenu'
import { DropDownSearch } from '../components/DropDownSearch';
import { ListOfCheckboxes } from '../components/ListOfCheckboxes';
import { ListOfOptions } from '../components/ListOfOptions';
import { Textfeild } from '../components/Textfeild'

export const CreateJobPage = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [description,setDescription] = useState('');
  const [department,setDepartment] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);
  const [degrees,setDegrees] = useState([]);
  const [employmentCategories, setEmploymentCategories] = useState([]);
  const [genders,setGenders] = useState([]);
  const [location,setLocation] = useState('');
  const [softskills,setSoftskills] = useState([]);
  return (
    <div className="create-job-page" >CreateJobPage
    <form>
    <Textfeild inputValue={jobTitle} setInputValue={setJobTitle} labelText="title" placeholderText="enter job title" ></Textfeild>
    <Textfeild  inputValue={description} setInputValue={setDescription} placeholderText="enter job description" ></Textfeild>
    <br></br>
     <h4>Department</h4>
    <DropDownMenu selectedValue={department} setSelectedValue={setDepartment} ></DropDownMenu>
    </form>
    
    {/* <button onClick={submitFrom}>submit</button> */}
    <br></br>
      <h4>Responsibilities</h4>
    <ListOfOptions items={responsibilities} setItems={setResponsibilities}></ListOfOptions>
    <br></br>
      <h4>Degrees/Education</h4>
      <ListOfOptions items={degrees} setItems={setDegrees}></ListOfOptions>
      <br></br>
      <h4>Employment Category</h4>
      <ListOfCheckboxes selectedOptions={employmentCategories} setSelectedOptions={setEmploymentCategories} ></ListOfCheckboxes>
      <br></br>
      <br></br>
      <h4>Soft Skills</h4>
      <ListOfOptions items={softskills} setItems={setSoftskills}></ListOfOptions>
      <br></br>
      <h4>location</h4>
      {/* <DropDownMenu selectedValue={location} setSelectedValue={setLocation} ></DropDownMenu> */}

    <DropDownSearch selectedOption={location} setSelectedOption={setLocation} ></DropDownSearch>
    </div>
  )
}
