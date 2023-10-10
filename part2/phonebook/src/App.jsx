import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [nameFilter, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleAddNameSubmit = (event) => {
    event.preventDefault()
    if (persons.find(({ name }) => name.toLowerCase() === newName.toLowerCase())) 
      return alert(`${newName} is already added to phonebook`)
    const newPerson = { name: newName, number: newNumber }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameFilterChange = (event) => 
    setNameFilter(event.target.value)

  const handleNameChange = (event) => 
    setNewName(event.target.value)

  const handleNumberChange = (event) => 
    setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} handleFilterChange={handleNameFilterChange} />
      <h2>Add a new</h2>
      <PersonForm 
        handleSubmit={handleAddNameSubmit}
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App