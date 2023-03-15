import React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom'



const Center = styled.div`
text-align: center;



.pizzabody {
    background-image: url('https://cdn.shopify.com/s/files/1/0425/2699/8690/files/https__45.media_.tumblr.com_a9372f448385c2f68db170faac75c137_tumblr_mxdq33aPvd1r8jkpuo1_500.gif');
    background-repeat: no-repeat;
    background-position: center;
    padding: 100px;
}
#order-pizza {
    border: 1px solid black;
    padding: 5px 20px;
    text-decoration: none;
    color: black;
    background: white;
    

}
#order-pizza:hover {
    background-color: black;
    color: white;
}
`;


const Home = () => {
    const history = useHistory()
    const handleClick = e => {
      console.log(e.currentTarget.id);
      history.push("/pizza")
    };

    return (
        <Center className="home">    
        <div className="pizzabody">
                <h2> Your favorite food, delivered While coding</h2> 
                <Link to='/pizza'>
                <button id="order-pizza"
                onClick={handleClick}>Pizza?</button> 
                 </Link>                 
        </div>
        <div>
            <h3>We Gaurentee Delivery Within 45 Minutes!!</h3>
        </div>
        </Center>
        
    )
}

export default Home;