import { useState } from 'react';

function Counter() {
  // Declare state: [value, setter] = useState(initialValue)
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center p-4">
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increase
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
