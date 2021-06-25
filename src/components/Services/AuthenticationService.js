import axios from 'axios';
export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';

const AuthenticationService ={
   
    executeJWTAuthenticationService(username,password){
        console.log(username,password);
        return axios.post("http://localhost:3333/authenticate",{
           username,password
        })

    },
        createBasicAuthToken(username,password){
            return  'Basic ' + window.btoa(username + ":" + password);
        },

        registerSucessfulLoginForJWT(username,token){
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.setupAxiosInterceptors(this.createJWTToken(token));
        },
        createJWTToken(token){
            return  'jwt_token ' +token;
        },
}
export default AuthenticationService;