import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PumpPanel from './components/user/PumpPanel';
import Exercises from './components/user/exercises/Exercises';
import Profile from './components/user/account/Profile';
import Settings from './components/user/account/Settings';
import PumpPlans from './components/user/PumpPlans';
import PumpPedia from './components/user/PumpPedia';
import PumpWorkout from './components/user/PumpWorkout';
import Welcome from './components/auth/Welcome';
import Home from './components/user/Home';
import ListUser from './components/admin/ListUser';
import EditUser from './components/admin/EditUser';
import ProtectedRoute from './routes/ProtectedRoute';
import NotAuth from './components/auth/NotAuth';
import EditExercise from './components/user/exercises/EditExercise';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            {/* main routes */}
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />

            {/* auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/not-authorized" element={<NotAuth />} />

            {/* admin routes */}
            <Route path="/admin/users" element={<ProtectedRoute roles={['ADMIN']}><ListUser /></ProtectedRoute>} />
            <Route path="/admin/edit-user/:id" element={<ProtectedRoute roles={['ADMIN']}><EditUser /></ProtectedRoute>} />

            {/* user routes */}
            <Route path="/home" element={<ProtectedRoute roles={['USER', 'ADMIN']}><Home /></ProtectedRoute>} />
            <Route path="/pump-panel" element={<ProtectedRoute roles={['USER', 'ADMIN']}><PumpPanel /></ProtectedRoute>} />
            <Route path="/exercises" element={<ProtectedRoute roles={['USER', 'ADMIN']}><Exercises /></ProtectedRoute>} />
            <Route path="/edit-exercise/:name" element={<ProtectedRoute roles={['USER', 'ADMIN']}><EditExercise /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute roles={['USER', 'ADMIN']}><Profile /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute roles={['USER', 'ADMIN']}><Settings /></ProtectedRoute>} />
            <Route path="/pump-plans" element={<ProtectedRoute roles={['USER', 'ADMIN']}><PumpPlans /></ProtectedRoute>} />
            <Route path="/pump-pedia" element={<ProtectedRoute roles={['USER', 'ADMIN']}><PumpPedia /></ProtectedRoute>} />
            <Route path="/pump-workout" element={<ProtectedRoute roles={['USER', 'ADMIN']}><PumpWorkout /></ProtectedRoute>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
