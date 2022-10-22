import './App.css';
import React from 'react'
import {useState} from "react"
import ReactDOM from 'react-dom'



const Text = () => <h1>{"HOLA"}</h1>


const App = (props) => {
  
  var words = ["Definiteness of purpose is the starting point of all achievement","You become what you believe"]
  var authors = ["-W.Clement Stone","-Oprah Winfrey"]
  var colors = ["#7DCEA0","#EC7063","#A2D9CE"]
  var randomNumber = Math.floor(Math.random() * words.length)
  const [word,setWord] = useState(words[randomNumber])
  const [author,setAuthor] = useState(authors[randomNumber])
  const [color,setColor] = useState(colors[randomNumber])
  var colores = color
  const randomWord = () => {
    var randomNumber = Math.floor(Math.random() * words.length)
    setWord(words[randomNumber])
    setAuthor(authors[randomNumber])
    setColor(colors[randomNumber])
    console.log(randomNumber)
  } 
  return (
    <div id="quote-box" class="container" style={({backgroundColor:color})}>
      <div class="row mt-5 p-5">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 bg-primary">   
        <div class="info"> 
         <h1 id="text" class="p-4">{word}</h1>
         <p id="author">{author}</p>
        </div>
        <div class="contenedor_button">
         <div class="redes">
          <a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fa-brands fa-twitter fa-1x"></i></a>
          <a><i class="fa-brands fa-tumblr fa-1x"></i></a>
          </div>
          <button id="new-quote" onClick={randomWord}>New quote</button>
        </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
    )
}


export default App;
