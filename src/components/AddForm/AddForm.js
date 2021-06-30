import React, { Component } from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { AuthenticationService } from 'components/Services';


class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
        author: "",
      content: "",
      title: "",
      validMsg: "",
    };
  
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();  
        
      if (this.state.author === "" &&
      this.state.content === "" &&
      this.state.title === ""
    ) {
      this.setState({ ValidMsg: true });
    }
   
    else {
            AuthenticationService.addResources(
                this.state.author,this.state.content,
      this.state.title 
              ).then((response) => {
                console.log(response);
                this.props.history.push(`/resource`);
              });
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
            onClick={this.onSubmit}
          >
            Add Post
          </Button>
        </form>
      </div>
    );
  }
}

export default AddForm;
