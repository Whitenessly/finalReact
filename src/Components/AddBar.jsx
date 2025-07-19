import React from 'react'

const AddBar = (props) => {
  const [inputValue, setInputValue] = React.useState('')
  const onChange = (e) => {
    setInputValue(e.target.value)
    // console.log(e.target.value);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const body = {
        id: `${Date.now()}`,
        status: 0,
        description: `${inputValue}`,
      }

      await fetch('https://mindx-mockup-server.vercel.app/api/resources/tasksData?apiKey=6855203daa0c8c0805c3bd3d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })
      setInputValue('')
      props.handleApi()
    }
  }
  return (
    <div className='flex flex-row justify-between items-center pb-3 gap-5'>
      <input onChange={onChange} type="text" className='px-4 py-2 border-2 border-gray-300 rounded-md w-full ]' placeholder='Add details' value={inputValue} />
      <button onClick={onSubmit} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add</button>
    </div>
  )
}

export default AddBar