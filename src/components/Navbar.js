import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    const [darkText, setDarkText] = useState('Enable Dark Mode');
    const modeStyleBlack = {
        width: '2rem',
        height: '2rem',
        backgroundColor: 'black',
        cursor: 'pointer'
    }
    const modeStyleBlue = {
        width: '2rem',
        height: '2rem',
        backgroundColor: '#00b4d8',
        cursor: 'pointer'
    }
    const modeStylea8dadc = {
        width: '2rem',
        height: '2rem',
        backgroundColor: '#a8dadc',
        cursor: 'pointer'
    }
    const modeStyle264653 = {
        width: '2rem',
        height: '2rem',
        backgroundColor: '#264653',
        cursor: 'pointer'
    }
    const handleMode = ()=>{
        if(darkText === 'Enable Dark Mode')setDarkText('Disable Dark Mode');
        else setDarkText('Enable Dark Mode');
        props.toggleMode();
    }
    const handleBlackMode = ()=>{
        props.toggleBlackMode();
    }
    const handleBlueMode = ()=>{
        props.toggleBlueMode();
    }
    const handlea8dadcMode = ()=>{
        props.togglea8dadcMode();
    }
    const handle264653Mode = ()=>{
        props.toggle264653Mode();
    }
    const tabAboutHeading = ()=>{
        document.title = 'textUtils - About'
    }
    const tabHomeHeading = ()=>{
        document.title = 'textUtils - A text Utility'
    }
    return (
        <>
            <nav className={`sticky-top navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/textUtils">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={tabHomeHeading} to="/textUtils" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={tabAboutHeading} to="/textUtils/about" className="nav-link">{props.aboutText}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-dark btn-outline-secondary text-light" type="submit">Search</button>
                        </form> */}
                        <div className="d-flex align-items-center h-100">
                            <div style={modeStyleBlack} onClick={handleBlackMode} className="rounded black mx-1 mb-1 border border-secondary shadow"></div>
                            <div style={modeStyleBlue} onClick={handleBlueMode} className="rounded blue mx-1 mb-1 border border-secondary shadow"></div>
                            <div style={modeStylea8dadc} onClick={handlea8dadcMode} className="rounded a8dadc mx-1 mb-1 border border-secondary shadow"></div>
                            <div style={modeStyle264653} onClick={handle264653Mode} className="rounded 264653 mx-1 mb-1 border border-secondary shadow"></div>
                            <div onClick={handleMode} className={`btn-${props.mode==='light'?'secondary':'info'} btn border border-secondary shadow border-2`}>{darkText}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'About'
}