
// components=====================
import React from 'react';
// css=================================
import './style.css';

function ProductButton({ icon, activeButton, textButton, }) {

    return (
        <div>
            <button className='bodyButton' onClick={() => activeButton('add')}>
                {icon}
                {textButton}
            </button>
        </div>
    )
}

export default ProductButton;
