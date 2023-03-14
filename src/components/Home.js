import React from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom'



const Center = styled.div`
text-align: center;
border: 1px solid black;
padding: 100px;


.pizza {
    border: 1px solid black;
    padding: 5px 20px;
    text-decoration: none;
    color: black;
    

}
.pizza:hover {
    background-color: black;
    color: white;
}
`;

const Delivery = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;

h3 {
    margin: 2% 4%;
}



`;
const Others = styled.div`
display: flex;
flex-direction: row;
justify-content: center;


div {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    margin-right: 3%;
}
img {
    height: 15vh;
}
h5 {
    margin: 6px 5px;
    text-align: center;
}
p {
    font-size: 12px;
    margin: 0;
    text-align: center;
}

`;
const TimeFee = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border: 2px solid black;
  
    .time {
        width: 30%;
        padding: 0 30%;
    }
    .fee {
        width: 50%;
        padding: 0 20%;
    }

`;

const Home = () => {
    const history = useHistory()
    const handleClick = evt => {
      console.log(evt.currentTarget.id);
      history.push('/pizza')
    };

    return (
        <div className="home">    
        <Center className="pizzabody">
                <h1> Your favorite food, delivered While coding</h1> 
                <nav><Link id="order-pizza" className="pizza" to='/pizza' onClick={handleClick}>Pizza?</Link> </nav> 
                 
        </Center>
        <Delivery>
        <h3>Food Delivery in Gotham City</h3>
        
       
        <Others>
            <div>
                <img src="https://www.foodandwine.com/thmb/8N5jLutuTK4TDzpDkhMfdaHLZxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" alt="mcdonalds img"/>
                <h5>McDonald's</h5>
                <div><p>$  -  American  -  Fast Food  -  Burgers</p></div>
                
                <TimeFee>
                    <div><h5>Delivery Time: </h5></div>
                    <div className="time"><p>20-30 Min</p></div>
                    <div><h5>Delivery Fee: </h5></div>
                    <div className="fee"><p>$5.99</p></div>
                </TimeFee>
            </div>

             <div>
            <img src="https://static-prod.adweek.com/wp-content/uploads/2021/09/sweetgreen-went-sour-2021.jpg" alt="sweetgreen img"/>
            <h5>sweetgreen</h5>
            <div><p>$ - Healthy - Salads</p></div>
            
            <TimeFee>
                <div><h5>Delivery Time: </h5></div>
                <div className="time"><p>30-45 Min</p></div>
                <div><h5>Delivery Fee: </h5></div>
                <div className="fee"><p>$4.99</p></div>
            </TimeFee>
            </div>
            <div>
                <img src="https://www.foodbusinessnews.net/ext/resources/2022/08/04/StarbucksColdDrinksLead.jpg?height=667&t=1659614998&width=1080" alt="starbucks img"/>
                <h5>Starbucks</h5>
                <div><p>$  -  Cafe  -  Cofee & Tea  -  Breakfast </p></div>
                
                <TimeFee>
                    <div><h5>Delivery Time: </h5></div>
                    <div className="time"><p>10-20 Min</p></div>
                    <div><h5>Delivery Fee: </h5></div>
                    <div className="fee"><p>$3.99</p></div>
                </TimeFee>
            </div>
        </Others>
       
        </Delivery>
        </div>
        
    )
}

export default Home;