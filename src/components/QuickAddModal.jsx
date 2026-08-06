import foodPresets from '../data.json'
import { Plus } from 'lucide-react'

export default function QuickAddModal({ setShowFoodLog, handleAddEntry }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-xs space-y-4">
        <div className="flex justify-between">
          <p className="text-base font-semibold text-gray-800">Quick Add</p>
          <button
            className="text-lg text-gray-500 cursor-pointer"
            onClick={() => setShowFoodLog(false)}
          >
            ×
          </button>
        </div>
        <ul className="max-h-96 overflow-y-auto divide-y divide-gray-100 no-scrollbar">
          {foodPresets.map((food, index) => {
            return (
              <li
                className="py-2.5 flex gap-2 text-sm text-gray-800"
                key={index}
              >
                <button
                  className="text-gray-500 cursor-pointer"
                  onClick={() => handleAddEntry(food.name, food.proteinAmount)}
                >
                  <Plus
                    size={16}
                    className="text-gray-300 hover:text-gray-500"
                  />
                </button>
                <span className="mr-auto">{food.name}</span>{' '}
                <span>
                  {food.proteinAmount}
                  <span className="text-gray-500">g</span>
                </span>
              </li>
            )
          })}
        </ul>
        <p className="text-xs text-gray-400 text-center pt-2">
          Scroll for more
        </p>
      </div>
    </div>
  )
}
