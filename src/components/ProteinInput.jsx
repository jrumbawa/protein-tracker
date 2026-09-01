import { useState } from 'react'

export default function ProteinInput({ onAddEntry }) {
  const [proteinName, setProteinName] = useState('')
  const [proteinAmount, setProteinAmount] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (proteinName.trim().length > 0 && Number(proteinAmount) >= 1) {
      onAddEntry(proteinName, proteinAmount)
      setProteinName('')
      setProteinAmount('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-3 gap-2"
    >
      <input
        className="col-span-2 h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800"
        value={proteinName}
        type="text"
        onChange={(e) => setProteinName(e.target.value)}
        placeholder="Food name"
      />
      <input
        className="h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800"
        value={proteinAmount}
        type="number"
        min="1"
        onChange={(e) => setProteinAmount(e.target.value)}
        placeholder="Grams"
      />
      <button
        className="col-span-3 h-10 bg-emerald-600 text-white rounded-lg text-sm font-semibold"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}
