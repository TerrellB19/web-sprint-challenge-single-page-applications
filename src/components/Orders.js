import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
text-align: center;


    h2 {
        text-align: center;
    }
.order-info {
    margin-left: 1rem;
}
`

    const constants = ['pepperoni', 'pineapple', 'sausage', 'blackOlives', 'canadianBacon', 'roastedGarlic', 'spicyItalianSausage', 'artichokeHearts', 'greenPepper', 'threeCheese']

    const Orders = ({info}) => {
        return(
            <Wrapper key={info.id}>
                <h2>Order ID: {info.id}</h2>
                <div className="order-info">
                    <div><p>Customer Name: {info.customer}</p></div>
                    <div><p>Size: {info.size}</p></div>
                    <div><p>Sauce: {info.sauce}</p></div>
                    <div><p>Special Instructions:</p></div>
                    <div><p>🖊️{info.special}🖊️</p></div>
                    <div>
                    <p>Toppings:</p>
                    <div>
                        {constants.map((topping) => {
                            if(info[topping] === true){
                                return(
                                 <p>🍕 {topping}</p>
                             )
                            }
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
        )
    }
    export default Orders;