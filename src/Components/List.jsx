import React from 'react'
import Item from './Item'

const List = (props) => {
  const tasks = (props.pageStatus === 2) ? props.data.filter(task => task.status === 0) : (props.pageStatus === 3) ? props.data.filter(task => task.status === 1) : props.data;
  return tasks.map(task => {
    return <Item task={task} pageStatus={props.pageStatus} handleApi={props.handleApi}/>
  })
}

export default List