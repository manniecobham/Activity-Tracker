import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./Components/Header";
import Tasks from './Components/Tasks';
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] =useState([]);

  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}
// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks',{
  method : 'POST',
  headers : {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(task)})

  const data = await res.json()
  setTasks([...tasks, data])
  //const id = Math.floor(Math.random() * 10000) + 1;
  //const newTask = {id, ...task}
  //setTasks([...tasks,newTask])
}
//Delete Task
const deleteTask =/*async*/ (id) => {
  //Delete from server
  // await fetch(`http://localhost:5000/task/${id}`,{
  // method: 'DELETE',})
  setTasks(tasks.filter((task) => task.id !==id))
}
//For reminder
const reminderSet = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle,
    reminder: !taskToToggle.reminder
  }
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })
  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder}: task))
}
  return (
    <Router>
    <div className="container">
      <Header showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
      
      <Route path='/' exact render={(props) => (
        <>
        { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderSet} />) : (
      <>
      <h3>No Activity to show</h3><br /><p style={{color:'red', backgroundColor:'black',borderRadius: '5px', width: '40%'}}>Tap the "Add" button above to add</p>
      </>)}
        </>
      )} />
      <Route path="/about" component={About}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
