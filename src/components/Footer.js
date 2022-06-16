import React from 'react'

export default function Footer(props) {
    const myStyle={
        position: 'absolute',
        width: '100vw',
        bottom: '0',
        height: '5vh',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const myDarkStyle={
        backgroundColor: '#1d3557',
        color: '#bde0fe',
    }
    const myLightStyle={
        backgroundColor: '#bbd0ff',
        color: '#2b2d42'
    }
    return (
        <>
            <footer className="footer py-2" style={{...myStyle, ...props.mode==='light'?myLightStyle:myDarkStyle}}>
                &copy; Text Utilities, Copyright @ {props.year}
            </footer>
        </>
    )
}
