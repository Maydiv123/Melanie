import React from 'react';
import Lottie from 'lottie-react';
import WhatsappLottie from '../../assets/Whatsapp.json';

const WhatsappChatButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/917317228662', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title="Chat on WhatsApp"
      onClick={handleClick}
    >
      <Lottie animationData={WhatsappLottie} loop={true} style={{ height: 90, width: 90 }} />
    </div>
  );
};

export default WhatsappChatButton; 