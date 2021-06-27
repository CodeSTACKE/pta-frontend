import axios from'axios';

const TopicServices ={
   
    reteriveAllResources(){
       return axios.get("http://localhost:3333/resource")       
        }
    }

export default TopicServices;