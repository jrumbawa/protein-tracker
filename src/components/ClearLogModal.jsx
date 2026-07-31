export default function ClearLogModal({ setShowClearLogModal, setEntries }) {
  function handleClearLog() {
    setEntries([])
    setShowClearLogModal(false)
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-xs space-y-4">
        <p className="text-sm text-gray-500">
          This will delete all entries. Are you sure?
        </p>
        <button
          className="block w-full h-10 bg-red-500 text-white rounded-lg text-sm font-semibold"
          onClick={handleClearLog}
        >
          Confirm
        </button>
        <button
          className="block w-full h-10 border border-gray-300 text-gray-500 rounded-lg text-sm font-semibold"
          onClick={() => setShowClearLogModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
