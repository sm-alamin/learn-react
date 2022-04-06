import React from 'react';

function Child(props) {
    const reply ="I am Fine, What About You?";
    props.onReplyData(reply);
  return (
    <div>
        <h1>{props.data}</h1>
    
    </div>
  )
}

export default Child