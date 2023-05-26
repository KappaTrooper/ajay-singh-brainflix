import "./styles/App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import Upload from "./pages/upload/Upload";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";



function App() {
  let { videoId } = useParams();

 
  return (
    <>


    <BrowserRouter>
   
        <Header />
 
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/videos/:videoId" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>




    

      
    </>
  );
}

export default App;
