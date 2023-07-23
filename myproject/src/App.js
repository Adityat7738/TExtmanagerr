
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

import Forms from './components/Forms';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route

  
  
// } from 'react-router-dom';
 


function App() {
  return ( 

    <>
    {/* <Router> */}

    <Navbar title=" TextManager"  about="Contact"/>
    <div className="container my-3">

      {/* <Routes>
      <Route  path="/"  element={<Forms/>}> */}
   
        <Forms/>
        
{/* 
        </Route>
       <Route   path="/Contact" element={<Contact/>} >
       
 
       </Route>


      </Routes>
   */}
      


      </div>

    {/* </Router> */}

    


      
      


      
      
      



   
 



    


    
      
    
       
       
      
      
    
    
    
    
    </>

     
    
    
   
  );
}

export default App;
