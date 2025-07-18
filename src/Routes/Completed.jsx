import React from 'react'
import NavBar from '../Components/NavBar'
import List from '../Components/List'
import { DeleteOutlined } from '@ant-design/icons'

const Completed = () => {
    const [data, setData] = React.useState([])
    const handleApi = () => {
        fetch('http://localhost:4000/tasks')
            .then(response => response.json())
            .then(res => {
                // console.log(data);
                setData(res)
            })
            .catch(error => {
                console.error(error);
            })
    }

    React.useEffect(() => {
        handleApi()
    }, [])
    const pageStatus = 3

    const clearAll = async (e) => {
        e.preventDefault()
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === 1) {
                await fetch(`http://localhost:4000/tasks/${data[i].id}`, {
                    method: 'DELETE',
                })
            }
        }
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-300'>
            <div className='shadow-2xl bg-white rounded-lg'>
                <NavBar pageStatus={pageStatus} />
                <div className='px-10 py-5 flex flex-col items-end'>
                    <div className='w-full'>
                        <List pageStatus={pageStatus} data={data} handleApi={handleApi} />
                    </div>
                    <button onClick={clearAll} className='bg-red-400 text-white px-4 py-2 rounded-md mt-2 right-0'><DeleteOutlined /> Clear all</button>
                </div>
            </div>
        </div>
    )
}

export default Completed