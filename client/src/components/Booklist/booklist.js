import React from "react";
import { Container, Row, Col } from "../GridLayout";
import API from "../../utils/api";
import "./style.css";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};

// component to render each book
export function BookListItem(props) {

    // function to handle saving book to db when save button is clicked
    const handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };
