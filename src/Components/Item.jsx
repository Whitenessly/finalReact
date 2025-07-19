import React from 'react'
import { DeleteOutlined } from '@ant-design/icons'

const Item = (props) => {
    // console.log(props.task);
    const onCheck = async (e) => {
        // e.preventDefault()
        const updatedTask = {
            ...props.task,
            status: (props.task.status === 0) ? 1 : 0
        }
        console.log(updatedTask);

        await fetch(`https://mindx-mockup-server.vercel.app/api/resources/tasksData/${props.task._id}?apiKey=6855203daa0c8c0805c3bd3d`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask),
        })

        props.handleApi()
    }

    const onDelete = async (e) => {
        console.log(props.task._id);
        // e.preventDefault()
        await fetch(`https://mindx-mockup-server.vercel.app/api/resources/tasksData/${props.task._id}?apiKey=6855203daa0c8c0805c3bd3d`, {
            method: 'DELETE',
        })
        props.handleApi()
    }
    return (
        <div className='flex flex-row justify-between items-center py-1 gap-6'>
            <div className='flex flex-row items-center gap-2'>
                {(props.task.status === 0) ? <input onClick={onCheck} type="checkbox" /> : <input onClick={onCheck} type="checkbox" checked />}
                <p className={(props.task.status === 1) ? 'line-through' : ''}>{props.task.description}</p>
            </div>
            {(props.pageStatus === 3) ? <DeleteOutlined onClick={onDelete} className='text-gray-500' /> : null}
        </div>
    )
}

export default Item