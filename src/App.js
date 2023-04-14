import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
const [count, setCount] = useState(
parseInt(localStorage.getItem("clickCount")) || 0
);

useEffect(() => {
localStorage.setItem("clickCount", count);
}, [count]);

const handleClick = () => {
setCount(count + 1);
};

return (
<div className="App">
<div className="container">
<h1>Click Button to Claim Prize!!</h1>
<button onClick={handleClick} className="button">
Tap Here
</button>
<p>Click Count: {count}</p>
</div>
</div>
);
}

export default App;