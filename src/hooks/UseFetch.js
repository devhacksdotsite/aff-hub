import { useEffect, useState } from 'react';

export const UseFetch = (endpoints, init = false) => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const BASE_URL = 'http://localhost:1337/api';

    useEffect(() => {
        if (init) {
            setLoading(true);
            (async () => {
                const promises = await Promise.all(
                    endpoints.map(async endpoint => {
                        return await fetch(`${ BASE_URL }${ endpoint.path }`);
                    })
                );

                const res = await Promise.all(promises.map(promise => {
                    if (promise.ok) {
                        return promise.json();
                    } else {
                        alert('Fetching error...');
                    }
                }));

                const output = {}
                res.forEach((d, idx) => output[endpoints[idx].name] = d);
                setData(output);
                setLoading(false);
            })();
        }
    }, [ init ]);

    return { data, loading };
}