import { useState } from "react";
import bubbleSort from "./bubble-sort";

const Input = () => {
    const [value, setValue] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        
        bubbleSort(value)
    }

    return(
        <form onSubmit={handleChange} >
            <label>Input</label>
            <input type="text" onChange={e => setValue(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
    )
};

export default Input;