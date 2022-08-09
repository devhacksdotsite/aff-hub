import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// routes
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Category } from './routes/Category';
import { Error } from './routes/Error';

// hooks
import { UseFetch } from './hooks/UseFetch';

export default function App() {
  const { data, loading } = UseFetch([
    {
      path: '/api/categories?fields=name,slug',
      name: 'categories'
    }, {
      path: '/api/profile-image?populate=*',
      name: 'avatar',
    }
  ], true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={ 
            <Home data={ data.categories?.data || null } avatar={ data.avatar?.data.attributes.avatar.data || null } loading={ loading } /> 
          }
        ></Route>
        <Route path="/about" element={ <About avatar={ data.avatar?.data.attributes.avatar.data || null } /> }></Route> 
        <Route path="/category/:id" element={ <Category /> }></Route> 
        <Route path="*" element={ <Error /> }></Route>
      </Routes>
    </Router>
  );
}