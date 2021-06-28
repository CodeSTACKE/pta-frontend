import axios from 'axios';
import {Component} from "react";
export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';

class  AuthenticationService extends Component{
   constructor(props){
       super(props)
    this.state={
        token:''
    }
 
   }
    
    executeJWTAuthenticationService(username,password){
        console.log(username,password);
        return axios.post("http://localhost:3333/authenticate",{
           username,password
        })
    
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log(user);
        if(user===null) return false;
          else 
          return true;
    
        
    }
        getLoggedInUserName() {
            let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            if(user===null) return '';
              return user;
        }
          registerSucessfulLoginForJWT(username,token){
              this.setToken(token);
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.setupAxiosInterceptors(this.createJWTToken(token));
          }
        createJWTToken(token){
            return  'Bearer ' +token;
        
        }
        setToken(token){
                this.setState({token:token});
        }
        logout(){
            sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    
        }
        executeSingupService(username,password,email){
            console.log(username,password,email);
            return axios.post("http://localhost:3333/Signup",{
               username,password,email
            })
    
        }
        reteriveAllResources(username){
            console.log(this.state.token);
            return axios.get(`http://localhost:3333/resource`,{
            
                headers:{
                    'Authorization' :`Bearer ${this.state.token}`
                }
              
        })
        }
        setupAxiosInterceptors(token){
            console.log(token);
            axios.interceptors.request.use(
                (config)=>{
                    console.log(this.isUserLoggedIn)
                    if(this.isUserLoggedIn()){
                        config.headers.authorization = this.state.token.headers.authorization;
                        console.log(config);
                    }
                    console.log(config);
                    axios.interceptors.request.eject();
                    return config;
                })    
          }
       

}
export default new AuthenticationService ();