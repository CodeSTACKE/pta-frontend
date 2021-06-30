import{Component} from 'react';
import { AuthenticationService } from 'components/Services';
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

class EditForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.location.state.id,
          author: "",
        content: "",
        title: "",
        validMsg: "",
      };
    
      this.onSubmitHandle = this.onSubmitHandle.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
    onSubmitHandle(event){
        event.preventDefault();  
        if (this.state.author === "" &&
        this.state.content === "" &&
        this.state.title === ""
      ) {
        this.setState({ ValidMsg: true });
      }
        else
        {
            console.log(this.state.id)
            AuthenticationService.updateResources(this.state.id,this.state.author,this.state.content,
            this.state.title )
        .then(
            ()=>{this.props.history.push('/resource')}
        ).catch=e=>{
            console.log(e)
        }
    }
    }
    render() {
        return (
          <div>
            {this.state.ValidMsg && (
              <div
                className="alert alert-warning"
                style={{ color: "red", textAlign: "center", fontSize: "20px" }}
              >
                Please Enter the values{" "}
              </div>
            )}
            <form
              className="flex flex-col gap-4 mb-4"
              style={{ width: "60%", marginLeft: "250px", marginTop: "50px" }}
            >
              <FormControl id="author" isRequired>
                <FormLabel>Author</FormLabel>
                <Input
                  placeholder="Author"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl id="content" isRequired>
                <FormLabel>Content</FormLabel>
                <Input
                  placeholder="content"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </FormControl>
              <Button
                colorScheme="green"
                type="submit"
                className="max-w-xs"
                onClick={this.onSubmitHandle}
              >
              Update Post
              </Button>
            </form>
          </div>
        );
      }

}
export default EditForm;