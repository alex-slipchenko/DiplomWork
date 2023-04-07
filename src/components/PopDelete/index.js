
import './style.css';
import ProductFormButtons from '../ProductFormButtons';
const PopDelete = ({ setActive, FormSubmit }) => {


    return (
        <form className='wrap__popDelete' onSubmit={FormSubmit}>
            <h5>
                Are u sure you want to delete this product?
            </h5>
            <div className='wrapp__buttons'>
                <ProductFormButtons text={'Cancel'} type="button" click={() => setActive(null)} />
                <ProductFormButtons text={'Delete'} type="submit" />
            </div>
        </form>
    )
}

export default PopDelete;