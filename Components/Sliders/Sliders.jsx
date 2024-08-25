// components/CardSlider.js
import React, { useEffect, useState } from 'react';
import styles from './CardSlider.module.css';


const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [su, setSu] = useState(4);
  const cards = [
    { id: 1, title: 'Card 1', description: 'Some description for card 1' },
    { id: 2, title: 'Card 2', description: 'Some description for card 2' },
    { id: 3, title: 'Card 3', description: 'Some description for card 3' },
    { id: 4, title: 'Card 4', description: 'Some description for card 4' },
    { id: 5, title: 'Card 5', description: 'Some description for card 5' },
    { id: 6, title: 'Card 6', description: 'Some description for card 6' },
    { id: 7, title: 'Card 7', description: 'Some description for card 7' },
    { id: 8, title: 'Card 8', description: 'Some description for card 8' },
  ];

  const handleNext = () => {
    if (currentIndex < cards.length - su) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const updateSu = () => {
      if (window.innerWidth <= 600) {
        setSu(1); // 1 card per slide for small screens
      } else if (window.innerWidth <= 900) {
        setSu(2); // 2 cards per slide for medium screens
      } else if (window.innerWidth <= 1200) {
        setSu(3); // 3 cards per slide for larger screens
      } else {
        setSu(4); // 4 cards per slide for large screens
      }
    };

    updateSu(); // Initial check
    window.addEventListener('resize', updateSu); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSu); // Cleanup on unmount
    };
  }, []);

  return (
    <div className={styles.mains}>
          <button
        className={styles.prevButton}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
     <div className={styles.cardSlider}>
    
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * (100 / su)}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
   
    </div>

    <button
        className={styles.nextButton}
        onClick={handleNext}
        disabled={currentIndex === cards.length - su}
      >
        &#10095;
      </button>
  
    </div>
    
  );
};

export default Sliders;
