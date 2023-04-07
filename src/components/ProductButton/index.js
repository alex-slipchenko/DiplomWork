
import React from 'react';

// components=====================



// css=================================
import './style.css';

function ProductButton({ icon, activeButton, textButton, }) {

    const ChangeButton = () => textButton !== 'Preview' ? activeButton('add') : activeButton('preview');



    return (
        <div>
            <button className='bodyButton' onClick={ChangeButton}>
                {icon}
                {textButton}
            </button>
        </div>
    )
}

export default ProductButton;
