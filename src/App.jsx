import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";

import TextField from "@mui/material/TextField";
import Buttons from "./Components/Buttons";

function App() {
  const [todoelements, settodoelements] = useState("");
  const [uiShow,setuiShow] = useState([])

  const Add_todo =()=>{
      uiShow.push(todoelements)
      setuiShow([...uiShow])
  }
  
  const Delete_all =()=>{
    uiShow.splice(0, uiShow.length);
    setuiShow([...uiShow])
  }

  const Edit_todo =(index)=>{
    console.log(index)
    index=parseInt(index)
    uiShow[index]=prompt("enter data")
    setuiShow([...uiShow])
    console.log("edit todo is in action")
    console.log(uiShow)
  }
  const del_todo =(index)=>{
    uiShow.splice(index,1);
    setuiShow([...uiShow])
    
  }
  return (
    <>
      <section>
        <Header />
      </section>

      <section className="mx-auto text-center mt-5 ">
        <TextField
          id="outlined-basic"
          label="Enter Todo"
          variant="outlined"
          className="w-[30%]"
          onChange={(e)=>settodoelements(e.target.value)}
        />
      </section>
    
      <section className="flex justify-center m-3 gap-2 ">
        {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}

        <Buttons value="Add todo" trigger ={Add_todo}/>

        <Buttons value="Delete all" color="error" trigger ={Delete_all}/>
      </section>

      {
        uiShow.map((value,index)=>{
          return(
            <>
      <section className=" w-[90%]  md:w-[70%] lg:w-[40%] flex flex-col justify-center mx-auto border border-solid rounded-lg border-black p-3 mt-[2%] ">

            <div className="flex flex-row mt-2">
            <div className="w-[60%] overflow-x-auto m-2">{value}</div>
        <div className="flex gap-3">
          <Buttons value="Edit todo" trigger ={()=>Edit_todo(index)} />
          <Buttons value="Delete Todo" color="error" trigger ={()=>del_todo(index)} />
        </div>
        </div>
      </section>

            </>
          )
        
        })
      }
        
      <h1>{todoelements}</h1>
     
    </>
   
  );
}

export default App;
