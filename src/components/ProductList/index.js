import { BsFillPencilFill, BsFillArchiveFill } from "react-icons/bs";
// css=================================
import './style.css';

const ProductList = ({ setActive, products, setEditId }) => {

    return (
        <tbody >{products.map(productItem => {

            return <tr className='myTable__body' key={productItem.id}>
                <td>{productItem.id}</td>
                <td>{productItem.category}</td>
                <td>{productItem.name}</td>
                <td>{productItem.quantity}</td>
                <td>{productItem.price}</td>
                <td><i><BsFillPencilFill onClick={() => { setActive('edit'); setEditId(productItem) }} /></i> <i><BsFillArchiveFill onClick={() => { setActive('delete'); setEditId(productItem.id) }} /></i></td>
            </tr>
        })}

        </tbody>

    )
}

export default ProductList;