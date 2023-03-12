import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { apiBlogShow } from './api';

function BlogShow() {
    let { id } = useParams();

    const [blog, setBlog] = useState({});

    const fetchData = () => {
        return apiBlogShow(id).then(data => setBlog(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>BlogShow ID: {id} <br />
            <pre>{JSON.stringify(blog, null, 2)}</pre>
        </div>
    )
}

export default BlogShow