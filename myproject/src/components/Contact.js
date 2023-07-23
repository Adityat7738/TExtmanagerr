import React, { useState } from 'react'
import '../App.css'


export default function Contact() {
  const [btn,setbtn]=useState("Enable dark mode")

  

  const [mstyle,setmstyle]=useState({
    color :'white',
    background:'black',
    border: '1px solid white'

  })

  const toggles= () => {

    if(mstyle.color==='white'){

      setmstyle({

        color:'black',
        background:'white',
        border: '1px solid black'

      })
      setbtn("Enable dark mode")
    }
    else{
      setmstyle({
        color:'white',
        background:'black',
        border: '1px solid white'



      })
      setbtn("Enable light mode")

    }


   }
  



  return (

    <div className="container my-7" style={mstyle}>
      <h2>By Aditya Tiwari</h2>
      <h1>ABOUT US</h1>

        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"  style={mstyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        INSTAGRAM
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mstyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mstyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        WHATSAPP
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mstyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mstyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        FACEBOOK
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"style={mstyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mstyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div>
    <button type="button"  onClick={toggles}class="btn btn-success">
      {btn}
    </button>


  </div>
</div>
      
    </div>
  )
}
