import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setShow] = useState(false);

    // handles closing of modal
    const handleClose = () => setShow(false);
    // handles showing of modal
    const handleShow = () => setShow(true);

    // saves book to db and shows modal
    const click = () => {
        handleShow()
        onClick()
    };