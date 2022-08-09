// routing
import { useParams } from 'react-router-dom';

// hooks
import { UseFetch } from '../hooks/UseFetch';

// components
import { SearchBar } from '../components/SearchBar';
import { Posts } from '../components/Posts';
import { Loader } from '../components/Loader';
import { Crumb } from '../components/Crumb';

export const Category = () => {
    const { id } = useParams();

    const { data, loading } = UseFetch([{
        path: `/api/categories/${ id }/?fields=name&populate[posts][fields]=name,description&populate[posts][populate]=hero`,
        name: 'posts'
    }], true);
    
    return (
        <>
            <Loader loading={ loading } />
            <div className={`${ loading ? 'invisible' : '' } container mx-auto p-6 my-8`}>
                <Crumb name={ data.posts?.data.attributes.name } />
                <SearchBar />
                <Posts data={ data.posts?.data || null } />
            </div>
        </>
    );
}