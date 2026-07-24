import { useState, useEffect } from 'react'
import Log from './components/Log'
import ProteinInput from './components/ProteinInput'

function App() {
  const [entries, setEntries] = useState(() => {
    const log = localStorage.getItem('entries')
    return log ? JSON.parse(log) : []
  })

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [entries])

  function handleAddEntry(name, proteinAmount) {
    const newEntry = {
      id: crypto.randomUUID(),
      name,
      proteinAmount: parseInt(proteinAmount),
      timestamp: Date.now(),
    }

    setEntries((prev) => [...prev, newEntry])
  }

  return (
    <>
      <ProteinInput onAddEntry={handleAddEntry} />
      <Log entries={entries} />
    </>
  )
}

export default App
