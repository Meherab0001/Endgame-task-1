import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    const handleTask= event =>{
        event.preventDefault();
      const task=event.target.task.value;
      console.log(task)
        //send data to server
        fetch('http://localhost:5000/task',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .then(res =>res.json())
        .then(data =>{console.log(data)})
    }

    return (
        <div>
            <h1>This is home to task management application</h1>
            <form onSubmit={handleTask} className='text-center'>
               <input className='w-50 h-48 border rounded' type="text" name='task' placeholder='Enter  task here' />
               <input className='bg-green-500 text-white p-3 ml-2' type="submit" value="Submit" />
            </form>
            <div className='text-right mr-3 text-blue-400'>
                <Link to='todo'>Todo Here</Link>
            </div>
        </div>
    );
};

export default Home;