import React,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState("")
  const trimText=text.trim();

  const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText)
  }

  const handleOnChange=(event)=>{
      setText(event.target.value)
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)

  }

  const handleClearClick=()=>{
    let clearText="";
    setText(clearText)

  }

  const handleReverse = ()=>{
    let reversText = text.split('').reverse().join("")
    setText(reversText)
  }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>


    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{trimText.split(" ").length} words and {text.length} characters.</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
