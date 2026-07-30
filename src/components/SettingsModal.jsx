import { useState } from 'react'

export default function SettingsModal(props) {
  const { proteinGoal, setProteinGoal, setShowSettings } = props
  const [newProteinGoal, setNewProteinGoal] = useState(proteinGoal)

  function handleProteinSubmit() {
    setProteinGoal(Number(newProteinGoal))
    setShowSettings(false)
  }

  function handleModalClose() {
    setShowSettings(false)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-xs space-y-4">
        <div className="flex justify-between">
          <p className="text-sm text-gray-800">Protein Goal (g)</p>
          <button
            className="text-gray-500 cursor-pointer"
            onClick={handleModalClose}
          >
            ×
          </button>
        </div>
        <input
          className="block w-full h-10 border border-gray-300 rounded-lg px-3 text-sm text-gray-800"
          type="number"
          value={newProteinGoal}
          onChange={(e) => setNewProteinGoal(e.target.value)}
        />
        <button
          className="block w-full h-10 bg-emerald-600 text-white rounded-lg text-sm font-semibold"
          onClick={handleProteinSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
