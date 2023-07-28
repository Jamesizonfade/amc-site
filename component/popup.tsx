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
   <div  style= {{backgroundColor:'black'}} className="section-block section-sm border-bottom">
        <video width="100%" height="100%" controls preload='metadata' poster={'https://res.cloudinary.com/dgsdjrpjz/image/upload/v1674148923/amc-flythrough-thumbnail_hbgld6.png'} >
              <source src={'/videos/AMCJulyupdate.mp4'} type="video/mp4" />
              alt=""
              </video>
              <div className="container text-center">
            <button className="popup-modal-button" style= {{color:'#fff'}} onClick={() => setIsOpen(false)}>Close</button>
            </div>
      </div>
      </Modal>
      </div>
    </div>
  );
};

export default PopupVideo;