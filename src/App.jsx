import { useEffect, useState } from 'react'

function App() {
  const [proteins, setProteins] = useState([])
  const [food, setFood] = useState('')
  const [grams, setGrams] = useState(0)

  useEffect(() => {
    const proteins = JSON.parse(localStorage.getItem('proteins'))
    if (proteins) {
      setProteins(proteins)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('proteins', JSON.stringify(proteins))
  }, [proteins])

  const addProtein = (event) => {
    event.preventDefault()

    const proteinObject = {
      name: food,
      grams: grams,
      id: proteins.length + 1,
    }

    setProteins(proteins.concat(proteinObject))
    setFood('')
    setGrams(0)
  }

  return (
    <div>
      <h1>Protein Tracker</h1>
      <form onSubmit={addProtein}>
        Food: <input value={food} onChange={(e) => setFood(e.target.value)} />
        <br />
        Protein (grams):{' '}
        <input type="number" value={grams} onChange={(e) => setGrams(e.target.value)} />
        <br />
        <button>Add</button>
      </form>
      <ul>
        {proteins.map((protein) => (
          <li key={protein.id}>
            {protein.name} - {protein.grams} grams
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
