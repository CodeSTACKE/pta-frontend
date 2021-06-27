import ky from 'ky';
const loginUrl='http://localhost:3333/authenticate';
const signupUrl='http://localhost:3333/singup'
// const baseUrl='http://localhost:3333/resource';
const api={
    login(username,password){
        console.log(loginUrl);
        return ky.post(loginUrl,{json:username,password}).json();
    },
    create(payload){
        return ky.post(signupUrl,{json:payload }).json();
    }
}
export default api;