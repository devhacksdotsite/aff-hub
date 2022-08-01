// routing
import { Link } from 'react-router-dom';

// hooks
import { UseFetch } from '../hooks/UseFetch';

// components
import { Nav } from "../components/Nav";

export const Home = () => {
    const ENDPOINT = '/categories?fields=name,slug';
    const data = UseFetch(ENDPOINT, true);

    return (
        <div className="container mx-auto my-6 p-4">
            <Nav active="home" />
            
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
    );
}