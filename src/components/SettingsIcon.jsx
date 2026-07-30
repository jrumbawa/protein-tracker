import { Settings } from 'lucide-react'

export default function SettingsIcon({ handleShowSettings }) {
  return (
    <Settings className="text-gray-500  ml-auto" onClick={handleShowSettings} />
  )
}
