import { Settings } from 'lucide-react'

export default function SettingsIcon({ setShowSettings }) {
  return (
    <Settings
      className="text-gray-500  ml-auto"
      onClick={() => setShowSettings(true)}
    />
  )
}
