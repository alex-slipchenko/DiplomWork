// component=========================
import Commodity from '../../components/Card';
import logo from '../../components/myForm/RozetkaCircle.svg';

// css=================================
import './style.css';
const Preview = () => {
    return (
        <div className='mainPreview'>
            <div className='container'>
                <div className='wrap__rozetka'><img src={logo} alt="logo" /></div>
                <Commodity />
            </div>
        </div>
    )
}

export default Preview;