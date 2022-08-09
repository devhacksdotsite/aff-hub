import { Link } from 'react-router-dom';

// components
import { Nav } from "../components/Nav";
import { Loader } from '../components/Loader';
import { Crumb } from '../components/Crumb';

// hooks
import { UseFetch } from '../hooks/UseFetch';

export const About = (props) => {
    const { avatar } = props;

    const { data: { about } , loading } = UseFetch([
        {
            path: '/api/about',
            name: 'about',
        }
    ], true);


    return (
        <>
            <Loader loading={ loading } />
            <div className="container mx-auto p-6 my-8">
                <Crumb name="About" />
                <Nav active="about" avatar={ avatar } />

                <div className={ `${ loading ? 'invisible' : '' } text-center` }>
                    { about && about.data.attributes.about }
                </div>
            </div>
        </>
    );
}