import { BsSearch } from 'react-icons/bs';
export const SearchBar = () => {
    return (
        <div id="search" className="flex-auto self-center">
            <div className="w-9/12 relative bg-gray-200 opacity-100 p-3 text-black mx-auto rounded-lg">
                <BsSearch className='absolute left-1 top-4 ml-2' />
                <input type="text" placeholder="Search..." className="ml-6 bg-transparent text-black focus:outline-none w-full" />
            </div>
        </div>
    );
}