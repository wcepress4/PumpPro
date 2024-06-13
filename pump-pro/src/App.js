import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HistoryComponent from './components/HistoryComponent';
import ExercisesComponent from './components/ExercisesComponent';
import ProfileComponent from './components/ProfileComponent';

import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className = "container">
        <Routes>

          <Route path="/users" element={<ListUserComponent/>}/>
          <Route path = "/add-user" element = {<AddUserComponent/>}/>
          <Route path = "/edit-user/:id" element = {<AddUserComponent/>}/>
          
          <Route path="/" element={<ListUserComponent/>}/>
          <Route path="/history" element={<HistoryComponent/>}/>
          <Route path="/exercises" element={<ExercisesComponent/>}/>
          <Route path="/profile" element={<ProfileComponent/>}/>

        </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
