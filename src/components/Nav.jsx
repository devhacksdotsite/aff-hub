import { Link } from 'react-router-dom';

export const Nav = (props) => {
    const { active } = props;

    const isActive = (navItem) => navItem === active ? 'scale-110 font-bold' : '';

    return (
        <>
            <div className="avatar flex justify-center items-center">
                <img className="w-54 h-54 rounded-full" src="/assets/imgs/me.jpg" alt="profile image"/>
            </div>
            
            <div className="nav m-6">
                <ul className='flex justify-center text-lg'>
                    <Link to="/">
                        <li className={ isActive('home') }>Home</li>
                    </Link>
                    <li className="pipe mx-2 font-bold">|</li>
                    <Link to="/about">
                        <li className={ isActive('about') }>About</li>
                    </Link>
                </ul>
            </div>
        </>
    );
}