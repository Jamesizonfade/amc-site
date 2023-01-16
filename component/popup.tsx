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
      <Modal ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            width: '720px',
            height: '410px',
            margin: 'auto',
            backgroundColor: '#242424',
          },
        }}
      >
        <button style= {{color:'#fff'}} onClick={() => setIsOpen(false)}>Close</button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tJev4mjf7NE"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default PopupVideo;