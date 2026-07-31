import { Settings } from 'lucide-react'

export default function SettingsIcon({ setShowSettings }) {
  return (
    <Settings
      className="text-gray-400 hover:text-gray-600 ml-auto"
      onClick={() => setShowSettings(true)}
    />
  )
}
