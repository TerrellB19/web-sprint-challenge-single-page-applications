import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from 'yup';
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/confirmation";
import Help from "./components/help";
import styled from "styled-components";

const schema = yup.object().shape({
  customer: yup
  .string()
  .required('customer is required')
  .min(3, 'customer name needs to be 6 chars min'),
  size: yup
  .string()
  .oneOf(['1', '2', '3'], 'you must choose a size'),
  sauce: yup
  .string()
  .oneOf(['original red', 'garlic ranch', 'bbq sauce', 'spinach alfredo'], 'without sauce your pizza is just bread'),
  pepperoni: yup.boolean(),
  pineapple: yup.boolean(),
  sausage: yup.boolean(),
  blackOlives: yup.boolean(),
  canadianBacon: yup.boolean(),
  roastedGarlic: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  artichokeHearts: yup.boolean(),
  greenPepper: yup.boolean(),
  threeCheese: yup.boolean(),
  special: yup.string()

})

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
margin-left: 4%;
margin-right: 4%;

h2 {
    color: red;
}
nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap; 
}
nav div {
    margin: 20px 0px
    
}
.home {
    text-decoration: none;
    border: 1px solid black;
    padding: 5px 25px;
    color: black;
}
.home:hover {
    background-color: black;
    color: white;
}
.help {
    text-decoration: none;
    padding: 5px 25px;
    border: 1px solid black;
    color: black;
}
.help:hover {
    background-color: black;
    color: white;
}
`;
const initialFormValues = {
  customer: '',
  size: '',
  sauce: '',
  pepperoni: false,
  pineapple: false,
  sausage: false,
  blackOlives: false,
  canadianBacon: false,
  roastedGarlic: false,
  spicyItalianSausage: false,
  artichokeHearts: false,
  greenPepper: false,
  threeCheese: false,
  special: '',
};
const initialFormErrors = {
  customer: "",
  size: "",
  sauce: ""
}


const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({ ...errors, [name]: '' }))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const change = e => {
    const { checked, value, name, type } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setFormValues({ ...formValues, [name]: valueToUse })
}
const submit = e => {
  e.preventDefault()
  const newOrder = {
    customer: formValues.customer,
    size: formValues.size,
    sauce: formValues.sauce,
    pepperoni: formValues.pepperoni,
    pineapple: formValues.pineapple,
    sausage: formValues.sausage,
    blackOlives: formValues.blackOlives,
    canadianBacon: formValues.canadianBacon,
    roastedGarlic: formValues.roastedGarlic,
    spicyItalianSausage: formValues.spicyItalianSausage,
    artichokeHearts: formValues.artichokeHearts,
    greenPepper: formValues.greenPepper,
    threeCheese: formValues.threeCheese,
    special: formValues.special
  }
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    setFormValues(initialFormValues)
  })
  .catch(err => console.error(err))
}
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <BrowserRouter>
    <Wrapper className="pizzatop">
            <div>
                <h2>LAMBDA EATS</h2>
            </div>
            <nav>
                <div><Link className="home" to='/'>Home</Link></div>
                <div><Link className="help" to='help'>Help</Link></div>    
            </nav>      
    </Wrapper>
    <Switch>
      <Route exact path="/" element={<Home/>}/>
      <Route path="pizza" element={<Form form={formValues} disabled={disabled} change={change} errors={errors} submit={submit}/>}/>
      <Route path="/confirmation" element={<Confirmation />}/>
      <Route path="help" element={<Help />}/>
    </Switch>
    </BrowserRouter>
  );
};
export default App;
