import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [name, setName] = useState("")
  const image = `https://images.pexels.com/photos/27224216/pexels-photo-27224216/free-photo-of-agua-pura.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`;
  return (
    <div className="App">
      <p>First React Test Case</p>
      <input
        type="text"
        name={"username"}
        placeholder="Enter User Name"
        id={"userId"}
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />
      <h2>Name {name}</h2>
      <button onClick={()=>setName("Sagar")} >
        click me
      </button>
      <img title={"AI generated image"} src={image} />
    </div>
  );
}

export default App;
