import axios from 'axios';
import {Component} from "react";
export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser';

class AuthenticationService  extends Component{
 

   
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
             sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
            this.setupAxiosInterceptors(this.createJWTToken(token));
          }
        createJWTToken(token){
            return  'Bearer ' +token;
        
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
                return axios.get(`http://localhost:3333/resource`)
            }


        addResources(author,content,title){
        return axios.post(`http://localhost:3333/resource`,{
           author,content,title})
        }

        getResources(id){
                    return axios.get(`http://localhost:3333/resource/${id}`)
            }

        updateResources(id,author,content,
            title ){
                console.log("Updated resource",id);
            return axios.put(`http://localhost:3333/resource/${id}`,{
                author,content,title,
  
        })
        }
        
        addComments(id,comments,comment)
             {
                console.log("Updated resource",id);
            return axios.put(`http://localhost:3333/resource/${id}`,{
              comments,comment,
                
              
        })
        }
        setupAxiosInterceptors(token){
            console.log(token);
            axios.interceptors.request.use(
                (config)=>{
                    console.log(this.isUserLoggedIn)
                    if(this.isUserLoggedIn()){
                        config.headers.authorization = token;
                        console.log(config);
                    }
                    console.log(config);
                    return config;
                })    
          }
       

}
export default new AuthenticationService ();