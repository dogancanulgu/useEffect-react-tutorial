import {useState, useEffect} from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    // const [name, setName] = useState("Doğancan");
  
    useEffect(() => {
        console.log("Component mount edildi!");

        const interval = setInterval(() => {
            setNumber((number) => number + 1)
            }, 1000)

        return () => clearInterval(interval);
    }, []);


  
    useEffect(() => {
      console.log("number state Güncellendi");
    }, [number]);
  
    // useEffect(() => {
    //   console.log("name state Güncellendi");
    // }, [name]);

    return (
        <div>
        <h1>{number}</h1>
        <button onClick= { () => setNumber(number - 1)}>Decrease</button>
        <button onClick= { () => setNumber(number + 1)}>Increase</button> 
      </div>
    )
}

export default Counter
