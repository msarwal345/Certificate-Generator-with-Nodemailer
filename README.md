# Certificate-Generator-with-Nodemailer

This project is a certificate generator that utilizes Nodemailer for sending certificates via email.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)


## Features

- Generate certificates and send them via email using Nodemailer.
- Upload an Excel file with recipient details for certificate generation.

## Getting Started

 ### Prerequisites

 - Node.js and npm installed. [Download here](https://nodejs.org/)

  ### Installation

  1. Clone the repository:

   ```
   git clone https://github.com/your-username/Certificate-Generator-with-Nodemailer.git
   ```
  2. Navigate to the project folder:

  ```
   cd Certificate-Generator-with-Nodemailer
   ```
  3. Install dependencies:
    ```
   npm install
     ```
 ### Configuration

  - Create a .env file in the project root and configure the following:

  ```
  URL=your_mongodb_uri
  USER=your_email_username
  PASSWORD=your_email_password
  ```
  Adjust the values according to your configuration.

### Usage
 1. Start the server:
   ```
   npm start
   ```
 2. Open a new Terminal:
   ```
    cd client
    npm run dev
   ```
 3. Open your browser and go to http://localhost:5173.
 4. Upload an Excel file with recipient details and click "Submit" to generate and send certificates.
   
 Make sure to replace placeholder values like `your-username`, `your_mongodb_uri`, `your_email_username`, and `your_email_password` with the actual values relevant to your project.

