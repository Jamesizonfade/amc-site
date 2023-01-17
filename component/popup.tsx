import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

interface Props {}

const PopupVideo: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 6000);
  }, []);


  return (
    <div>
      <div className="container text-center">
      <Modal className="popup-modal" ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        
      >
        <button style= {{color:'#fff'}} onClick={() => setIsOpen(false)}>Close</button>
   
        <video width="100%" height="100%" controls poster={''} >
              <source src={'/videos/AMC-flythrough.mp4'} type="video/mp4"/>
              alt=""
              </video>

      </Modal>
      </div>
    </div>
  );
};

export default PopupVideo;