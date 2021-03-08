import React from "react";
import { Container, Row, Col } from "../GridLayout/grid";
import API from "../../utils/api";

import SaveBtn from "../Save";
import DeleteBtn from "../Deletebtn";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem(props) {
  const handleSaveBtn = (event) => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <li className="list-group-item" key={props.id}>
      <Container>
        <Row>
          <Col size="xs-8 sm-10">
            <h3>{props.title}</h3>
            <p>Written By {[props.authors].flat().join(", ")}</p>
            <p>{props.description}</p>
            <a
              rel="noreferrer noopener"
              className="btn btn-lg btn-primary input-lg view"
              target="_blank"
              href={props.link}
            >
              View
            </a>
            {/* if there is an object id render the SaveBtn component else render the DeleteBtn component */}
            {!props.id ? (
              <SaveBtn
                type="success"
                className="input-lg"
                onClick={handleSaveBtn}
              >
                Save
              </SaveBtn>
            ) : (
              <DeleteBtn type="danger" className="input-lg">
                Delete
              </DeleteBtn>
            )}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
