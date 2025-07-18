import React from 'react'
import NavBar from '../Components/NavBar'
import AddBar from '../Components/AddBar'
import List from '../Components/List'

const All = () => {
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
    const pageStatus = 1

    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-300'>
            <div className='shadow-2xl bg-white rounded-lg'>
                <NavBar pageStatus={pageStatus} />
                <div className='px-10 py-5'>
                    <AddBar handleApi={handleApi} />
                    <List pageStatus={pageStatus} data={data} />
                </div>
            </div>
        </div>
    )
}

export default All