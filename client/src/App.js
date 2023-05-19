import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav.js'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;