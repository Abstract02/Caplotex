import React from 'react'
import {useState} from 'react'
import './Body.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

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
  <div className='txtar'>
  <textarea className='text_area' rows="15" cols="100" value={text} placeholder="Write your text here" onChange={handleOnChange} name="comment" form="usrform"></textarea>
  </div>
  </form>
  <div className='functional_buttons'>
    <div className='firstbutton'>
  <button type = "submit" className="mt-2 btnn btnn1" onClick={handleOnClickUp}>Uppercase</button>
  </div>
  <div>
  <button type = "submit" className="mt-2 mx-2 btnn" onClick={handleOnClickCp}><ContentCopyIcon /></button>
  <button type = "submit" className="mt-2 mx-2 btnn" onClick={handleOnClickpst}><ContentPaste /></button>
  <button type = "submit" className="mt-2 mx-2 btnn" onClick={handleOnClickClr}><DeleteIcon /></button>
  <button type = "submit" className="mt-2 mx-2 btnn" onClick={handleOnClickdw}><SimCardDownloadIcon /></button>
  </div>
  <div>
  <button type = "submit" className="mt-2 mx-2 btnn btnn2 " onClick={handleOnClickLw}>Lowercase</button>
  </div>
  {/* <button type = "submit" className="mt-2 mx-2" onClick={handleOnClickres}>Remove Extra Spaces</button> */}
  </div>
  </div>
  <div className='counter'>
  <h3>Character count : {text.length}</h3>
  <h3>Word Count : {wrdcount}</h3> 
  </div>
  </div>
    )
}
export default Body;