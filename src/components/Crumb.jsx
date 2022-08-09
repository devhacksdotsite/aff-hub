import { Link } from 'react-router-dom';

export const Crumb = (props) => {
    const { name } = props
    return (
        <div className="crumb text-lg flex">
            <Link to="/" className="back-fab" />

            <div className="inline mx-2 align-top">
                <Link to="/" className="underline text-slate-500 hover:text-slate-900 transition-all ease-in-out duration-100">categories</Link> 
                <span> / </span> 
                <span className="font-semibold">{ name }</span>  
            </div>
        </div>
    );
}