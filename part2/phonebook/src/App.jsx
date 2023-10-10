import { useState } from 'react'

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
  }

  const handleNameFilterChange = (event) => 
    setNameFilter(event.target.value)

  const handleNameChange = (event) => 
    setNewName(event.target.value)

  const handleNumberChange = (event) => 
    setNewNumber(event.target.value)

  const lowerCaseNameFilter = nameFilter.toLowerCase()
  const personsToShow = nameFilter 
    ? persons.filter(({ name }) => name.toLowerCase().includes(lowerCaseNameFilter))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={nameFilter} onChange={handleNameFilterChange} /></p>
      <h2>Add a new</h2>
      <form onSubmit={handleAddNameSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(({ name, number }) => <p key={name}>{name} {number}</p>)}
    </div>
  )
}

export default App