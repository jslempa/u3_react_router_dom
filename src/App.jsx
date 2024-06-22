import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'

function App() {

  const [mailboxes, setMailboxes] = useState([{
    id: 1,
    boxSize: 'Small',
    boxHolder: 'Alex',
  }])

  const [newBox, setNewBox] = useState({
    id: '',
    boxSize: '',
    boxHolder: ''
  })

  const addBox = (event) => {
    event.preventDefault()
    const currentBoxes = mailboxes
    const createdBox = {
      ...newBox, id: parseInt(mailboxes.length + 1),
      boxSize: newBox.boxSize, boxHolder: newBox.boxHolder
    }
    currentBoxes.push(createdBox)
    setMailboxes(currentBoxes)
    setNewBox({id: '', boxSize: '', boxHolder: ''})
  }

  const handleChange = (event) => {
    setNewBox({...newBox, [event.target.id]: event.target.value})
  }

  return (
   <div className='App'>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<main><h1>Post Office</h1></main>}/>
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
          <Route path='/new-mailbox' element={<MailboxForm newBox={newBox}
                 handleChange={handleChange}
                 addBox={addBox}/>}/>
          <Route path='/mailboxes/:id' element={<MailboxDetails mailboxes={mailboxes}/>}/>
        </Routes>
      </main>
   </div>
  )
}

export default App
