// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {

//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const [newTask, setNewTask] = useState({})

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

//         const data = userData

//         data.forEach(function (elem) {
//             if (asignTo == elem.firstName) {
//                 elem.tasks.push(newTask)
//                 elem.taskCounts.newTask = elem.taskCounts.newTask + 1
//             }
//         })
//         setUserData(data)
//         console.log(data);

//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')

//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={(e) => {
//                 submitHandler(e)
//             }}
//                 className='flex flex-wrap w-full items-start justify-between'
//             >
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => {
//                                 setTaskTitle(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => {
//                                 setTaskDate(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//                         <input
//                             value={asignTo}
//                             onChange={(e) => {
//                                 setAsignTo(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => {
//                                 setCategory(e.target.value)
//                             }}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea value={taskDescription}
//                         onChange={(e) => {
//                             setTaskDescription(e.target.value)
//                         }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  // Get userData from context
  const [userData, setUserData] = useContext(AuthContext);

  // State for form inputs
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Find the user and add the new task
    const updatedUserData = userData.map((user) => {
      if (user.firstName === asignTo) {
        user.tasks.push(newTask);
        user.taskCounts.newTask += 1; // Increment the 'newTask' count for this user
      }
      return user;
    });

    // Update the context with the new userData
    setUserData(updatedUserData);

    // Clear form inputs
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;