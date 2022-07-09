import React from 'react'
import {useState} from 'react'
import './Body.css'

function Body()
{ 
  const [text,setText] = useState("");
  const [wrdcount,setWrdcount] = useState(0);
  const handleOnChange = (e)=>{ 
    setText(e.target.value)
    if(text.length <= 1)
    {
      setWrdcount(0);
    }
    else{
    setWrdcount(text.split(" ").length);
  }
}

  const handleOnClickUp=()=>{
    let txt = text.toUpperCase();
    setText(txt)
 
  }
  const handleOnClickLw=()=>{
    let txt = text.toLowerCase();
    setText(txt)
 
  }
  const handleOnClickClr=()=>{
    setText("")
 
  }
  const handleOnClickCp=()=>{
    navigator.clipboard.writeText(text);
 
  }
  const handleOnClickpst=()=>{
    navigator.clipboard.readText()
  .then(text => {setText(text)
  })
  }
  const handleOnClickdw=()=>{
    if(text.length ===0)
    {
      return alert("Empty file can't be created")
    }
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }
    return(
    

 <div className="body py-3">
   <div className='body_upper'>
  <h1>Paste your text here</h1>
  <form>
  <textarea className='text_area' rows="10" cols="100" value={text} onChange={handleOnChange} name="comment" form="usrform"></textarea>
  </form>
  <div className='functional_buttons'>
  <button type = "submit" className="mt-2" onClick={handleOnClickUp}>Uppercase</button>
  <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickLw}>Lowercase</button>
  <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickCp}>Copy to clipboard</button>
  <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickClr}>Clear</button>
  <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickpst}>Paste</button>
  <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickdw}>Download .txt file</button>
  {/* <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickres}>Remove Extra Spaces</button> */}
  </div>
  </div>
  <h2 className='mt-3'>Text And Word counter</h2>
  <p>Character Counter :{text.length}</p>
  <p>Word Counter :{wrdcount}</p>
  </div>
    )
}
export default Body;