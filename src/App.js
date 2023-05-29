import React from 'react'
import './App.css'
import Todo from './components/todo'
function App() {
  const todos=[
    {id:1,title:"Testing React",completed:false},
    {id:2,title:"Running Successful",completed:true},
  ]
  return (
    <div className="App">
      {
        todos.map((x)=>{
          return (<Todo todo={x}/>)
        })
      }
    </div>
  );
}

export default App;
