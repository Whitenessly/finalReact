import React from 'react'
import NavBar from '../Components/NavBar'
import AddBar from '../Components/AddBar'
import List from '../Components/List'

const Active = () => {
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
    const pageStatus = 2

    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-300'>
            <div className='shadow-2xl bg-white rounded-lg'>
                <NavBar pageStatus={pageStatus} />
                <div className='px-10 py-5'>
                    <AddBar handleApi={handleApi} />
                    <List pageStatus={pageStatus} data={data} handleApi={handleApi}/>
                </div>
            </div>
        </div>
    )
}

export default Active