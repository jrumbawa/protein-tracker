export default function ProgressBar({ totalProtein, proteinGoal }) {
  const proteinPercentage = Math.min((totalProtein / proteinGoal) * 100, 100)

  return (
    <>
      <div className="w-full h-2.5 bg-gray-200 rounded-full">
        <div
          className="bg-emerald-600 h-2.5 rounded-full"
          style={{ width: `${proteinPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500">{proteinGoal}g goal</p>
    </>
  )
}
