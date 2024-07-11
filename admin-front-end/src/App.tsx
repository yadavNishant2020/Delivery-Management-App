import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignInForm from './pages/auth/SignInForm';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import useAuthUser from './utils/auth';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
 
  const location = useLocation();
  const isSignInPage = location.pathname === '/' ;

  return (
    <div className={isSignInPage ? '' : 'px-[8vw] bg-gray-100'}>
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {!isSignInPage && <Footer />}
    </div>
  );
}

export default App;
