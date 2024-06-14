import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PumpPanelComponent from './components/PumpPanelComponent';
import ExercisesComponent from './components/ExercisesComponent';
import ProfileComponent from './components/ProfileComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import PumpPlansComponent from './components/PumpPlansComponent';
import PumpPediaComponent from './components/PumpPediaComponent';
import PumpWorkoutComponent from './components/PumpWorkoutComponent';

import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';

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
