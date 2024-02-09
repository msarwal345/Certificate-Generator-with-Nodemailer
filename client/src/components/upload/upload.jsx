import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './upload.css';
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

        
        toast.success('Certificates sent successfully!', {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error("Error uploading file", error);
      toast.error('Error uploading file', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  }

  return (
    <>
      <NavScrollExample />
      <div className='upload-container'>
        <h2>Upload Excel File</h2>
        <label htmlFor="fileInput">Choose an Excel file:</label>
        <input type="file" id="fileInput" name="file" accept=".xlsx, .xls" onChange={handleChange} />
        <button className="upload-button" onClick={handleSubmit}>Submit</button>
        {uploadFile && <div className="upload-result">{uploadFile}</div>}
        <p>
          Don't have an Excel file? You can convert using an free online tool like{' '}
          <a href="https://www.ilovepdf.com/" target="_blank" rel="noopener noreferrer">
            Excel Tool
          </a>
          .
        </p>

        <ToastContainer />
      </div>
    </>
  );
};

export default Upload;
