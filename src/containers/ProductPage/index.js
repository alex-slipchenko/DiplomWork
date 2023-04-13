import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../components/myForm/RozetkaCircle.svg';
import { BsPerson, BsPlusLg } from "react-icons/bs";
// components=====================
import ProductButton from '../../components/ProductButton';
import MyTable from '../../components/Table';
import Modal from '../../components/Modal';
import PopDelete from '../../components/PopDelete';
import ProductForm from '../../components/ProductForm';
import { API_URL } from '../../constant';
import { ListParam } from '../../constant/LIstParam';
// css=================================
import './style.css';
function Product() {
    const [modalActive, setModalActive] = useState(null);
    // getProducts in table============= 
    const [isLoaded, setIsloaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (!isLoaded) {
            getProducts();
        }
    }, [isLoaded]);

    const getProducts = async () => {
        const request = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await request.json();
        setProducts(data);
        setIsloaded(true);
    }
    //edit_product===========================================================
    const [editId, setEditId] = useState(null);
    const EditSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API_URL}/${editId.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify(editId),
        });
        setIsloaded(false);
        setModalActive(null);
    }
    //Add_product===========================================================
    const [addProduct, setAddProduct] = useState(ListParam);

    const AddSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
            body: JSON.stringify(addProduct),
        });
        setIsloaded(false);
        setModalActive(null);
        setAddProduct(ListParam)
    }
    //Delete_product===========================================================
    const DeleteSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API_URL}/${editId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                ,
            },
        });
        setIsloaded(false);
        setModalActive(null);
    }

    return (
        <div className="Product">
            <div className='container'>
                <div className='wrap__rozetka'><img src={logo} alt="logo" /></div>
                <div className='wrap__button'>
                    <div>
                        <Link to="/preview" className='bodyButton'>
                            <BsPerson />
                            Preview
                        </Link>
                    </div>
                    <ProductButton textButton={'Add product'} icon={<BsPlusLg />} activeButton={setModalActive} />
                </div>
                <div className='wrap__grid'>
                    <h1>Products</h1>
                </div>
                <div className='wrap__table' >
                    <MyTable products={products} setActive={setModalActive} setEditId={setEditId} />
                </div>

                {modalActive === 'delete' && (
                    <Modal active={modalActive} setActive={setModalActive}>
                        <PopDelete setActive={setModalActive} FormSubmit={DeleteSubmit} />
                    </Modal>
                )}

                {modalActive === 'edit' && (
                    <Modal active={modalActive} setActive={setModalActive}>
                        <ProductForm titleForm={'Edit product'} setActive={setModalActive} FormSubmit={EditSubmit} inputValue={editId} setInputValue={setEditId} />
                    </Modal>
                )}
                {modalActive === 'add' && (
                    <Modal active={modalActive} setActive={setModalActive}>
                        <ProductForm titleForm={'Add product'} setActive={setModalActive} FormSubmit={AddSubmit} inputValue={addProduct} setInputValue={setAddProduct} />
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Product;
