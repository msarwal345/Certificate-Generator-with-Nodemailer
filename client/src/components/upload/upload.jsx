import React, { useState } from 'react';
import axios from 'axios';
import './upload.css'; // Import the provided CSS file
import NavScrollExample from '../Navbar/Navbar';

const Upload = () => {
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
      const response = await axios.post('http://localhost:5000/', formData);
      const result = response.data.message;
      setUploadFile(result);

      if (result === 'Data uploaded successfully') {
        const fetchRes = await fetch('http://localhost:5000/send-certificates');
        const fetchResult = await fetchRes.json();
        console.log(fetchResult);
      }
    } catch (error) {
      console.error("Error uploading file", error);
    }
  }

  return (
    <>
      <NavScrollExample />
      <div className='cnt' style={{ display: "flex" }}>
        <div className='photo' style={{ width: "40%", marginLeft: "45px" }}>
          <img src='open.png' style={{ width: "100%" }} />
        </div>
        <div className="upload-container" style={{ marginLeft: "205px" }}>
          <h2>Upload Excel File</h2>

          <label htmlFor="fileInput">Choose an Excel file:</label>
          <input type="file" id="fileInput" name="file" accept=".xlsx, .xls" onChange={handleChange} />

          <button className="upload-button" onClick={handleSubmit}>Submit</button>

          {uploadFile && <div className="upload-result">{uploadFile}</div>}
        </div>
      </div>
    </>
  );
};

export default Upload;
