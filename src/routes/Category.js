// routing
import { useParams, Link } from 'react-router-dom';

// hooks
import { UseFetch } from '../hooks/UseFetch';

// components
import { SearchBar } from '../components/SearchBar';
import { Posts } from '../components/Posts';
import { Loader } from '../components/Loader';

export const Category = () => {
    const { id } = useParams();

    const { data, loading } = UseFetch([{
        path: `/categories/${ id }/?fields=name&populate[posts][fields]=name,description&populate[posts][populate]=hero`,
        name: 'posts'
    }], true);
    
    return (
        <>
            <Loader loading={ loading } />
            <div className={`${ loading ? 'invisible' : '' } container mx-auto p-6 my-8`}>
                <Link to="/" className="back-fab" />
                <SearchBar />
                <Posts data={ data.posts?.data || null } />
            </div>
        </>
    );
}