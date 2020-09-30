import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Anecdotes = ({anecdotes,selected,votes}) => {
  return(
  <div>
    <h2>Anecdote of the day</h2>
    <table>
      <tbody>
        <tr><td>{anecdotes[selected]}</td></tr>
        <tr><td>Has {votes[selected]} votes</td></tr>
      </tbody>
    </table>
  </div>
  )
}


const MostVotes = ({maxNumVotes,maxNumAnecdote}) => {
  
 return (
    <div>
      <h2>Anecdote with most votes </h2>
      <div>
        <div>{maxNumAnecdote}</div>
        <div>Has {maxNumVotes} number of votes</div>
      </div>
    </div>
  ) 
}
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat));

 
  const copyVotes = [...votes]
  const castVotes = () => {
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }
  
  return (
    console.log(<div>{props.anecdotes[selected]}</div>),
    (
      <div> 
        <Anecdotes anecdotes = {props.anecdotes} selected = {selected} votes = {votes}/>
        <Button handleClick = {castVotes} text = "vote" />
        <Button handleClick = {() => setSelected(Math.floor(Math.random() * props.anecdotes.length))} text = "next anecdote" />
        <MostVotes maxNumVotes = {votes[votes.indexOf(Math.max(...votes))]}  maxNumAnecdote = {props.anecdotes[votes.indexOf(Math.max(...votes))]} />
      </div>
    )
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];
ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
