import React, { useState } from "react";

export default function AddNotificationMessage({ onAddNotificationMessage }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        className="notification-add"
        placeholder="Add Notification"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddNotificationMessage(text);
        }}
      >
        Add
      </button>
    </>
  );
}
