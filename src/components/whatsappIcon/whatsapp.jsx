import "./whatsapp.css";
import React from "react";
import whatsAppIcon from "./whatsapp-icon.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function WhatsAppIcon() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleChatWindow() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="chat-icon" onClick={toggleChatWindow}>
      <NavLink to="https://wa.me/919987933348?text=Hello" target="_blank">
        <img src={whatsAppIcon} alt="chat-icon" />
      </NavLink>
      {/* {isOpen && <ChatWindow onClose={toggleChatWindow} />} */}
    </div>
  );
}

export default WhatsAppIcon;
