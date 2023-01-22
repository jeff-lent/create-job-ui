import React from 'react'
import { DropDownMenu } from '../components/DropDownMenu'
import { Textfeild } from '../components/Textfeild'

export const CreateJobPage = () => {

  

  return (
    <div className="create-job-page" >CreateJobPage
    <form>
    <Textfeild labelText="title" placeholderText="enter job title" ></Textfeild>
    <Textfeild labelText="description" placeholderText="enter job description" ></Textfeild>
    <br></br>
     <h4>Designation</h4>
    <DropDownMenu></DropDownMenu>
    </form>
    
    {/* <button onClick={submitFrom}>submit</button> */}
    </div>
  )
}
