const Persons = ({ persons, nameFilter }) => {
  const lowerCaseNameFilter = nameFilter.toLowerCase()
  const personsToShow = nameFilter 
    ? persons.filter(({ name }) => name.toLowerCase().includes(lowerCaseNameFilter))
    : persons
  return personsToShow.map(({ name, number }) => <p key={name}>{name} {number}</p>)
}

export default Persons