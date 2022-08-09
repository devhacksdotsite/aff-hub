import { useEffect, useState } from "react";

export const UseSearch = (search, data) => {
    const [ posts, setPosts ] = useState([]);
    
    useEffect(() => {
        if (search) {
            setPosts(data?.filter(post => {
                const name = post.attributes.name.toLowerCase();
                return name.includes(search);
            }));
        } else {
            setPosts(data);
        }
    }, [ search, data ]);

    return { posts };
}