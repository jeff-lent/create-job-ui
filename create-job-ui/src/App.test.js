//import { render, screen,fireEvent } from '@testing-library/react';
// import App from './App';



import React from 'react';
import '@testing-library/jest-dom';
import { screen , fireEvent,getByTestId} from '@testing-library/react';
import { render } from '@testing-library/react';

import { Textfeild } from './components/Textfeild';
import { MultiSelectDropDown } from './components/MultiSelectDropDown'; 
import { SimpleDropDown } from './components/SimpleDropDown';
import { CreateJobPage } from './pages/CreateJobPage';
import mockdata from './mockdata';

// input feilds
describe('input feild test', () => {
  it('input text feild should be rendered', () => {
    render(<Textfeild inputValue="this is a job"  placeholderText="enter job description" ></Textfeild>);
    expect(screen.getByPlaceholderText("enter job description")).toBeInTheDocument();
  });  
});


// multiselect dropdown
describe('Multiselect DropdownField test', () => {
  it('Multiselect dropdown should display on screen', () => {
    render(<MultiSelectDropDown fetchedOptions={['Contribute in all phases of the development lifecycle',
    'Write well designed, testable, efficient code',
    'Ensure designs are in compliance with specifications']}> 
    </MultiSelectDropDown>  );
    expect(screen.getByPlaceholderText("Select")).toBeInTheDocument();
  });

  it( 'multiselect options should be rendered', ()=>{

    render(<MultiSelectDropDown fetchedOptions={['Contribute in all phases of the development lifecycle',
    'Write well designed, testable, efficient code',
    'Ensure designs are in compliance with specifications']}> 
    </MultiSelectDropDown>  );
    const select = screen.getByPlaceholderText("Select");
    console.log(screen.getByText("Write well designed, testable, efficient code"));
    expect(screen.getByText("Write well designed, testable, efficient code")).toBeInTheDocument();
    //expect(select).toContainElement(screen.getByText("Write well designed, testable, efficient code"));

  }


  );

  // simple dropdown
  it('simple dropdown options should be rendered',()=>{
    render(<SimpleDropDown options={['karachi','lahore','islamabad']}  ></SimpleDropDown>)
    //const select = screen.getByText('karachi');
    expect(screen.getByText("lahore")).toBeInTheDocument();
  });

}); 


describe('int',()=>{
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockdata)
    })
});
it('should send post request', () => {
  render(<CreateJobPage />);
  const saveButton = screen.getByText("SUBMIT");
  fireEvent.click(saveButton);
  // expect(saveButton).toBeInTheDocument();
  // expect(fetch).toHaveBeenCalledTimes(1);
});
})




