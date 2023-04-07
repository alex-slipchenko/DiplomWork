import './style.css';

const ProductFormButtons = ({ text, type, click }) => {
    return (
        <button type={type} onClick={click}>
            {text}
        </button>
    )
}

export default ProductFormButtons;