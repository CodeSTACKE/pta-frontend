import React, { Component } from "react";
import "components/Wrapper/style.css";
import { AuthenticationService } from "components/Services";
import { Box, Heading, Button } from "@chakra-ui/react";

import { withRouter} from "react-router";

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      author: "",
      content: "",
      title: "",
      resource: [],
      onOpen: false,
      onClose: true,
      getResource: [],
    };
    this.refreshAllResources = this.refreshAllResources.bind(this);
    this.ViewResourceClicked = this.ViewResourceClicked.bind(this);
    this.updateResourceClicked = this.updateResourceClicked.bind(this);
    this.AddResourceClicked = this.AddResourceClicked.bind(this);
   
  }

  componentDidMount() {
    this.refreshAllResources();
  }

  refreshAllResources() {
    let username = AuthenticationService.getLoggedInUserName();
    console.log(username);
    AuthenticationService.reteriveAllResources(username).then((response) => {
      console.log(response.data);
      this.setState({ resource: response.data });
    }).catch = (e) => console.log(e);
  }

  AddResourceClicked() {
    this.props.history.push("/AddForm");
  }

  ViewResourceClicked(id) {
    console.log(id);
    this.setState({
        id:id
    },()=>
    this.props.history.push({
        pathname:'/ViewResource',
        state:{viewid:this.state.id}
  }))
  }

  updateResourceClicked(id) {
     console.log(id);
    this.setState({
        id:id
    },()=>
      this.props.history.push({
          pathname:'/EditForm',
          state:{id:this.state.id}
    }))
       
    //   );
    // }).catch = (e) => console.log(e);
  }

 
  render() {
    return (
      <div>
        <Box bg="tomato" w="100%" p={4} color="white">
          <Heading fontSize="20px" textAlign="center">
            List of Posts{" "}
          </Heading>
        </Box>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Author</th>
              <th>Content</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.resource.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.id}</td>
                <td>{resource.author}</td>
                <td>{resource.content}</td>
                <td>{resource.title}</td>
                <td>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    className="max-w-xl"
                    onClick={() => this.ViewResourceClicked(resource.id)}
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button
                    colorScheme="teal"
                    type="submit"
                    className="max-w-xl"
                    onClick={()=>this.updateResourceClicked(resource.id)} >              
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Button
            colorScheme="teal"
            type="submit"
            className="max-w-xl"
            onClick={() => this.AddResourceClicked()}
          >
            Add
          </Button>
        </div>
        
      </div>
    );
  }
}


export default withRouter(Resource);
