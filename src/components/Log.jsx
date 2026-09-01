import { useState } from 'react'
import { Check, Pencil, Trash2, X } from 'lucide-react'

export default function Log({ entries, onDeleteEntry, onUpdateEntry }) {
  const [editingId, setEditingId] = useState(null)
  const [editedName, setEditedName] = useState('')
  const [editedProteinAmount, setEditedProteinAmount] = useState('')

  function startEditing(entry) {
    setEditingId(entry.id)
    setEditedName(entry.name)
    setEditedProteinAmount(String(entry.proteinAmount))
  }

  function stopEditing() {
    setEditingId(null)
    setEditedName('')
    setEditedProteinAmount('')
  }

  function handleSubmit(event, id) {
    event.preventDefault()
    if (onUpdateEntry(id, editedName, editedProteinAmount)) stopEditing()
  }

  if (entries.length === 0) {
    return (
      <p className="text-gray-500 text-center py-6">
        No entries yet — log your first meal
      </p>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <ul className="divide-y divide-gray-100">
        {entries.map((entry) => {
          const formattedTime = new Date(entry.timestamp).toLocaleTimeString(
            [],
            { hour: 'numeric', minute: '2-digit' },
          )
          const isEditing = editingId === entry.id

          if (isEditing) {
            return (
              <li className="py-2.5" key={entry.id}>
                <form
                  className="grid grid-cols-[1fr_5rem_auto] gap-2"
                  onSubmit={(event) => handleSubmit(event, entry.id)}
                >
                  <input
                    aria-label="Food name"
                    autoFocus
                    className="h-9 min-w-0 border border-gray-300 rounded-lg px-2 text-sm text-gray-800"
                    onChange={(event) => setEditedName(event.target.value)}
                    type="text"
                    value={editedName}
                  />
                  <input
                    aria-label="Protein grams"
                    className="h-9 min-w-0 border border-gray-300 rounded-lg px-2 text-sm text-gray-800"
                    min="1"
                    onChange={(event) =>
                      setEditedProteinAmount(event.target.value)
                    }
                    type="number"
                    value={editedProteinAmount}
                  />
                  <div className="flex items-center gap-1">
                    <button
                      aria-label={`Save changes to ${entry.name}`}
                      className="p-1 text-emerald-600 hover:text-emerald-800 cursor-pointer"
                      type="submit"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      aria-label="Cancel editing"
                      className="p-1 text-gray-400 hover:text-gray-600 cursor-pointer"
                      onClick={stopEditing}
                      type="button"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </form>
              </li>
            )
          }

          return (
            <li className="py-2.5 flex items-center gap-2" key={entry.id}>
              <button
                aria-label={`Delete ${entry.name}`}
                className="text-gray-500 cursor-pointer"
                onClick={() => onDeleteEntry(entry.id)}
              >
                <Trash2
                  size={16}
                  className="text-gray-300 hover:text-gray-500"
                />
              </button>
              <span>{entry.name}</span>
              <span className="ml-auto whitespace-nowrap">
                {entry.proteinAmount}g &middot; {formattedTime}
              </span>
              <button
                aria-label={`Edit ${entry.name}`}
                className="p-1 text-gray-300 hover:text-gray-500 cursor-pointer"
                onClick={() => startEditing(entry)}
              >
                <Pencil size={16} />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
