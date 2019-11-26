import  axios  from 'axios';
import { Observable } from 'rxjs';
export class HttpClient {}

HttpClient.identity = 'HttpClient';

HttpClient.auth={};
HttpClient.login={};
HttpClient.getAxiosInstance = ()=>{
   const o= axios.create({
        baseURL:'http://localhost:8082/',
        headers:{
            'Authorization':'o565vnxuidsasuid7912bdua12',
            'Application':'MusclePlanner',
            'ApplicationDesc':'MusclePlanner'
        }        
    });

    return o;
};
HttpClient.auth.get = (url,params={}) => {
   HttpClient.getAxiosInstance().get('api/data',{});
};

HttpClient.auth.post = () => {
    
};

HttpClient.login.post = (data) => {
    HttpClient.getAxiosInstance().post('api/auth/login',data);
};



