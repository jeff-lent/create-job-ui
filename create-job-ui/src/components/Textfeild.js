import React ,{ useState }  from 'react'

export const Textfeild = ({placeholderText},{labelText}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
          {/* <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} /> */}
          <label>
            label-text: 
        <input type="text" placeholder={placeholderText}  value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </label>
        </div>
      );

}



