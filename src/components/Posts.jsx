// components
import { Post } from './Post';

const rangeHelper = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

export const Posts = (props) => {
    const { data } = props;
    
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-6">
                { data && data.attributes.posts.data.map((post, idx) => (
                    <Post 
                        key={ idx } 
                        id={ post.id } 
                        name={ post.attributes.name }
                        desc={ post.attributes.description }
                        img={ post.attributes.hero }
                    />
                )) }
            </div>
        </>
    );
}