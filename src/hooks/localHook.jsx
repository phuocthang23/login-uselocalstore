import React from 'react'

const localHook = (key, intivalue) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || intivalue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])
  
  return [value, key]
}

export default localHook