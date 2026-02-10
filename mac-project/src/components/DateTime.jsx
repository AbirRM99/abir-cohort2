import React, { useState, useEffect } from 'react'

const formatDateTime = (date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = date.getDate()
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  return `${weekday} ${month} ${day} ${hours}:${minutes} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>{formatDateTime(now)}</div>
  )
}

export default DateTime