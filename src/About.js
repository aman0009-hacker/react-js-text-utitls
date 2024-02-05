import React, { useState } from 'react'

export default function About(props) {


    // const[obj,setObj]=useState({
    //     color:'',
    //     backgroundColor:''
    // });

    let obj={
      color:props.mode==='dark'?'black':'white',
      backgroundColor:props.mode==='dark'?'white':'#6d8cba'
    };
    const[text,changeText]=useState('Enable Dark Mode');
    // let changeStyle=()=>{
    //     if(obj.color==='' && obj.backgroundColor==='')
    //     {
    //             setObj({
    //                 color:'white',
    //                 backgroundColor:'black'
    //             });
    //             changeText('Enable Default Mode');
    //     }
    //     else
    //     {
    //         setObj({
    //             color:'',
    //             backgroundColor:''
    //         });
    //         changeText('Enable Dark Mode');
    //     }
    // }
    const changeFunction=(event)=>{
           console.log(event.target.value);
    }

  return (
    <div className='container' style={{color:obj.color}}>
        <h2 className='p-3'>About Us</h2>

<div className="accordion" id="accordionExample"style={obj} >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={obj}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={obj}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={obj}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={obj}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={obj}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={obj}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button   type="button" className='btn btn-primary mt-3' style={obj}></button> */}

{/* <div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  onClick={changeStyle} style={{cursor:'pointer'}}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{text}</label>
</div> */}

    </div>
  )
}
