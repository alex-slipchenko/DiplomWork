import './style.css';
import { BsArrowDownUp } from "react-icons/bs";
import ProductList from '../ProductList';

const MyTable = ({ setActive, products, setEditId }) => {

    return (
        <table className='myTable'>
            <thead>
                <tr className='myTable__header'>
                    <th>ID <i> <BsArrowDownUp /></i></th>
                    <th>Category <i> <BsArrowDownUp /></i></th>
                    <th>Name <i> <BsArrowDownUp /></i></th>
                    <th>Quantity <i> <BsArrowDownUp /></i></th>
                    <th>Price <i> <BsArrowDownUp /></i></th>
                    <th></th>
                </tr>
            </thead>
            <ProductList products={products} setActive={setActive} setEditId={setEditId} />
        </table>
    )
}

export default MyTable;