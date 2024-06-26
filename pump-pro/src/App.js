import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// nav imports
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';

// auth imports
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

// user imports
import PumpPanel from './components/user/PumpPanel';
import Exercises from './components/user/Exercises';
import Profile from './components/user/Profile';
import PumpPlans from './components/user/PumpPlans';
import PumpPedia from './components/user/PumpPedia';
import PumpWorkout from './components/user/PumpWorkout';
import Home from './components/user/Home';
import AuthHome from './components/user/AuthHome';

// admin imports
import ListUser from './components/admin/ListUser';
import AddUser from './components//admin/AddUser';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/admin/users" element={<ListUser />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/edit-user/:id" element={<AddUser />} />
          <Route path="/" element={<ListUser />} />
          <Route path="/pump-panel" element={<PumpPanel />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pump-plans" element={<PumpPlans />} />
          <Route path="/pump-pedia" element={<PumpPedia />} />
          <Route path="/pump-workout" element={<PumpWorkout />} />
        </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
