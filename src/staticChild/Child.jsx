import React from 'react';
import { memo } from 'react';

function Child() {
    console.log("Child Component");

  return (
    <div>
        <h2>This is child component</h2>
    </div>
  )
}

export default memo(Child);
