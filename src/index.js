import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Sample from './sample';
// import Time from './timetable';
import Img from './img'
import Header from './header'
import Footer from './footer'
// import Main from './mobile'
// //  import Main from './fakestore';
//  import Fresher from './fresherjob';
// import Parent from './propsparent'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    {/* <Time/> */}
   
     <Header/> 
      <Img/> 
    <Footer/>
    {/* <Main/> */}
    
    {/* <Fresher/> */}
    {/* <Parent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
