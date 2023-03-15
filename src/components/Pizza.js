import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid black;
width: 75%;
margin: 0 12%;

img {
    width: 100%;
}
h3 {
    text-align: center;
}
h2 {
    margin: 3%;
}
.formHeader {
    background: LightGray;
    width: auto;
    display: flex;
    flex-direction: column;
    
}
.formHeader h2{
    margin: 0 15px;
    padding: 10px 0;
}
.formHeader p{
    margin: 0 15px;
    padding-bottom: 10px;
}
div {
    justify-content: center;
}
form {
    display: flex;
    flex-direction: column;
}
form div{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: 95vw;
}
.specialInstructions {
    width: 60vw;
    height: 30px;
    margin: 1% 7%;
}
.order {
    border-top: 1px solid black;
    width: auto;
}
.order input {
    margin: 3%;
    width: 10vw;
    height: 45px;
}
.order button{
    display: flex;
    flex-direction: row;
    margin: 3%;
    width: 53vw;
    padding: 15px;
    font-size: 18px;
}
.price{
    justify-content: flex-end;
}
.checkbox {
    width: 35vw;
}
.buttonlink{
    text-decoration: none;
}
`;

const Pizza = (props) => {
    const { form, disabled, change, errors, submit } = props

    const history = useHistory()
    const routeToconfirm = () => {
        history.push('/confirmation')
    }

const onSubmit = evt => {
    evt.preventDefault()
    submit()
    routeToconfirm()
    

}

    return (
        <Wrapper>
            <div>
                <h3>Build Your Own Pizza</h3>
                <div className="imgcontainer">
                    <img src="https://fox8.com/wp-content/uploads/sites/12/2022/02/GettyImages-1256339158.jpg?w=2560&h=1440&crop=1" alt="pizza img"/>
                </div>
                
            </div>
            <div>
            <h2>Build Your Own Pizza</h2>
            <form 
                id="pizza-form" 
                className="pizza-form" 
                onSubmit={onSubmit}
            >
                <label>
                <div className="formHeader">
                    <h2>Name:</h2>
                    <div>{errors.customer}</div>
                    
                </div>
                Name: <input
                        id="name-input"
                        type="text"
                        name="customer"
                        placeholder="enter name"
                        value={form.customer}
                        onChange={change}
                />
                </label>
                <label> 
                <div className="formHeader">
                    <h2>choice of size</h2>
                    <div>{errors.size}</div>
                    
                </div>

                    <select 
                    value={form.size} 
                    onChange={change} 
                    id="size-dropdown" 
                    name="size">
                        <option value=''>Select</option>
                        <option className="small" value='1'>Small</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Large</option>
                    </select>
                    </label>
                    <br />
                    <label>
                    <div className="formHeader">
                    <h2>Choice of Sauce</h2>
                    <div>{errors.sauce}</div>
                    
                    </div>
                        <input 
                            className="redsauce" 
                            onChange={change} 
                            type='radio' 
                            checked={form.sauce === 'original red'} 
                            name="sauce" 
                            value='original red'/>Original Red
                        <br />
                        <input 
                            onChange={change} 
                            type='radio' 
                            checked={form.sauce === 'garlic ranch'} 
                            name="sauce" 
                            value='garlic ranch'/>Garlic Ranch
                        <br />
                        <input 
                            onChange={change} 
                            type='radio' 
                            checked={form.sauce === 'bbq sauce'} 
                            name="sauce" 
                            value='bbq sauce'/>BBQ Sauce
                        <br />
                        <input 
                            onChange={change} 
                            type='radio' 
                            checked={form.sauce === 'spinach alfredo'} 
                            name="sauce" 
                            value='spinach alfredo'/>Spinach Alfredo
                    </label>
                    <br />
                    <label>
                    <div className="formHeader">
                        <h2>Add Toppings</h2>
                        <p>Choose up to 10</p>
                    </div>                  
                    <div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.pepperoni}  
                        onChange={change}
                        name="pepperoni" />Pepperoni
                    </div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.pineapple}  
                        onChange={change}
                        name="pineapple"/>Pineapple
                    </div> 
                    </div>
                    <div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.sausage}  
                        onChange={change}
                        name="sausage"/>Sausage
                    </div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.blackOlives}  
                        onChange={change}
                        name="blackOlives"/>Black Olives
                    </div>
                    </div>
                    <div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.canadianBacon}  
                        onChange={change}
                        name="canadianBacon"/>Canadian Bacon
                    </div> 
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.roastedGarlic}  
                        onChange={change}
                        name="roastedGarlic"/>Roasted Garlic
                    </div>
                    </div>
                    <div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.spicyItalianSausage}
                        onChange={change}  
                        name="spicyItalianSausage"/>Spicy Italian Sausage
                    </div> 
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.artichokeHearts}  
                        onChange={change}
                        name="artichokeHearts"/>Artichoke Hearts
                    </div>
                    </div>
                    <div>
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.greenPepper}  
                        onChange={change}
                        name="greenPepper"/>Green Pepper
                    </div>   
                    <div className="checkbox">
                    <input
                        type='checkbox'
                        checked={form.threeCheese}  
                        onChange={change}
                        name="threeCheese"/>Three Cheese
                    </div>
                    </div> 
                    </label>
                    <label>
                        <div className="formHeader">
                        <h2>Special Instructions</h2>
                        </div>
                        <div>
                            <input 
                            id="special-text" 
                            className="specialInstructions" 
                            type='text' 
                            name="specialInstructions" 
                            placeholder="Anything else you'd like to add?"
                            value={form.special}
                            onChange={change}
                            />
                        </div>
                        <div className="order">
                            <input type='number'/>
                                <button 
                                disabled={disabled} 
                                id="order-button">
                                <div>Add to Order</div>
                                <div 
                                className="price">
                                    $17.99
                                </div>
                            </button>
                        </div>
                    </label>
                
            </form>
            </div>    
        </Wrapper>
    )
}

export default Pizza;