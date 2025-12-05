import { AuthProvider } from "./Auth-Example/AuthContext";
import Navbar from "./Auth-Example/Navbar";


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </>
  );
}

export default App;





// import { useState } from "react";
// import Toolbar from "./Theme-Example/Toolbar";
// import ThemeContext from "./Theme-Example/ThemeContext";


// function App() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <>
//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     </>
//   );
// }

// export default App;



// import { createContext, useContext } from "react";

// const UserContext = createContext({
//   userName: "",
//   userLastName: ""
// });

// function App() {
//   const userName = "Anil";
//   const userLastName = "Kumar";
//   return (
//     <>
//       <UserContext.Provider value={{ userName, userLastName }}>
//         <Parent />
//       </UserContext.Provider>
//     </>
//   );
// }

// export default App;

// function Parent() {
//   return (
//     <>
//       <Child />
//       <SubGrandChild />
//     </>
//   );
// }

// function Child() {
//   const {userLastName} = useContext(UserContext)
//   return (
//     <>
//     <h1>This is a Child Components : {userLastName} </h1>
//     <GrandChild />
//     </>
//   );
// }

// function GrandChild() {
//   const {userName} = useContext(UserContext);
//   return (
//     <>
//       <h3>My name is : {userName} </h3>
//     </>
//   );
// }

// function SubGrandChild() {
//   const {userLastName} = useContext(UserContext);
//   return <h3>This is a Subchild : {userLastName}</h3>;
// }
