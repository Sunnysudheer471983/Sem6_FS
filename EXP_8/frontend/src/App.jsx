import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [polls, setPolls] = useState([])
  const [newPoll, setNewPoll] = useState({ question: '', option1: '', option2: '' })
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchUser()
    fetchPolls()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/user')
      setUser(response.data)
    } catch (error) {
      setUser(null)
    }
  }

  const fetchPolls = async () => {
    try {
      const response = await axios.get('/api/polls')
      setPolls(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const login = () => {
    window.location.href = '/oauth2/authorization/google'
  }

  const logout = () => {
    setUser(null)
    window.location.href = '/logout'
  }

  const createPoll = async () => {
    try {
      await axios.post('/api/polls', newPoll)
      setNewPoll({ question: '', option1: '', option2: '' })
      fetchPolls()
      setMessage('Poll created successfully')
    } catch (error) {
      setMessage('Error creating poll: ' + error.response?.data || error.message)
    }
  }

  const vote = async (id, option) => {
    try {
      await axios.post(`/api/polls/${id}/vote`, null, { params: { option } })
      fetchPolls()
      setMessage('Vote cast successfully')
    } catch (error) {
      setMessage('Error voting: ' + error.response?.data || error.message)
    }
  }

  return (
    <div className="App">
      <h1>LivePoll System</h1>
      {!user ? (
        <button onClick={login}>Login with Google</button>
      ) : (
        <div>
          <p>{user}</p>
          <button onClick={logout}>Logout</button>
          <h2>Create Poll (Admin Only)</h2>
          <input
            type="text"
            placeholder="Question"
            value={newPoll.question}
            onChange={(e) => setNewPoll({ ...newPoll, question: e.target.value })}
          />
          <input
            type="text"
            placeholder="Option 1"
            value={newPoll.option1}
            onChange={(e) => setNewPoll({ ...newPoll, option1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Option 2"
            value={newPoll.option2}
            onChange={(e) => setNewPoll({ ...newPoll, option2: e.target.value })}
          />
          <button onClick={createPoll}>Create Poll</button>
        </div>
      )}
      <h2>Polls</h2>
      {polls.map(poll => (
        <div key={poll.id}>
          <h3>{poll.question}</h3>
          <button onClick={() => vote(poll.id, 1)}>{poll.option1} ({poll.votes1})</button>
          <button onClick={() => vote(poll.id, 2)}>{poll.option2} ({poll.votes2})</button>
        </div>
      ))}
      <p>{message}</p>
    </div>
  )
}

export default App