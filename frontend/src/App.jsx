import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const[user, setUser] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/api')
    .then(res => setUser(res.data))
    .catch(err => setError('Gagal mengambil data'))
  },[])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar User</h1>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="list-disc pl-6">
        {user.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
