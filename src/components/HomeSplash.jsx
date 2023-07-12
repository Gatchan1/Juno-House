import { useState, useEffect } from 'react'
import '../../src/App.css';
import LoadingScreen from './LoadingScreen'
import Home from "../pages/Home"

export default function HomeSplash() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])


  return (
    <>
    {loading === false ? (
    <Home />
      ) : (
        <LoadingScreen />
      )}
      </>
  )
}
