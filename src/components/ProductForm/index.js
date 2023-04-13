
import { FiX } from "react-icons/fi";
import './style.css';

//components===================================
import InputComponent from "../InputComponent";
import ProductFormButtons from "../ProductFormButtons";
import InputTextArea from "../InputTextArea";
const ProductForm = ({ inputValue, FormSubmit, setActive, setInputValue, titleForm }) => {
    return (
        <div className='wrap__prodForm'>
            <form onSubmit={FormSubmit}>
                <div className='wrap__title'>
                    <h2>{titleForm}</h2>
                    <i onClick={() => setActive(null)}>
                        <FiX />
                    </i>
                </div>
                <div className="wrap__inputComponent">
                    <InputComponent label="category" inputValue={inputValue} setInputValue={setInputValue} />
                    <InputComponent label="name" inputValue={inputValue} setInputValue={setInputValue} />
                    <InputComponent label="quantity" inputValue={inputValue} setInputValue={setInputValue} />
                    <InputComponent label="price" inputValue={inputValue} setInputValue={setInputValue} />
                    <InputComponent label="photo" inputValue={inputValue} setInputValue={setInputValue} />
                    <InputTextArea label="description" inputValue={inputValue} setInputValue={setInputValue} />
                </div>
                <div className="wrapp__inputFormButton">
                    <ProductFormButtons text={'Cancel'} type="button" click={() => setActive(null)} />
                    <ProductFormButtons text={'Submit'} type="submit" />
                </div>
            </form>
        </div>

    )
}

export default ProductForm;