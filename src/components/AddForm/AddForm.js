import React,{Component} from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

class AddForm extends Component{
    constructor(props){
    super(props);
    this.state={
        author:'',
        content:'',
        title:'',
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
      [event.target.name]: event.target.value,
    });
  }
 onSubmit(event){
event.preventDefault();
console.log(this.state.author);
console.log(this.state.content)
console.log(this.state.title);
    }
    
    
    render(){
    return (
        <form className="flex flex-col gap-4 mb-4" style={{width:"60%",marginLeft:"250px", marginTop:"50px"}} >
          <FormControl id="author" isRequired>
            <FormLabel>Author</FormLabel>
            <Input placeholder="Author"  
            name="author" 
            value={this.state.author} 
            onChange={this.handleChange}/>
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Input placeholder="content" 
            name="content"  
            value={this.state.content} 
            onChange={this.handleChange}/>
          </FormControl>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input placeholder="title"
             name="title" 
             value={this.state.title} 
             onChange={this.handleChange}/>
          </FormControl>
          <Button colorScheme="green" type="submit" className="max-w-xs" onClick={this.onSubmit}>
           Add Post
          </Button>
        </form>
      );
    }
}

export default AddForm;