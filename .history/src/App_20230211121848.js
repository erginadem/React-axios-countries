import HelloWorld from "./components/01-hello-world/hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Style4 from "./components/04-styles/style4";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props-1/Greetings";
import Clock2 from "./components/08-clock2/clock2";
import Products from "./components/07-props-2/Products";
import Galery from "./components/09-image/Galery";
import Image from "./components/09-image/Image";
import ProfileCard from "./components/10-profile-card/ProfileCard";
import BootstrapDinamik from "./components/11-bootstrap/BootstrapDinamik";
import BootstrapStatic from "./components/11-bootstrap/BootstrapStatic";
import Icon from "./components/12-icons/Icon";
import Events from "./components/13-events/Events";
import Shop from "./components/14-products/Shop";
import RatingStars from "./components/15-rating-stars/RatingStars";
import StateLess from "./components/16-useState/StateLess";
import State from "./components/16-useState/State";
import Counter from "./components/17-counter/Counter";
import Birthday from "./components/18-birthday/Birthday";
import Useeffect from "./components/19-useeffect/Useeffect1";
import Clock3 from "./components/20-clock3/Clock3";
import Useeffect1 from "./components/19-useeffect/Useeffect1";
import Useeffect2 from "./components/19-useeffect/Useeffect2";
import CountryFilter from "./components/21-country-filter/CountryFilter";
import UseRef from "./components/22-useref/Useref";
import Scroll from "./components/22-useref/Scroll";
import ClassType from "./components/23-classtype/ClassType";
import ClassComp from "./components/23-classtype/ClassType";
import UserCards from "./components/24-fetch-users/UserCards";
import Countries from "./components/25-axios-countries/Countries";
import ParentComp from "./components/26-child-to-parent-props/ParentComp";
import Form1 from "./components/27-forms/Form1";
import Form2 from "./components/27-forms/Form2";
import Form3 from "./components/27-forms/Form3";
import Form4 from "./components/27-forms/Form4";
import Form5 from "./components/27-forms/Form5";
import Form6 from "./components/27-forms/Form6";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/00-home/header/Header";
import Menu from "./components/00-home/menu/Menu";
import { Col, Container, Row } from "react-bootstrap";
import HelloReact from "./components/02-hello-react/hello-react";
import StoreContext from "./store";
import { useState, useEffect } from "react";
import Exchange from "./components/28-contex-api/Exchange";
import axios from "axios";
import TodoApp from "./components/29-todos-app-api/todo-app";
import AxiosCountries from "./components/030-axios-countries/axios-countries";
import FormikYup from "./components/031-formik-yup/formik-yup";

const App = () => {
  const [counter, setCounter] = useState(10);
  const [currencies, setCurrencies] = useState({});

  const loadData = async () => {
    try {
      const resp = await axios.get(
        "https://api.frankfurter.app/latest?from=TRY"
      );
      setCurrencies(resp.data.rates);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <StoreContext.Provider
      value={{ counter, setCounter, currencies, setCurrencies }}
    >
      <BrowserRouter>
        <Header />
        <Container fluid className="p-5">
          <Row>
            <Col sm={2}>
              <Menu />
            </Col>
            <Col sm={10} className="ps-5">
              <Routes>
                <Route path="/hello-world" element={<HelloWorld />} />
                <Route path="/hello-react" element={<HelloReact />} />
                <Route path="/jsx1" element={<Jsx1 />} />
                <Route path="/jsx2" element={<Jsx2 />} />
                <Route path="/jsx3" element={<Jsx3 />} />
                <Route path="/jsx4" element={<Jsx4 />} />
                <Route path="/jsx5" element={<Jsx5 />} />
                <Route path="/Exchange" element={<Exchange />} />
                <Route path="/TodoApp" element={<TodoApp />} />
                <Route path="/AxiosCountries" element={<AxiosCountries />} />
                <Route path="/FormikYup" element={<FormikYup />} />
                <Route path="/Form6" element={<Form6 />} />
              </Routes>
            </Col>
          </Row>
        </Container>

        {/* 

      <Jsx6 />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />
      <Clock1 />
      <Greetings />
      <Products />
      <Clock2 textColor="red" bgColor="yellow" />
      <Image />
      <Galery />
      <ProfileCard
        avatar="profile.jpg"
        name="Hilary Johnson"
        location="New York, USA"
        shot="3"
        followers="3"
        following="10"
      />
        <BootstrapStatic /> 
        <BootstrapDinamik />
        <Icon />
        <Events /> 
        <Shop />
        <RatingStars /> 
        <StateLess /> 
        <State /> 
        <Counter /> 
        <Birthday />
        <Clock3 />
         <Useeffect1 />
         <Useeffect2 /> 
         <CountryFilter />
         <UseRef /> 
        <Scroll />
        <ClassComp /> 
         <UserCards />
         <Countries />
       <ParentComp />
       <Form1 />
        <Form2 />
        <Form3 />
         <Form4 />
         <Form5 />
           <Form6 />
*/}
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
