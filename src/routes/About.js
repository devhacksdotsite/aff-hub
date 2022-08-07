import { Link } from 'react-router-dom';

// components
import { Nav } from "../components/Nav";
import { Loader } from '../components/Loader';

export const About = () => {
    return (
        <>
            <Loader loading={ true } />
            <div className="container mx-auto p-6 my-8">
                <Link to="/" className="back-fab" />
                <Nav active="about" />
                hello from about
            </div>
        </>
    );
}