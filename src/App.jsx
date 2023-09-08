import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";

import TextField from "@mui/material/TextField";
import Buttons from "./Components/Buttons";

function App() {
  let [inputtodo, setinputtodo] = useState("");
  let [showui, setshowui] = useState([]);
  let [uiinput, setuiInput] = useState("");

  //--------------------------delete element from ui show-------------------

  const del_element = (index) => {
    showui.splice(index, 1);
    setshowui([...showui]);
  };
  //--------------------------delete all element from ui show-------------------
  const del_all = () => {
    setshowui([]);
  };

  //-----------------------------------adding notes to ui-------------------------
  const add_todo = () => {
    let obj_todo = {
      isEdit: false,
      value: inputtodo,
    };
    showui.push(obj_todo);
    setshowui([...showui]);
    setinputtodo("");
  };
  console.log(inputtodo);
  console.log(showui);

  // ----------------------------------------------Editing todo element after its creation------------------------
  const edit_todo = (index) => {

    showui.forEach((element) => {
      element.isEdit = false; //closing all previous opened edit by setting false and using ternary operator scroll down to see at line 84
    });

    showui[index].isEdit = true;//making it true  so that current element k liyae conditional rendering chal sakae 
    setshowui([...showui]);
    setuiInput(showui[index].value);
  };
  //-----------------------------------after pressing edit button this ui will appear-----------------------------------------
  const edit_todo_element = (index) => {
    showui[index].isEdit = false;
    showui[index].value = uiinput;
    setshowui([...showui]);
    uiinput[index] = showui[index].value;
    setuiInput([...uiinput]);
  };
  return (
    <>
    {/* -----------------------------header------------------------------------------ */}
      <Header />

      {/* ----------------------------------------input field------------------------------------- */}
      <section className="flex justify-center flex-col items-center mt-5 ">
        <div className="w-[40%]">
          <TextField
            id="outlined-basic"
            label="Add todo"
            variant="outlined"
            className="w-[100%]"
            onChange={(e) => {
              setinputtodo(e.target.value);
            }}
            value={inputtodo}
          />
        </div>

      {/* ----------------------------------------buttons after input field------------------------------------- */}
        <div className="flex gap-2 mt-4">
          <Buttons value="Add" trigger={add_todo} />
          <Buttons value="Delete" trigger={del_all} color="error" />
        </div>
      </section>

      {/* ---------------------------------------------todo display portion--------------------------------- */}
      {showui.map((element, index) => {
        return (
          <section
            className="flex justify-center flex-col items-center mt-5 "
            key={index}
          >
            <section className=" flex items-center border border-gray-600 mt-5 w-[40%] p-3 rounded-lg">
              {element.isEdit ? (
                <>
                  <div className="w-[80%] me-1">
                    <TextField
                      id="standard-basic"
                      label=""
                      variant="standard"
                      className="w-[100%] "
                      onChange={(e) => {
                        setuiInput(e.target.value);
                      }}
                      value={uiinput}
                      
                    />
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Buttons
                      value="Save"
                      trigger={() => edit_todo_element(index)}
                    />
                    <Buttons value="Delete" color="error" />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[80%]">{element.value}</div>
                  <div className="flex items-center gap-2 ">
                    <Buttons value="Edit" trigger={() => edit_todo(index)} />
                    <Buttons
                      value="Delete"
                      trigger={() => {
                        del_element(index);
                      }}
                      color="error"
                    />
                  </div>
                </>
              )}
            </section>
          </section>
        );
      })}
    </>
  );
}

export default App;
