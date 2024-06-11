import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
        <Routes>
          <Route index element={<ListUserComponent/>}/>
          <Route path="/users" element={<ListUserComponent/>}/>
          <Route path="*" element={<ListUserComponent/>}/>
          <Route path = "/add-user" element = {<AddUserComponent/>}/>
          <Route path = "/edit-user/:id" element = {<AddUserComponent/>}/>
        </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
