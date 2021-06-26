import axios from 'axios';
export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';

const AuthenticationService ={
   
    executeJWTAuthenticationService(username,password){
        console.log(username,password);
        return axios.post("http://localhost:3333/authenticate",{
           username,password
        })

    }, 
    setupAxiosInterceptors(token){
        console.log(token);
        axios.interceptors.request.use(
            (config)=>{
                console.log(this.isUserLoggedIn)
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token.headers.authorization
                    console.log(config);
                }
                console.log(config);
                return config;
            }
           
        ) 
    }, isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log(user);
        if(user===null) return false;
          else 
          return true;
    
        },

        getLoggedInUserName() {
            let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            if(user===null) return '';
              return user;
        },
          registerSucessfulLoginForJWT(username,token){
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.setupAxiosInterceptors(this.createJWTToken(token));
        },
        createJWTToken(token){
            return  'jwt_token ' +token;
        },
       
        logout(){
            sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        },
        executeSingupService(username,password,email){
            console.log(username,password,email);
            return axios.post("http://localhost:3333/Signup",{
               username,password,email
            })
    
        }, 
}
export default AuthenticationService;