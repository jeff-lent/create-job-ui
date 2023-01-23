import React , {useState}from 'react'

export const SimpleDropDown = ({selectedOption,setSelectedOption,options}) => {

    //const options = ['Option 1', 'Option 2', 'Option 3'];
 //   const [selectedOption, setSelectedOption] = useState(options[0]);

  
    return (
        <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
          { options && options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    
   
}
