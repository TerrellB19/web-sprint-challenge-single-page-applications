import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

text-align: center;

.header {
    border: 1px solid black;
    padding: 100px;
}
.greet {
    margin-top: 80px;
}

`

const Confirmation = (props) => {

    return (
        <Wrapper>
            <div className="header"><h1>Congrats! Pizza is on its way!</h1></div>
            <div className="greet"><h5>Enjoy this dog with pizza</h5></div>
            <div><img src="https://media0.giphy.com/media/9fuvOqZ8tbZOU/200w.gif?cid=6c09b952d70saf7dj9xl7tfcokaccncblfemoub31g5uyv7x&rid=200w.gif&ct=g" alt="cute dog holding pizza"/></div>
        </Wrapper>
    )
}

export default Confirmation;