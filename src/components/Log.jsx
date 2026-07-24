export default function Log({ entries }) {
  const totalProtein = entries.reduce(
    (total, entry) => total + entry.proteinAmount,
    0,
  )

  return (
    <>
      <div>total {totalProtein}</div>
      <ul>
        {entries.map((entry) => {
          const formattedTime = new Date(entry.timestamp).toLocaleTimeString()
          return (
            <li key={entry.id}>
              {entry.name} {entry.proteinAmount} {formattedTime}
            </li>
          )
        })}
      </ul>
    </>
  )
}
