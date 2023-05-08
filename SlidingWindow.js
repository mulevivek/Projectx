import React, { useState } from 'react';

const SlidingWindow = () => {
  // Set up state to track the current position of the window
  const [windowPos, setWindowPos] = useState(0);

  // Define an array of items to display in the window
  const items = [
    { id: 1, src: 'image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'Image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'Image3.jpg', alt: 'Image 3' },
    { id: 4, src: 'image4.jpg', alt: 'Image 4' },
    { id: 5, src: 'image5.jpg', alt: 'Image 5' },
  ];

  // Define the maximum number of items to display in the window at once
  const windowSize = 1;

  // Define a function to move the window to the right
  const moveWindowRight = () => {
    const newPos = Math.min(windowPos + 1, items.length - windowSize);
    setWindowPos(newPos);
  };

  // Define a function to move the window to the left
  const moveWindowLeft = () => {
    const newPos = Math.max(windowPos - 1, 0);
    setWindowPos(newPos);
  };
  
  return (
    <div>
      <div>
        <button onClick={moveWindowLeft}>{'<'}</button>
        <button onClick={moveWindowRight}>{'>'}</button>
      </div>
      <div>
        {items.slice(windowPos, windowPos + windowSize).map((item) => (
          <img key={item.id} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default SlidingWindow;
