import React, { Component } from "react";
import Jumbotrom from '../components/Jumbotron';
import { Input, FormBtn } from '../components/Form';
import { List , ListItem } from '../components/List';


class Main extends Component {
    state = {
        text: "",
        giphs: []    
    }

    // componentDidMount() {
    //     this.loadGiphy();
    // }

    // loadGiphy = () => {
    //         let url =  "https://api.giphy.com/v1/gifs/search?q= "+
    //         `${this.state.text}` + "&api_key=brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9&limit=3";
    //         fetch(url).then(response => response.json())
    //         .then((responseData) => {
    //             this.setState({
    //                 giphs: responseData.data
    //             });
    //         });
        
    //     console.log(this.state.giphs);
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
            let url =  "https://api.giphy.com/v1/gifs/search?q= "+
            `${this.state.text}` + "&api_key=brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9&limit=3";
            fetch(url).then(response => response.json())
            .then((responseData) => {
                this.setState({
                    giphs: responseData.data
                });
            });    
        console.log(this.state.giphs);
    };

    render() {
        return (
            <div className="App">
                <Jumbotrom>
                    <h1>React Giphy </h1>  
                </Jumbotrom>               
                <Input
                    name = "text"
                    placeholder="search giphy"
                    value = {this.state.text}
                    onChange={this.handleInputChange}
                    />
                <FormBtn onClick={this.handleFormSubmit}>
                    Submit 
                </FormBtn>
                <List key="index">
                    {this.state.giphs.map(giph => (
                        <ListItem key={giph._id}
                            data={this.state.giphs}
                            >
                                <img src = {this.state.giphs[0].images.fixed_height.url}/>     
                                <img src = {this.state.giphs[1].images.fixed_height.url}/>
                                <img src = {this.state.giphs[2].images.fixed_height.url}/>                                          
                        </ListItem>
                    ))}; 
                </List>               
            </div>
        );
    }
}

export default Main;