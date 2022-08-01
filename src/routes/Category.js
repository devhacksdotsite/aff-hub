// routing
import { useParams, Link } from 'react-router-dom';

// hooks
import { UseFetch } from '../hooks/UseFetch';

// components
import { SearchBar } from '../components/SearchBar';
import { Posts } from '../components/Posts';

export const Category = () => {
    const { id } = useParams();
    const ENDPOINT = `/categories/${ id }/?fields=name&populate[posts][fields]=name,description&populate[posts][populate]=hero`;
    const data = UseFetch(ENDPOINT, true);

    return (
        <div className='container mx-auto p-6 my-8'>
            <Link to="/" className="back-fab" />
            <SearchBar />
            <Posts data={ data } />
        </div>
    );
}