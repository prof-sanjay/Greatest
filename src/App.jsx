  import { useState } from 'react'

  function App(){

    const[num,setNum]=useState();
    const[num1,setNum1]=useState();
    const[num2,setNum2]=useState();
    const[disp,setDisp]=useState("");

    const great=()=>{
    
    let arr=[];
    arr[0]=num;
    arr[1]=num1;
    arr[2]=num2;

    let greatest=arr[0];
    for(let i=0;i<arr.length;i++){
      if(arr[i]>greatest){
        greatest=arr[i];
      }
    }
    setDisp(greatest);
  }

    return(
      <div className="box">
        <h1>Greatest</h1>
        <label htmlFor="nmb">Number: </label><br />
        <input id="nmb" type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}
        />
        <input id="nmb" type="number" value={num1} onChange={(e)=>setNum1(Number(e.target.value))}
        />
        <input id="nmb" type="number" value={num2} onChange={(e)=>setNum2(Number(e.target.value))}
        /><br/>
        <button className="btn" onClick={great}>Check</button>
        <h1>{disp}</h1>
      </div>
    );
  }

  export default App
