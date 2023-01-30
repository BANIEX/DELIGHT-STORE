import React from 'react';
import {useReducer, useState, useEffect} from 'react';
import axios from 'axios';
import AddNotificationMessage from '../AddNotificationMessage/AddNotificationMessage.js';
import NotificationList from '../NotificationList/NotificationList.js';

export default function ChangeNotification() {

 

  useEffect(() => {
    handleSetInitialNotificationMessage();
  }, []);


  function saveNotificationMessage(){
    console.log(notificationMessage)
    
    axios.post("/notification_changer", {notification_data : notificationMessage})
    .then((res)=>{

      let response_code = res.data.code;

      console.log(response_code)


    })

  }





  const [notificationMessage, dispatch] = useReducer(notificationMessageReducer, []);


  function handleSetInitialNotificationMessage(){
    axios.get("/notification").then((data) => {
      dispatch({
        type: "initial_message",
        data: data.data.data
      })
    });
    
    
  }
  
  function handleAddNotificationMessage(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeNotificationMessage(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteNotificationMessage(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className='change-notification'>
      <h3>Add Notification message</h3>
      {/* <AddTask onAddTask={handleAddNotificationMessage} /> */}
      {/* <TaskList
        tasks={tasks}
        onChangeNotificationMessage={handleChangeNotificationMessage}
        onDeleteNotificationMessage={handleDeleteNotificationMessage}
      /> */}
      <AddNotificationMessage
        onAddNotificationMessage={handleAddNotificationMessage}
      />
      <NotificationList
        notificationMessage={notificationMessage}
        onChangeNotificationMessage={handleChangeNotificationMessage}
        onDeleteNotificationMessage={handleDeleteNotificationMessage}
      />
      <br/>
      <button onClick={saveNotificationMessage}>Save</button>
    </div>
  );
}

function notificationMessageReducer(notificationMessage, action) {
  switch (action.type) {
    case 'initial_message': {
      return action.data
    }
    case 'added': {
      return [
        ...notificationMessage,
        {
          id: action.id,
          text: action.text,
          
        },
      ];
    }
    case 'changed': {
      return notificationMessage.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return notificationMessage.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
