import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './pages/PatientList';
import AddFolder from './pages/AddFolder';
function App() {
  return (
<div className="min-h-screen bg-custom-background bg-cover bg-center p-[40px]">

      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/addpatient" element={<AddFolder />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

