import React, {useState} from 'react'
import '../form.css';




export default function Forms(props) {

    const capital=()=>{
        let newtxt=text.toUpperCase();
        settext(newtxt);


    }

    const small=()=>{

      let newsmall=text.toLowerCase();
      settext(newsmall);
    }

    const voice=()=>{

      let speech= new SpeechSynthesisUtterance();
      speech.text=text;
      window.speechSynthesis.speak(speech);
    }
    const handleonchange=(event)=>{
        
        settext(event.target.value);


    }
    // const copy=()=>{
    //   let text=document.getElementById("exampleFormControlTextarea1");
      


    // }
    

    const[text,settext]=useState("enter the text here")
        // here settest functon is used to change the value of the text variable
        // and we have to do this by making functions
  return (
    <>
 

       
  <div className=" text-center cform">
    <h2> By aditya Tiwari</h2>
 
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1"  rows="8"></textarea>
        
   
 
  </div>
  <button  type="submit" class="btn btn-primary " onClick={capital}>capitalize</button>
  <button  type="submit" class="btn btn-primary  mx-3" onClick={small}>lower case</button>
  <button  type="submit" class="btn btn-primary  mx-3" onClick={voice}>speak</button>
  

  <div className="container my-3">
    <h3>
      your Text Summary is
    </h3>
    <p>{text.split(" ").length} words, {text.length} character</p>
    <p>  {0.08*text.split(" ").length} minutes to read</p>
    <h3> preview</h3>
    <p>{ text}</p>




  </div>


 

 
      
   </>
  )
}
