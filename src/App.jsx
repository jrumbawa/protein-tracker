import { useState, useEffect } from 'react'
import Log from './components/Log'
import ProteinInput from './components/ProteinInput'
import ProgressBar from './components/ProgressBar'

function App() {
  const [entries, setEntries] = useState(() => {
    const log = localStorage.getItem('entries')
    return log ? JSON.parse(log) : []
  })
  const [proteinGoal, setProteinGoal] = useState(() => {
    const proteinGoal = localStorage.getItem('proteinGoal')
    return proteinGoal ? JSON.parse(proteinGoal) : 150
  })

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [entries])

  useEffect(() => {
    localStorage.setItem('proteinGoal', JSON.stringify(proteinGoal))
  }, [proteinGoal])

  function handleAddEntry(name, proteinAmount) {
    const newEntry = {
      id: crypto.randomUUID(),
      name,
      proteinAmount: parseInt(proteinAmount),
      timestamp: Date.now(),
    }

    setEntries((prev) => [...prev, newEntry])
  }

  const totalProtein = entries.reduce(
    (total, entry) => total + entry.proteinAmount,
    0,
  )

  return (
    <div className="max-w-sm mx-auto text-center space-y-4">
      <div>
        <p className="text-sm text-gray-500">Today's protein</p>
        <p className="text-6xl font-bold text-emerald-600">
          {totalProtein}
          <span className="text-lg text-gray-500">g</span>
        </p>
      </div>
      <ProgressBar totalProtein={totalProtein} proteinGoal={proteinGoal} />
      <ProteinInput onAddEntry={handleAddEntry} />
      <Log entries={entries} />
    </div>
  )
}

export default App
