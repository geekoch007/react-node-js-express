import Axios from 'axios';

const blogBaseUrl = 'http://localhost:8081/api/blog';
const headers = {
    'Content-Type': 'application/json',
    // 'Authorization': 'bearer dsadsadsadasdsadsadas' example for login
};

const apiBlogList = () => {
    return Axios.get(blogBaseUrl, { headers }).then((res) => res.data);
}

const apiBlogShow = (id) => {
    return Axios.get(`${blogBaseUrl}/${id}`).then((res) => res.data);
}

const apiBlogCreate = (data) => {
    return Axios.post(blogBaseUrl, data, { headers }).then((res) => res.data);
}

const apiBlogUpdate = (id, data) => {
    return Axios.patch(`${blogBaseUrl}/${id}`, data, { headers }).then((res) => res.data);
}

const apiBlogDelete = (id) => {
    return Axios.delete(`${blogBaseUrl}/${id}`, { headers }).then((res) => res.data);
}

export {
    apiBlogList,
    apiBlogShow,
    apiBlogCreate,
    apiBlogUpdate,
    apiBlogDelete
}