import React from 'react'
import NavBar from '../Components/NavBar'
import List from '../Components/List'
import { DeleteOutlined } from '@ant-design/icons'

const Completed = () => {
    const [data, setData] = React.useState([])
    const handleApi = () => {
        fetch('https://mindx-mockup-server.vercel.app/api/resources/tasksData?apiKey=6855203daa0c8c0805c3bd3d')
            .then(response => response.json())
            .then(res => {
                // console.log(res.data.data);
                setData(res.data.data)
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
        // e.preventDefault()
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === 1) {
                await fetch(`https://mindx-mockup-server.vercel.app/api/resources/tasksData/${data[i]._id}?apiKey=6855203daa0c8c0805c3bd3d`, {
                    method: 'DELETE',
                })
            }
        }
        handleApi()
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