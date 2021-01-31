import axios from 'axios';

const AxiosFactory= axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
     headers:{
        "Content-type": "application/json"
    }
})

AxiosFactory.interceptors.request.use(request => {
    console.log(request)
}, error => {
        console.log(error);
});
AxiosFactory.interceptors.response.use(response => {
    console.log(response)
}, error => {
        console.log(error)
})
export default AxiosFactory;

