import React, { Component } from "react";
import API from "../utils/api";
import { Container, Row, Col } from "../components/GridLayout";
import { BookList, BookListItem } from "../components/Booklist";

class Save extends Component {

    // instantiate state for saved books
    state = {
        savedBooks: []
    };

    
    componentDidMount() {
        this.loadBooks();
    };

    
    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    export default Save;