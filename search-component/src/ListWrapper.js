import React from 'react';
import ListItems from './ListItems'

const ListWrapper = (props) => {
    console.log(props)
    
    return (
        <div>
          <h2> list Wrapper Component </h2>
          <ListItems {...props} />
        </div>
    )
}
  
export default ListWrapper