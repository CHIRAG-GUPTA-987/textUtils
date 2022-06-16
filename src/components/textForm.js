import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        setText(text.toUpperCase());
        if(text!=='')props.showAlert('Text is transformed to UPPERCASE', 'info');
    }
    const handleLowerCaseClick = () =>{
        setText(text.toLowerCase());
        if(text!=='')props.showAlert('Text is transformed to lowercase', 'info');
    }
    const handleCapitalize = ()=>{ 
        let words = text.split(' ');
        let capitalizeWords = [];
        words.forEach(word=>{
            if(word!==''){
                let thisWord = '';
                thisWord+=word[0].toUpperCase();
                for(let i=1; i<word.length; i++)thisWord+=word[i].toLowerCase();
                capitalizeWords.push(thisWord);
            }
        })
        setText(capitalizeWords.join(' '));
        if(text!=='')props.showAlert('Text Capitalized', 'info');
    }
    const handleClearText = () =>{
        if(text!=='')props.showAlert('Text cleared', 'info');
        setText('');
        setPreview('Enter your text to preview it here!');
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(document.querySelector('#textUtilsArea').value);
        if(text!=='')props.showAlert('Text copied to clipboard', 'info');
    }
    const handleExtraSpaces = () =>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        if(text!=='')props.showAlert('Text Beautified', 'info');
    }
    const handleOnChange = event =>{
        setText(event.target.value);
        if(event.target.value==='')setPreview('Enter your text to preview it here!');
        else setPreview('Preview');
        // let words = event.target.value.split(/[ ]+/);
        // if(words.length===1 && words[0]===''){
        //     setCount(0);
        //     return;
        // }
        // for(let word of words){
        //     if(word===''){
        //         setCount(words.length-1);
        //         return;
        //     }
        // }
        // setCount(words.length);
    }
    const [text, setText] = useState('');
    // const [count, setCount] = useState(0);
    const [preview, setPreview] = useState('Enter your text to preview it here!');
    return (
        <>
            <div className=" container my-3">
                <label htmlFor="textUtilsArea" className="form-label"><h3>{props.heading}</h3></label>
                <textarea style={{backgroundColor: props.mode==='light'?'white':'#3d405b', color: props.mode==='light'?'black':'#f1faee', fontSize: 20, border: props.mode==='light'?'1.5px solid grey':'1.5px solid white'}} placeholder="Enter your text" value={text} onChange={handleOnChange} className="form-control shadow" name="textUtilsArea" id="textUtilsArea" cols="30" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} onClick={handleUpperCaseClick} className="shadow btn btn-primary mx-2 mb-2">UPPERCASE</button>
            <button disabled={text.length===0} onClick={handleLowerCaseClick} className="shadow btn btn-success mx-2 mb-2">lowercase</button>
            <button disabled={text.length===0} onClick={handleCapitalize} className="shadow btn btn-info mx-2 mb-2">Capitalize</button>
            <button disabled={text.length===0} onClick={handleCopy} className="shadow btn btn-warning mx-2 mb-2">Copy Text</button>
            <button disabled={text.length===0} onClick={handleExtraSpaces} className="shadow btn btn-danger mx-2 mb-2">Beautify Text</button>
            <button disabled={text.length===0} onClick={handleClearText} className="shadow btn btn-secondary mx-2 mb-2">Clear Text</button>
            <div className="container my-3">
                <h4 className="mb-3">Your Text Summary</h4>
                <p className="form-control bg-secondary text-light shadow">
                    {text.split(/\s+/).filter(word=>word.length!==0).length} words and {text.length} characters.
                </p>
                <p className="form-control bg-secondary text-light shadow">
                    {0.008 * text.split(/\s+/).filter(word=>word.length!==0).length} minutes needed to read.
                </p>
                <h4 className="my-3">{preview}</h4>
                <p className="form-control bg-secondary text-light shadow">
                    {text}
                </p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter the heading of your textArea"
}