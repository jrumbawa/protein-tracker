import { useState, useEffect } from 'react'
import Log from './components/Log'
import ProteinInput from './components/ProteinInput'
import ProgressBar from './components/ProgressBar'
import SettingsModal from './components/SettingsModal'
import SettingsIcon from './components/SettingsIcon'
import FoodLogIcon from './components/FoodLogIcon'
import ClearLogModal from './components/ClearLogModal'
import QuickAddModal from './components/QuickAddModal'

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [showClearLogModal, setShowClearLogModal] = useState(false)
  const [showFoodLog, setShowFoodLog] = useState(false)
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

  useEffect(() => {
    if (showClearLogModal || showFoodLog || showSettings) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'auto'
      }
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showClearLogModal, showFoodLog, showSettings])

  function handleAddEntry(name, proteinAmount) {
    const newEntry = {
      id: crypto.randomUUID(),
      name,
      proteinAmount: parseInt(proteinAmount),
      timestamp: Date.now(),
    }

    setEntries((prev) => [...prev, newEntry])
  }

  function handleDeleteEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id))
  }

  function handleUpdateEntry(id, name, proteinAmount) {
    const trimmedName = name.trim()
    const parsedProteinAmount = Number(proteinAmount)

    if (!trimmedName || parsedProteinAmount <= 0) return false

    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id
          ? { ...entry, name: trimmedName, proteinAmount: parsedProteinAmount }
          : entry,
      ),
    )
    return true
  }

  const totalProtein = entries.reduce(
    (total, entry) => total + entry.proteinAmount,
    0,
  )

  const date = new Date().toLocaleDateString([], {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-sm mx-auto text-center space-y-4">
      <div className="flex py-4 gap-3">
        <p className="text-gray-400">{date}</p>
        <FoodLogIcon setShowFoodLog={setShowFoodLog} />
        <SettingsIcon setShowSettings={setShowSettings} />
      </div>
      <div>
        <p className="text-sm text-gray-500">Today's protein</p>
        <p className="text-6xl font-bold text-emerald-600">
          {totalProtein}
          <span className="text-lg text-gray-500">g</span>
        </p>
      </div>
      <ProgressBar totalProtein={totalProtein} proteinGoal={proteinGoal} />
      <ProteinInput onAddEntry={handleAddEntry} />
      <Log
        entries={entries}
        onDeleteEntry={handleDeleteEntry}
        onUpdateEntry={handleUpdateEntry}
      />
      {entries.length > 0 && (
        <button
          className="bg-red-500 text-white hover:bg-red-700 w-full h-10 rounded-lg text-sm font-semibold"
          onClick={() => setShowClearLogModal(true)}
        >
          Clear Log
        </button>
      )}
      {showClearLogModal && (
        <ClearLogModal
          setShowClearLogModal={setShowClearLogModal}
          setEntries={setEntries}
        />
      )}
      {showSettings && (
        <SettingsModal
          proteinGoal={proteinGoal}
          setProteinGoal={setProteinGoal}
          setShowSettings={setShowSettings}
        />
      )}
      {showFoodLog && (
        <QuickAddModal
          handleAddEntry={handleAddEntry}
          setShowFoodLog={setShowFoodLog}
        />
      )}
    </div>
  )
}

export default App
