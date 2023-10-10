import { useEffect, useState } from 'react'
import personService from './services/personService'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleAddNameSubmit = (event) => {
    event.preventDefault()
    if (persons.find(({ name }) => name.toLowerCase() === newName.toLowerCase())) 
      return alert(`${newName} is already added to phonebook`)
    const newPerson = { name: newName, number: newNumber }
    personService.create(newPerson).then(() => {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    })
    
  }

  const handleNameFilterChange = (event) => 
    setNameFilter(event.target.value)

  const handleNameChange = (event) => 
    setNewName(event.target.value)

  const handleNumberChange = (event) => 
    setNewNumber(event.target.value)
  
  useEffect(() => {
    personService
      .getAll()
      .then((data) => {
        setPersons(data)
      })
  }, [])

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