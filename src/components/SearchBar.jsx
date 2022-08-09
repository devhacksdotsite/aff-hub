// components
import { BsSearch } from 'react-icons/bs';

export const SearchBar = (props) => {
    const { search, setSearch } = props;

    return (
        <div id="search" className="flex-auto self-center mt-8">
            <div className="w-9/12 relative bg-gray-200 opacity-100 p-3 text-black mx-auto rounded-lg">
                <BsSearch className='absolute left-1 top-4 ml-2' />
                <input 
                    type="text" 
                    placeholder="Search Post Name..." 
                    className="ml-6 bg-transparent text-black focus:outline-none w-full" 
                    value={ search }
                    onChange={ (e) => setSearch(e.target.value.toLowerCase()) } 
                />
            </div>
        </div>
    );
}