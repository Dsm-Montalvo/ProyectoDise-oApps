import axios from "axios";

const Api = axios.create({
    baseURL:"http://192.168.100.37:3000/api/",
    headers: {
        'Content-Type': "aplication/json"
    }
});

export{
    Api
}