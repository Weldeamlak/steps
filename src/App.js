import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 

export default function App(){
  // const step = 1;
  const [step , setStep] = useState(1) 
  // why always we use const not let and update by the function i.e step = step + 1;

 // const [test] = useState({name:"Welde"})
 const [test , setTest] = useState({name:"Welde"})
   function  handlePrevious() { 
       if(step > 1) setStep(step - 1); 
   }  
   function  handleNext() { 
    if(step < 3) setStep(step +1);
    // updating the name;
  
    // bad practice. 
    //test.name = "Fred";
    // recommended.
    setTest({name:"Fred"})
}
  return (
          <div className="steps">
              <div className="numbers"> 
                {/* <div className={`${step >= 1 ? "active":""}`}>1</div>
                <div className={`${step >= 2 ? "active":""}`}>2</div>
                <div className={`${step >= 3 ? "active":""}`}>3</div> */}

                 {/* OR */}
                <div className={step >= 1 ? "active":""}>1</div>
                <div className={step >= 2 ? "active":""}>2</div>
                <div className={step >= 3 ? "active":""}>3</div>


              </div> 

              <p className="message">Step {step}:{messages[step - 1]}
                {test.name}
                </p> 
              
              <div className="buttons"> 
                <button style={{backgroundColor:"#7950f2" , color:"#fff"}} onClick={handlePrevious}>Previous</button>
                <button style={{backgroundColor:"#7950f2" , color:"#fff"}} onClick={handleNext}>Next</button>
              </div>
         </div>
  );
}
