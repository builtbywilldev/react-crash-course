// #BUILTBYWILL SOLUTION
// import { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="counter">
//       <button onClick={() => setCount(prev => prev - 2)}>-</button>
//             {count}
//       <button onClick={() => setCount(prev => prev + 2)}>+</button>
//     </div>
//   );
// }
// export default Counter;




// This was a challenge in the middle of the tutorial below is the end of a counter to  help us understand arrays in react!


// import React, { useState } from "react";

// function Counter() {
// const [arr, setArr] = useState([]);

//   function addPlus() {
//     setArr(prevArr => [...prevArr, "+"]);
//   }
//   function addMinus() {
//     setArr([]);
//   }


//   return (
//     <div>
//       <button onClick={addMinus}>-</button>
//       <button onClick={addPlus}>+</button>
//       {arr.toString()}
//     </div>
//   );
// }

// export default Counter;
