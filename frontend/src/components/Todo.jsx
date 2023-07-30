import { useState } from "react";
import Box from "./Box";
const boxes = [{id: 1, on: true}, {id: 2, on: false}, {id: 3, on: true}, {id: 4, on: true}]

const Todo = () => {
  const [things, setThings] = useState(['Do my assignment', 'Go to market'])
  const [todo, setTodo] = useState('');
  const [squares, setSquares] = useState(boxes);
  const [ messages ] = useState([])
  

  const add = () => {
    setThings((prev) => {
      const newTodo = todo;
      setTodo('');
      if (todo) return [...prev, newTodo]
      return prev;
      
    })
  }
  const toggle = (id) => {
    setSquares(prevState => {
      return prevState.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square;
      })
    })
}
    return (
        <div>
            <h1 className="text-center text-green-900 font-bold text-4xl">List of todos</h1>
            <hr />
            <div className='flex items-center justify-center my-4'>
                <input className="w-2/3 h-10 p-2 text-xl focus:outline-none rounded border" type="text" value={todo} placeholder='Please enter your todo task' onChange={(e) => setTodo(e.target.value)}/>
                <button className='bg-green-600 hover:bg-green-900 text-white text-lg py-2 px-4 w-[100px] rounded' onClick={add}>Add</button>
            </div>
            <ul>
                {things.map(thing => <li key={thing}><h3 className='text-2xl text-slate-600 px-12'>{thing}</h3></li>)}
            </ul>
            {squares.map(square => <Box key={square.id} on={square.on} toggle={() => toggle(square.id)}></Box>)}
            {messages.length !== 0 ? <h1>You have {messages.length} unread messages</h1> : <h1>You have no messasges</h1>}
        </div>
    )
}

export default Todo