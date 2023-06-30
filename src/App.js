import logo from './logo.svg';
import './App.css';
// import PDFToExcelConverter from './PDFToExcelConverter';
import { AuthContextProvider } from './components/AuthContext';
import Signin from './components/Signin';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      {/* <h2>Pdf to Excel</h2>
      <PDFToExcelConverter/> */}
      <AuthContextProvider>
        <Nav/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        </Routes>       
      </AuthContextProvider>
    </div>
  );
}

export default App;
