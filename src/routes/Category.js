import { useEffect, useState } from 'react';

// routing
import { useParams } from 'react-router-dom';

// hooks
import { UseFetch } from '../hooks/UseFetch';
import { UseSearch } from '../hooks/UseSearch';

// components
import { SearchBar } from '../components/SearchBar';
import { Posts } from '../components/Posts';
import { Loader } from '../components/Loader';
import { Crumb } from '../components/Crumb';

export const Category = () => {
    const { id } = useParams();
    const [ search, setSearch ] = useState('');

    const { data, loading } = UseFetch([{
        path: `/api/categories/${ id }/?fields=name&populate[posts][fields]=name,description&populate[posts][populate]=hero`,
        name: 'posts'
    }], true);

    const { posts } = UseSearch(search, (data.posts?.data.attributes.posts.data || null));
        
    return (
        <>
            <Loader loading={ loading } />
            <div className={`${ loading ? 'invisible' : '' } container mx-auto p-6 my-8`}>
                <Crumb name={ data.posts?.data.attributes.name } />
                <SearchBar 
                    search={ search } 
                    setSearch={ setSearch }
                />
                <Posts data={ posts || null } />
            </div>
        </>
    );
}