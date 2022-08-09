// routing
import { Link } from 'react-router-dom';
import { Loader } from '../components/Loader';

// components
import { Nav } from "../components/Nav";

export const Home = (props) => {
    const { 
        data, 
        avatar,
        loading 
    } = props;

    return (
        <>
            <Loader loading={ loading } />
            <div className={ `${ loading ? 'invisible' : '' } container mx-auto my-6 p-4` }>
                <Nav active="home" avatar={ avatar } />
                
                <div className="categories h-80">
                    <ul className="my-6 mx-2">
                        { data && data.map((d, idx) => (
                            <Link key={ idx } to={ d.attributes.slug || `category/${ d.id }`}>
                                <li className="btn btn-primary md:w-3/4 w-full my-4 mx-auto">
                                    { d.attributes.name }
                                </li>
                            </Link>
                        )) }
                    </ul>
                </div>

                {/* <div className="footer">
                    <div>
                        social icons
                    </div>
                    <div>legal footer</div>
                </div> */}
            </div>
        </>
    );
}