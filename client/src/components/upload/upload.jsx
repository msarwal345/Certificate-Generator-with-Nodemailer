import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './upload.css';
import NavScrollExample from '../Navbar/Navbar';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadFile, setUploadFile] = useState('');
  const [loading, setLoading] = useState(false);

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

  
    setLoading(true);

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
      alert('Error uploading file');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <NavScrollExample />
      <div className='upload-container'>
        <h2>Upload Excel File</h2>
        <label htmlFor="fileInput">Choose an Excel file:</label>
        <input type="file" id="fileInput" name="file" accept=".xlsx, .xls" onChange={handleChange} />
        <button className="upload-button" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Please wait...' : 'Submit'}
        </button>
        {uploadFile && <div className="upload-result">{uploadFile}</div>}
        <p>Important Note:</p>
        <p>Please provide the Name, Email, and Fortext for the certificate in the Excel Sheet. Indicate the purpose, such as course completion, etc., in the Fortext section.</p>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </>
  );
};

export default Upload;
