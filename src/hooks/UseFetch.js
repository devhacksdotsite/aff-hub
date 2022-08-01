import { useEffect, useState } from 'react';

export const UseFetch = (path, init = false) => {
    const [ data, setData ] = useState();

    const BASE_URL = 'http://localhost:1337/api'

    useEffect(() => {
        if (init) {
            (async () => {
                console.log('data fetched')
                const promise = await fetch(`${ BASE_URL }${ path }`);
                const res = await promise.json();
                setData(res.data);
            })();
        }
    }, [ path, init ]);

    return data;
}