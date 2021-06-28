import React, { Component } from "react";
import {Box, Heading, Divider } from "@chakra-ui/react";
import { AuthenticationService } from "components/Services";



class ViewResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.viewid,
        author: "",
      content: "",
      title: "",
      comment:"",
      Allresource:[],
      isLoading:true,
      
    }
    this.loadapi=this.loadapi.bind(this);

}
    componentDidMount(){
        this.setState({isLoading:false})
        this.loadapi();
    }
    loadapi(){
    console.log(this.state.id)
        AuthenticationService.getResources(this.state.id)
        .then((response)=> {
            this.setState({ Allresource: response.data })
        },()=>console.log(this.state.Allresource))
    }
     render(){
        return(
          
            <div>
                <Box bg="tomato" w="100%" p={4} color="white">
                <Heading fontSize="20px" textAlign="center">
                    Post{" "}
                </Heading>
                </Box>
                   
                
                    {/* <Box bg="tomato" w="100%" p={4} color="white" marginTop="-150px">
                    <Heading fontSize="20px" textAlign="center">List of Topics</Heading>
                    </Box> */}
                    <Divider orientation="horizontal" />
                    <Box bg="gray.500" w="100%" p={4} color="white">
                    {this.state.Allresource.map((res) => (
                    <p>
                        key={res.id}
                        {res.author}
                        {res.itle}
                        {res.content}
                         {res.comment}
                         
                    </p>
                     
                  
                    ))
                   }
                  
                       </Box>
                </div>  
            
        )
}
}

export default ViewResource;