import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/quiz_page';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Quiz/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
