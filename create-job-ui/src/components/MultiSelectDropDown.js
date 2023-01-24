import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';


export const MultiSelectDropDown = ({fetchedOptions,selected,setSelected}) => {


    // const[multiSelectOptions,setMultiSelectOptions] = useState(['Contribute in all phases of the development lifecycle',
    // 'Write well designed, testable, efficient code',
    // 'Ensure designs are in compliance with specifications']);

    //const[selected,setSelected] = useState([]);


    function handleSelect(selectedOption){
        setSelected([...selected, selectedOption]);
    }

    function handleRemove(elementToRemove){
        //const newArray = selected.filter(element=> element!== elementToRemove);
        //setSelected(newArray);
        const myIndex = selected.indexOf(elementToRemove)
        selected.splice(myIndex,1)
        setSelected([...selected]);
    }

   console.log(selected);

  return (
    <div>

<Multiselect
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={handleRemove}
  onSearch={function noRefCheck(){}}
  options={fetchedOptions}
  onSelect={handleSelect}
    />
    </div> 


  );



}
