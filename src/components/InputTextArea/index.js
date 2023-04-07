
import './style.css';


const InputTextArea = ({ label, inputValue, setInputValue, titleForm }) => {

    const changeValue = (event) => {

        setInputValue({ ...inputValue, [label]: event.target.value });
    }

    return (
        <div className='wrapp__input__label'>
            <label>{label}</label>
            <textarea value={inputValue[label]} onChange={changeValue}></textarea>
        </div>
    )
}

export default InputTextArea;