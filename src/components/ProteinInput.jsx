import { useState } from 'react'

export default function ProteinInput({ onAddEntry }) {
  const [proteinName, setProteinName] = useState('')
  const [proteinAmount, setProteinAmount] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    onAddEntry(proteinName, proteinAmount)
    setProteinName('')
    setProteinAmount(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={proteinName}
        type="text"
        onChange={(e) => setProteinName(e.target.value)}
      />
      <input
        value={proteinAmount}
        type="number"
        onChange={(e) => setProteinAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
