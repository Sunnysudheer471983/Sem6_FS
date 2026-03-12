import { useState } from 'react'
import './App.css'

function useForm(initialState) {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => setValues(initialState)

  return { values, handleChange, reset }
}

function App() {
  const [tasks, setTasks] = useState([])
  
  const { values, handleChange, reset } = useForm({
    title: '',
    priority: 'Low'
  })

  const handleAdd = (e) => {
    e.preventDefault()
    if (!values.title.trim()){
    alert("Enter Task Name")
    return
    }    
    setTasks([...tasks, {...values,title: values.title.trim()}])
    reset()
  }

  return (
    <div className="task-container">
      <h2>Task Tracker</h2>
      
      <form onSubmit={handleAdd}>
        <input 
          name="title"
          placeholder="Task name..."
          value={values.title}
          onChange={handleChange}
        />
        
        <select name="priority" value={values.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
        <button type="submit">Add Task</button>
      </form>

      <div className="list">
        {tasks.map((task, i) => (
          <div key={i} className="item">
            <span>{task.title}</span>
            <small>{task.priority}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App