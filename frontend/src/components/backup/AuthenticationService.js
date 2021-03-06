import axios from './AxiosInstance.js'

class AuthenticationService {
  
    // send username, password to the SERVER
    executeJwtAuthenticationService(username, password) {
        return axios.post('/auth/login', {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(data) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', data.t);
        localStorage.setItem('info', JSON.stringify(data.d));
        localStorage.setItem('id', data.i);
        localStorage.setItem('name', data.n);
        localStorage.setItem('expire', data.e);
    }

    // setupAxiosInterceptors() {
    //     console.log("===setupAxiosInterceptors===");
    //     axios.interceptors.request.use(
    //         config => {
    //             const token = localStorage.getItem('token');
    //             if (token) {
    //                 config.headers['Authorization'] = 'Bearer ' + token;
    //             }
    //             // config.headers['Content-Type'] = 'application/json';
    //             return config;
    //         },
    //         error => {
    //             Promise.reject(error)
    //         });
    // }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("info");
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("expire");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        if (token) {
            return true;
        }
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService()