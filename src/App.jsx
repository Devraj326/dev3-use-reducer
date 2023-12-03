import './App.css'
import { useState } from 'react';
import { useReducer } from 'react';

// 1.1 building the initial state array
const nameArr = [{
  name: "Devraj",
  visible: true
}]

// 1.2 building reducer function
function reducer(initArr, action){
  switch (action.type) {
    case "ADD":
      return[...initArr, {name:action.data, visible: true}];
    case "CHANGE":
      return initArr.map((item ,index)=>{
        console.log(item.visible);
        if(index === action.index){
          return {...item, visible: !item.visible}
        }else{
        return item}
      })
      default:
        return initArr
  }
}

function App() {

  let [value, setValue] = useState();
  // 2 step: calling the useReducer()
  let [myArr, dispatch] = useReducer(reducer, nameArr)

  // 3 step: using state and dispatch
  function handleClickHide(index){
    dispatch({type:"CHANGE", index})
  }

  function handleNameChange(e){
    setValue(e.target.value);
  }

  // 3 step: using state and dispatch
  function handleAddClick(){
    dispatch({type: "ADD", data: value})
  }

  return (
    <>
      <div>
      <input type="text" onChange={(e)=>handleNameChange(e)}/>
      <button onClick={handleAddClick}>Add</button>
      </div>
      {/* 3 step: using state and dispatch */}
      {myArr.map((item, index)=>{
        return(
          <div key={index}>
          <p>{(item.visible) ? item.name : " Name is hidden" }</p>
            <button onClick={()=>handleClickHide(index)}>Hide</button>
          </div>  
        )
      })}
    </>
  )
}

export default App
