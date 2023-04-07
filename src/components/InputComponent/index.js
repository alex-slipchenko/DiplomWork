import './style.css';

const InputComponent = ({ label, inputValue, setInputValue, titleForm }) => {

    const changeValue = (event) => {

        setInputValue({ ...inputValue, [label]: event.target.value });
    }

    return (
        <div className='wrapp__input__label'>
            <label>{label}</label>
            <input type="text" value={inputValue[label]} onChange={changeValue} />
        </div>
    );
};

export default InputComponent;