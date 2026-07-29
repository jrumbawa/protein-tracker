export default function Log({ entries }) {
  const totalProtein = entries.reduce(
    (total, entry) => total + entry.proteinAmount,
    0,
  )

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <ul className="divide-y divide-gray-100">
        {entries.map((entry) => {
          const formattedTime = new Date(entry.timestamp).toLocaleTimeString()
          return (
            <li className="py-2.5 flex" key={entry.id}>
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
