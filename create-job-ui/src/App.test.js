//import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
//import { Textfeild } from './components/Textfeild';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react';
import '@testing-library/jest-dom';
import { screen , fireEvent,getByTestId} from '@testing-library/react';
import { render } from '@testing-library/react';

import { Textfeild } from './components/Textfeild';
import { MultiSelectDropDown } from './components/MultiSelectDropDown'; 
import { SimpleDropDown } from './components/SimpleDropDown';
import { CreateJobPage } from './pages/CreateJobPage';

describe('input feild test', () => {
  it('input text feild should be rendered', () => {
    render(<Textfeild inputValue="this is a job"  placeholderText="enter job description" ></Textfeild>);
    expect(screen.getByPlaceholderText("enter job description")).toBeInTheDocument();
  });  
});

// describe('dropdown feild test',()=>{
//   it('checking dropdown', () => {
//    render(<MultiSelectDropDown fetchedOptions={['option1','option2']}  ></MultiSelectDropDown>);
//     const select = getByLabelText(cod,'Responsibilities');
//     fireEvent.change(select,{target:{value:'option2'}});
//     expect(select.value).toBe('option2');
//   });
// })

describe('Multiselect DropdownField test', () => {
  it('Multiselect dropdown should display on screen', () => {
    render(<MultiSelectDropDown fetchedOptions={['Contribute in all phases of the development lifecycle',
    'Write well designed, testable, efficient code',
    'Ensure designs are in compliance with specifications']}> 
    </MultiSelectDropDown>  );
    expect(screen.getByPlaceholderText("Select")).toBeInTheDocument();
  });
});



 
// describe('SimpleDropDown test', () => {
  
//   it('hello', () => {
//     render(<SimpleDropDown selectedOption={['Cloud Native Development', 'Data Engineering']}  ></SimpleDropDown>);
//     const select = screen.getByDisplayValue("Cloud Native Development");
//     expect(select).toContainElement(screen.getByText("Cloud Native Development"));
//     expect(select).toContainElement(screen.getByText("Data Engineering"));
//   });

// });




test('input fields correctly update the state', () => {
  const { container } = render(<CreateJobPage />);
  const titleInput = getByTestId("title-input");
  fireEvent.change(titleInput, { target: { value: 'Software Engineer' } });
  expect(titleInput.value).toBe('Software Engineer');
  expect(titleInput.value).toBe(jobTitle);
  
  const descriptionInput = getByTestId(container, 'description-input');
  fireEvent.change(descriptionInput, { target: { value: 'Develop and maintain software applications' } });
  expect(descriptionInput.value).toBe('Develop and maintain software applications');
  expect(descriptionInput.value).toBe(description);
  

});
