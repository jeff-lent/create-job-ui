import React , {useState}from 'react'

export const SimpleDropDown = ({title , selectedOption,setSelectedOption,options}) => {
  
    return (
    <>
        <select value={selectedOption} title={title} onChange={e =>{ console.log(e.target.value); setSelectedOption(e.target.value)}} required>
          <option value=""  hidden  selected ><p>Select</p></option>
          { options && options.map((option,i) => (
            <option key={option} value={option}  >
              {option}
            </option>
          ))}
        </select>
    </>
      );
    
   
}
