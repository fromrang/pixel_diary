import axios from "axios";

export default function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer ${token}'; //토큰이 있으면 header에 포함시키고
    }else{
        delete axios.defaults.headers.common['Authorization']; //없으면 그 부분을 지운다
    }
}