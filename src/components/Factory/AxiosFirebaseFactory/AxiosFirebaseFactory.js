import Axios from "axios";

import axios from 'axios';

const AxiosFirebaseFactory = axios.create({
    baseURL:"https://burger-app-3fe0d-default-rtdb.firebaseio.com/"
})

export default AxiosFirebaseFactory;