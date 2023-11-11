import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({
    baseURL, headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWNiNDQxNDgxODY2Zjc1ZGM1OWE2YmI4MGIyNDA2NiIsInN1YiI6IjYzNGZjOTUzNWY0YjczMDA4ZDU1M2M1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0OEP6hX6NqQKf_L-CaPi6_1H-65qB6u520OA_Fjjxn4'
    }
})


export {axiosService}