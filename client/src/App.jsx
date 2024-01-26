import React, { useState } from 'react'
import axios from 'axios';
export default function App() {

const [file,setFile]=useState(null);
const[uploadfile,setUploadfile]=useState('');


const handlechange=(e)=>{
  setFile(e.target.files[0]);
}

const handleSubmit= async ()=>{
  if(!file){
    alert('Please fill all the fields');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try{
  const res=await axios.post('http://localhost:5000/',formData);
  const result=res.data;
  setUploadfile(result.message);

  }catch(error){
    console.error("Error uploading file",error);
  }

}

  return (
    <div>
      <div>
         Put Your excel file Here.....
       <div><input type='file'onChange={handlechange}/></div>
       <button type='submit' onClick={handleSubmit}>Submit</button>
       {uploadfile && <div className="upload-result">{uploadfile}</div>}
      </div>
    </div>
  )
}
