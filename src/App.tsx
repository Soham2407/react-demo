import React from "react";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Content from "./components/Content";
import SwipeableTextMobileStepper from "./components/Steppers";
import Footers from "./components/Footers";
import Tabels from "./components/Tabels";
// import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import FormikApp from "./components/FormikApp";

function App() {
  // return <FormikApp />;

  return (
    <div className="bg">
      <NavBar />
      <Cards />
      <Content />
      <SwipeableTextMobileStepper />
      <Tabels />
      <Footers />
    </div>
  );
  // let [original, newValue] = useState("");

  // let changeHandler = (e: any) => {
  //   newValue(e.target.value);
  // };

  // let deleteHandler = (index: number) => {
  //   const text = original.split("");
  //   text.splice(index, 1);
  //   let updated = text.join("");
  //   newValue(updated);
  // };

  // const charList = original.split("").map((ch, index) => {
  //   return (
  //     <Char character={ch} key={index} clicked={() => deleteHandler(index)} />
  //   );
  // });

  // return (
  //   <div className="App">
  //     <h1>React State </h1>
  //     <input type="text" onChange={changeHandler} value={original}></input>
  //     <div>
  //       <p>{original}</p>
  //     </div>
  //     <Validation inputLength={original.length} />
  //     <div
  //       style={{
  //         display: "flex",
  //         margin: "0 auto",
  //         maxWidth: 700,
  //         justifyContent: "center",
  //         flexWrap: "wrap"
  //       }}
  //     >
  //       {charList}
  //     </div>
  //   </div>
}

// function App() {
//   let [original, newValue] = useState(false);
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }State(" ");
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
//}
//   };

//   let changeHandler = (e: any) => {
//     setData(e.target.value);
//   };

//   let image = null;
//   if (original === true) {
//     image = (
//       <img src="https://images.firstpost.com/wp-content/uploads/2020/01/Virat-Kohli-380-3.jpg"></img>
//     );
//   }

//   return (
//     <div>
//       <h1>My Favourite Player is : {getData}</h1>display: "inline-block",
// padding: "16px",
// textAlign: "center",
// margin: "16px",
// border: "1px solid black"
//       <input type="text" value={getData} onChange={changeHandler} />
//       {image}
//       <div>
//         <button onClick={clickHandler}>Click Me</button>
//       </div>
//     </div>
//   );
// }

// function Resizer() {
//   const resizeListener = () => {
//     console.log("call resize...");
//   };

//   useEffect(() => {
//     console.log("only after first render");
//     window.addEventListener("resize", resizeListener);
//     return () => {
//       console.log("now unmounting...");
//       window.removeEventListener("resize", resizeListener);
//     };
//   }, []);

//   return <div>I help in resize</div>;
// }

// function App() {
//   const [message, setMessage] = useState("Hi");
//   const [animate, setAnimate] = useState("");

//   console.log("render...");

//   const handleClick = () => {
//     // setMessage("The message is changed.");
//     setAnimate("pulse");
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setMessage(e.target.value);
//   };

//     useEffect(() => {
//       console.log("Everytime message changes it's value");
//     }, [message]);

//     useEffect(() => {
//       if (animate) {
//         setTimeout(() => {
//           setAnimate("");
//         }, 5000);
//       }
//      }, [animate]);

//   return (
//     <div>
//       <h1 className={animate}>{message}</h1>
//       <button onClick={handleClick}>Change the message</button>
//       <input type="text" value={message} onChange={handleChange} />
//     </div>
//   );
// }

// function Resizer(props: any) {
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   const resizeListener = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("resize", resizeListener);
//     return () => {
//       window.removeEventListener("resize", resizeListener);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         height: dimensions.height,
//         width: dimensions.width,
//         backgroundColor: "tomato",
//         padding: 0,
//         margin: 0
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

// function useWindowSize() {
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   const resizeListener = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("resize", resizeListener);
//     return () => {
//       window.removeEventListener("resize", resizeListener);
//     };
//   }, []);

//   return dimensions;
// }

// function App() {
//   // return (
//   //   <Resizer>
//   //     <div>Hello</div>
//   //   </Resizer>
//   // );
//   const { height, width } = useWindowSize();

//   return (
//     <div style={{ height, width, backgroundColor: "tomato", overflow: "auto" }}>
//       <p>Hello World</p>
//     </div>
//   );
// }

export default App;
