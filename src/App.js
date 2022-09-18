import "./css/style.css"
import MainPage from "./pages/productos/productos";
// import { collection, getDocs } from "firebase/firestore"
// import { useEffect } from "react";
// import database from "./firebase/firebase";

// const getData = async ()=> {
//   const data = await getDocs(collection(database, "productos"))
//   data.forEach(doc => {
//     console.log(doc.data())
//   })
// }

function App() {

  // useEffect(()=> {
  //   getData()
  // }, [])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
