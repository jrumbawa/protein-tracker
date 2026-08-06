import { ShoppingCart } from 'lucide-react'

export default function FoodLogIcon({ setShowFoodLog }) {
  return (
    <ShoppingCart
      className="text-gray-400 hover:text-gray-600 ml-auto"
      onClick={() => setShowFoodLog(true)}
    />
  )
}
