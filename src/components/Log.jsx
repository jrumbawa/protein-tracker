import { Trash2 } from 'lucide-react'

export default function Log({ entries, onDeleteEntry }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <ul className="divide-y divide-gray-100">
        {entries.map((entry) => {
          const formattedTime = new Date(entry.timestamp).toLocaleTimeString()
          return (
            <li className="py-2.5 flex gap-2" key={entry.id}>
              <button
                className="text-gray-500 cursor-pointer"
                onClick={() => onDeleteEntry(entry.id)}
              >
                <Trash2
                  size={16}
                  className="text-gray-300 hover:text-gray-500"
                />
              </button>
              {entry.name}{' '}
              <span className="ml-auto">
                {entry.proteinAmount}g &middot; {formattedTime}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
