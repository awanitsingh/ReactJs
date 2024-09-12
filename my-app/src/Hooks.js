// import { useState,useEffect } from "react";
// import ReactDOM from "react-dom/client";
// export default function Timer(){
//     const [count,setCount] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {

//         setCount((count) => count + 1);
//         }, 1000);
//     }, []);
//     return <h1>I have rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer/>);






// import React, { useState, useEffect } from "react";

// const UE  = () => {
//     const [message , setMessage] = useState('Hi there, How are you');
//     useEffect(() => {
//         console.log('useEffect triggered');
//         const timer = setTimeout(() => {
//             setMessage("I'm fine, thanks for asking");
//         },1000);

//         //Cleanup Function
//         return () => clearTimeout(timer);
//         },[]);
//         return <h1>{message}</h1>;
//     };
//     export default UE;






// import React, { useState, useEffect } from "react";

// const DataFetchingComponent = () => {
//     const [data,setData] = useState(null);
//     const [loading,setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://api.agify.io?name=brijesh');
//                 const result = await response.json();
//                 setData(result);
//                 setLoading(false);
//                 } catch (error) {
//                     console.error("Error fetching data",error);
//                     setLoading(false);

//                 }

//         };  

//         fetchData();
//     },[]);
//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h1>Fetched Data: </h1>
//             <ul>
//             <li>Name: {data.name}</li>
//             <li>Age: {data.age}</li>
//             <li>Gender: {data.gender}</li>
//             </ul>
//         </div>
//     );
//     };

//     export default DataFetchingComponent;
    





//Zoom in and Zoom out effect from an api

import React, { useState, useEffect } from "react";

const ZoomEffectComponent = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('https://picsum.photos/200/300');
                setImage(response.url);
            } catch (error) {
                console.error("Error fetching image", error);
            }
        };

        fetchImage();
    }, []);

    const handleZoomIn = () => {
        setZoomLevel(zoomLevel + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(zoomLevel - 0.1);
    };

    return (
        <div>
            {image && (
                <img
                    src={image}
                    alt="Zoomable Image"
                    style={{
                        transform: `scale(${zoomLevel})`,
                        transition: "transform 0.2s ease-in-out",
                    }}
                />
            )}
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
    );
};

export default ZoomEffectComponent;