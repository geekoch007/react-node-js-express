import React, { useState } from 'react'

import { apiBlogCreate } from './api';

function BlogNew() {

    const [formData, setFormData] = useState({});

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('formData: ', formData);

        apiBlogCreate(formData).then(data => {
            console.log('data from server when success: ', data);

            // clear form after save complete or success
            setFormData({ title: '', date: '' });

            // alert success msesage
            alert("success created")
        }).catch(err => {
            console.log('er:', err);
            alert(err);
        })

    }

    const updateInput = (e) => {
        console.log('e: ', e.target.name, e.target.value);
        setFormData(old => ({
            ...old,
            [e.target.name]: e.target.value
        }));
    }



    return (
        <div>
            <form onSubmit={formSubmit}>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="title" value={formData?.title} onChange={updateInput} />
                    <div id="emailHelp" class="form-text">Title need text.</div>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Date</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="date" value={formData?.date} onChange={updateInput} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default BlogNew;