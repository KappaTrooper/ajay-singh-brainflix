import "./styles/App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import Upload from "./pages/upload/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
 
  return (
    <>


    <BrowserRouter>
   
        <Header />
 
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>




    

      
    </>
  );
}

export default App;
