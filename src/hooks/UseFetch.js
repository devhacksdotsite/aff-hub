import { useEffect, useState } from 'react';

const { REACT_APP_STRAPI_API } = process.env;

export const UseFetch = (endpoints, init = false) => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        if (init) {
            setLoading(true);
            (async () => {
                const promises = await Promise.all(
                    endpoints.map(async endpoint => {
                        return await fetch(`${ REACT_APP_STRAPI_API }${ endpoint.path }`);
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