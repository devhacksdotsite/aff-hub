// components
import { Post } from './Post';

const rangeHelper = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

export const Posts = (props) => {
    const { data } = props;

    return (
        <>
            <div className="realtive grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-6">
                { data && data.length > 0 ? (data.map((post, idx) => (
                    <Post 
                        key={ idx } 
                        id={ post.id } 
                        name={ post.attributes.name }
                        desc={ post.attributes.description }
                        img={ post.attributes.hero }
                    />
                ))) : (<div className="absolute top-1/2 inset-x-1/3 md:inset-x-1/2 w-56">
                        <h2 className='text-xl font-semibold'>No Data :(</h2>
                    </div>)
                }
            </div>
        </>
    );
}