// import React, {useRef} from 'react';
// function Counter()
// {
//     const countRef=useRef(0);

//     const increment=()=>{
//         countRef.current+=1;
//         console.log(`Count: ${countRef.current}`);
//     };
// return(
//     <div>
//         <button onClick={increment}>Increment</button>
//     </div>
// );
// }
// export default Counter;






// import { useState, useRef } from "react";

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }




// import { useEffect,useRef } from "react";
// export default function Refheight() {
//     const divElement = useRef();
//         useEffect(() => {
//             console.log("The height of the div is : " , divElement.current.offsetHeight);
//         },
//     []);
//         return (
//             <div ref={divElement}>
//                 <h1>Learn about useRef</h1>
//             </div>
//         );
//     }




// import React , {useRef} from "react";

// function FocusInput() {
//     const inputRef = useRef(null);
//     const handleClick = () => {
//         inputRef.current.focus();
//     };
//     return (
//         <div>
//             <input ref={inputRef} type="text"/>
//             <button onClick={handleClick}>Focus the Input</button>
//         </div>
//     );
// }

// export default FocusInput;





// import { useState, useRef } from "react";

// export default function VideoPlayer() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const ref = useRef(null);

//     function handleClick() {
//         const nextIsPlaying = !isPlaying;
//         setIsPlaying(nextIsPlaying);

//         if (nextIsPlaying) {
//             ref.current.play();
//         } else {
//             ref.current.pause();
//         }
//     }

//     return (
//         <div>
//             <video ref={ref} width="600" controls>
//                 <source src="https://in.pinterest.com/pin/10203536647121568/" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <button onClick={handleClick}>
//                 {isPlaying ? "Pause" : "Play"}
//             </button>
//         </div>
//     );
// }