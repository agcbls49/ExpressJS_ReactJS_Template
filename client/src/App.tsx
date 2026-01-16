import { useEffect, useState } from 'react'
import './App.css'

interface BackendData {
  users: string[];
}

function App() {
  const [backendData, setBackendData] = useState<BackendData | null>(null);

  useEffect(() => {
    fetch("/api").then(
        response => response.json()
      ).then(data => {
        setBackendData(data);
      }
    )
  }, []);

  return (
    <div>
      {!backendData ? (<p>Loading...</p>) : (backendData.users.map((user, i) => (<p key={i}>{user}</p>))
    )}
    </div>
  )
}

export default App
