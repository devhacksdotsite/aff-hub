import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// routes
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Category } from './routes/Category';

// hooks
import { UseFetch } from './hooks/UseFetch';

export default function App() {
  const { data, loading } = UseFetch([
    {
      path: '/categories?fields=name,slug',
      name: 'categories'
    }, {
      path: '/categories?fields=name,slug',
      name: 'avatar',
    }
  ], true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home data={ data.categories?.data || null } loading={ loading } /> }></Route>
        <Route path="/about" element={ <About /> }></Route> 
        <Route path="/category/:id" element={ <Category /> }></Route> 
      </Routes>
    </Router>
  );
}