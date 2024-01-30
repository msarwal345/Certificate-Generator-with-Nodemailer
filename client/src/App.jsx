import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [file, setFile] = useState(null);
  const [uploadFile, setUploadFile] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = async () => {
    if (!file) {
      alert('Please fill all the fields');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Upload the file to the server
      const uploadRes = await axios.post('http://localhost:5000/', formData);
      const uploadResult = uploadRes.data.message;
      setUploadFile(uploadResult);

      // Trigger the process to generate certificates, send emails, and delete records
      if (uploadResult === 'Data uploaded successfully') {
        const fetchRes = await fetch('http://localhost:5000/send-certificates');
        const fetchResult = await fetchRes.json();
        console.log(fetchResult); // Log the result from the server
      }
    } catch (error) {
      console.error("Error uploading file", error);
    }
  }

  return (
    <div>
      <div>
        Put Your excel file Here.....
        <div><input type='file' onChange={handleChange} /></div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        {uploadFile && <div className="upload-result">{uploadFile}</div>}
      </div>
    </div>
  )
}
