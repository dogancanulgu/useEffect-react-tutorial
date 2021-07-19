import {useState, useEffect} from "react";

function App() {
  
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Doğancan");

  useEffect(() => {
    console.log("Component mount edildi!")
  }, []);

  useEffect(() => {
    console.log("number state Güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("name state Güncellendi");
  }, [name]);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick= { () => setNumber(number - 1)}>Decrease</button>
      <button onClick= { () => setNumber(number + 1)}>Increase</button>

      <h1>{name}</h1>
      <button onClick= { () => setName("Seval")}>Decrease</button>  
    </div>
  );
};

export default App;
