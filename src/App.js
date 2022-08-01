import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

// routes
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Category } from './routes/Category';

// context

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <About /> }></Route> 
        <Route path="/category/:id" element={ <Category /> }></Route> 
      </Routes>
    </Router>
  );
}