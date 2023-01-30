import React, { useState } from "react";
import "./NotificationList.css"

export default function NotificationList({ notificationMessage, onChangeNotificationMessage, onDeleteNotificationMessage }) {
  return (
    <ul>
      {notificationMessage.map((specificNotificationMessage) => (
        <li key={specificNotificationMessage.id}>
          <Task task={specificNotificationMessage} onChange={onChangeNotificationMessage} onDelete={onDeleteNotificationMessage} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="notification-input"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
          
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label className="each-notification-message">
      
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
