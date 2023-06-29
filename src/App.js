import logo from './logo.svg';
import './App.css';
// import PDFToExcelConverter from './PDFToExcelConverter';
import { AuthContextProvider } from './components/AuthContext';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      {/* <h2>Pdf to Excel</h2>
      <PDFToExcelConverter/> */}
      <AuthContextProvider>
        <Signin/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
