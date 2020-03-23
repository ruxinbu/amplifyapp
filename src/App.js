import React from 'react';
import logo from './logo.svg';
import bsg_logo from './bsg_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Logo">
        <img src={bsg_logo} style={{height:50, marginTop:5, marginRight: 1200}}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please upload your video
        </p>
        <form id="upload-form" action="upload.php" method="post" enctype="multipart/form-data" >
  　　　   <input type="file" id="upload" name="upload" align="middle"/> <br/>
  　　　   <input type="submit" value="Upload" align="middle"/>
        </form>
      </header>
    </div>
  );
}

export default App;
