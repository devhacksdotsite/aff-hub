import { Link } from 'react-router-dom';

export const Nav = (props) => {
    const { active } = props;

    return (
        <>
            <div className="avatar flex justify-center items-center">
                <img className="w-54 h-54 rounded-full" src="/assets/imgs/me.jpg" alt="profile image"/>
            </div>
            
            <div className="nav m-6">
                <ul className='flex justify-center text-lg'>
                    <Link to="/">
                        <li className='active scale-110 font-bold'>Home</li>
                    </Link>
                    <li className="pipe mx-2 font-bold">|</li>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </div>
        </>
    );
}