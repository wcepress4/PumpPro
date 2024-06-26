import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import PumpPanelComponent from './components/PumpPanel';
import ExercisesComponent from './components/Exercises';
import ProfileComponent from './components/Profile';
import LoginComponent from './components/Login';
import SignupComponent from './components/Signup';
import PumpPlansComponent from './components/PumpPlans';
import PumpPediaComponent from './components/PumpPedia';
import PumpWorkoutComponent from './components/PumpWorkout';

import ListUserComponent from './components/ListUser';
import AddUserComponent from './components/AddUser';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <HeaderComponent />
        <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/admin/users" element={<ListUserComponent />} />
          <Route path="/admin/add-user" element={<AddUserComponent />} />
          <Route path="/admin/edit-user/:id" element={<AddUserComponent />} />
          <Route path="/" element={<ListUserComponent />} />
          <Route path="/pump-panel" element={<PumpPanelComponent />} />
          <Route path="/exercises" element={<ExercisesComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/pump-plans" element={<PumpPlansComponent />} />
          <Route path="/pump-pedia" element={<PumpPediaComponent />} />
          <Route path="/pump-workout" element={<PumpWorkoutComponent />} />
        </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
