import React from 'react';
import Task from './Task';
import './stack.css';

const tasks = [
  {
    title: "Aspirateur",
    note: 1,
    delay: "1 Mois"
  },
  {
    title: "Vaisselle",
    note: 2,
    delay: "aujourd'hui"
  },
  {
    title: "Tonte",
    note: 3,
    delay: "1 semaine"
  },
  {
    title: "Miam miam",
    note: 3.5,
    delay: "3 fois"
  },
  {
    title: "Télé",
    note: 4.2,
    delay: "1Jamais"
  }
]

const Stack = (props) => {

  return (
    <div className='stack'>
      <h3>{props.title}</h3>
      <div>
        {tasks.map(task => <Task title={task.title} note={task.note} delay={task.delay} key={task.title} />)}

      </div>
    </div>
  )
}

export default Stack