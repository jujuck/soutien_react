import React from 'react';
import './task.css'

const Task = ({ title, note, delay }) => {
  //console.log(props)
  return (
    <div className="task">
      <h4>{title}{/** Titre en props */}</h4>
      <p>Importance: {note}{/* Note en props*/}/5</p>
      <p>Delai: {delay}{/** Délai en props */}</p>
    </div>
  )
}

export default Task