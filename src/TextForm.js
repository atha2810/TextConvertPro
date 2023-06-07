 import React,{useState} from 'react'

export default function TextForm(props) {
    const textCapitalize = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const textLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        }
    const textCopy = ()=>{
           navigator.clipboard.writeText(text);
            }
    const textRepeat = ()=>{
            let newText = text.repeat(5);
            setText(newText);
            }
   
     const textClear = ()=>{
                let newText = "";
                setText(newText);
                }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const [text, setText] = useState("Enter text here :");
    //setText("New Text");
   return (
         <>
     <div className='container'>
                <div className="mb-3">
                <label htmlFor="myBox" className="form-label mt-4" style={{color:props.mode==='dark'?'white':'black'}}><h1>{props.heading}</h1></label>
                <textarea className="form-control" value={text} id="myBox" rows="6" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-3 my-2" onClick={textCapitalize}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-3 my-2" onClick={textLowercase}>Convert to LowererCase</button>
            <button type="button" className="btn btn-primary mx-3 my-2" onClick={textCopy}>Copy to Clipboard</button>
            <button type="button" className="btn btn-warning mx-3 my-2" onClick={textRepeat}>Repeat 5 times</button>
            <button type="button" className="btn btn-danger mx-3 my-2" onClick={textClear}>Clear</button>
     </div>
     <div className='container my-5'>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h1>
        <h4 style={{color:props.mode==='dark'?'white':'black'}}><b>{text.split(" ").filter((el)=>{return el.length!==0}).length} </b>words and <b>{text.length}</b> Characters</h4>
        <h4 style={{color:props.mode==='dark'?'white':'black'}}><b>{0.008 * text.split(" ").length}</b> minutes to read</h4> {/* 0.008 seconds to read a word*/}
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Live Preview</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
    </div>

    </>
   ) 
 }  
 