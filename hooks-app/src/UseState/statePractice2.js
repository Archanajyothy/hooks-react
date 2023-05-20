import React,{useState} from 'react'
const StatePractice2 = () => {
    const [inputValue,setInputValue] = useState("Archanajyothy");
    const onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
    return(
        <div>
            <input placeholder='enter something...' onChange={onChange} />
            {inputValue}
        </div>
    )
}
export default StatePractice2;