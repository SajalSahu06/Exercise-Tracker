import React, { Component } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import Exercise from "./Exercise.component";
import "./ExercisesList.css";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        this.setState({ exercises: res.data });
      })
      .catch((err) => window.alert(err));
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return (
        <CSSTransition
          key={currentExercise._id}
          timeout={500}
          classNames="fade"
        >
          <tr>
            <td>{currentExercise.username}</td>
            <td>{currentExercise.description}</td>
            <td>{currentExercise.duration}</td>
            <td>{currentExercise.date.substring(0, 10)}</td>
            <td>
              <Link to={"/edit/" + currentExercise._id} className="btn btn-primary">
                Edit
              </Link>{" "}
              <button
                className="btn btn-danger"
                onClick={() => this.deleteExercise(currentExercise._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </CSSTransition>
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="animated-heading">Logged Exercises</h3>
        <table className="table">
          <thead className="">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <TransitionGroup component="tbody">
            {this.exerciseList()}
          </TransitionGroup>
        </table>
      </div>
    );
  }
}
