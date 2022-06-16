import React/*, {useState}*/ from 'react'

export default function About(props) {
    const styleMargin = {
        marginTop: '7vh'
    }
    const styleBorder = {
        border: '2px solid #ced4da'
    }
    const darkStyle = {
        color: '#8d99ae',
        backgroundColor: '#3d405b',
        border: '2px solid white',
    }
    const lightStyle = {
        color: 'black',
        backgroundColor: 'white',
    }
    // const [myStyle, setMyStyle] = useState(lightStyle)
    // const [btnText, setBtnText] = useState('Enable Dark Mode')
    // const handleDarkMode= ()=>{
    //     if(JSON.stringify(myStyle)===JSON.stringify(darkStyle)){
    //         setMyStyle(lightStyle);
    //         setBtnText('Enable Dark Mode');
    //     }
    //     else{
    //         setMyStyle(darkStyle);
    //         setBtnText('Disable Dark Mode'); 
    //     }
    // }
    return (
        <div style={styleMargin}>
            <div className="shadow container my-5 py-2 rounded" style={{...props.mode==='light'?lightStyle:darkStyle, ...props.mode==='light'?styleBorder:''}}>
                <h2 className="my-2">About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={props.mode==='light'?lightStyle:darkStyle}>
                            <div className="accordion-body">
                                textUtils gives you the way to quickly and efficiently analyze your text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={props.mode==='light'?lightStyle:darkStyle}>
                            <div className="accordion-body">
                                 You can count words, characters and analyze the time to read it. You can easily preview a large document, convert the cases be it UPPERCASE, lowercase or Capitalize. And there are some more features which you can access through textUtils - A text Utility.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={props.mode==='light'?lightStyle:darkStyle}>
                            <div className="accordion-body">
                                This website works smoothly and efficiently in Chrome Browser, Safari, FireFox and many more browsers available worldwide.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={handleDarkMode} className="btn btn-dark  container">{btnText}</button>
            </div> */}
        </div>
    )
}