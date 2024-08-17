import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import backgroundImage from "./background.jpg"
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backgroundImage});; /* Dark background color */
    background-size: cover;
    background-position: center;
    color: #ffffff; /* Text color */
    background-repeat: ;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const AppContainer = styled.div`
  padding: 0;
`;

function App() {
  return (
    <Router>
    <GlobalStyle/>
      <AppContainer>
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </AppContainer>
    </Router>
  );
}

export default App;

