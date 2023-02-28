import { useState } from 'react'

function App() {
  const [proteins, setProteins] = useState([])
  const [food, setFood] = useState('')
  const [grams, setGrams] = useState(0)

  const addProtein = (event) => {
    event.preventDefault()
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
    </div>
  )
}

export default App
