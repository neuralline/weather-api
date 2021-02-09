import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Nav = () => {
  let history = useHistory()

  const handleChange = (val: string) => {
    history.push(`/weather/${val}`)
  }

  return (
    <div>
      <select name="cities" id="" onChange={e => handleChange(e.target.value)}>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Sydney">Sydney</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    </div>
  )
}

export default Nav
