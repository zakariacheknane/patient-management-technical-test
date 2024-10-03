import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
<div className="min-h-screen bg-custom-background bg-cover bg-center p-[40px]">

      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

