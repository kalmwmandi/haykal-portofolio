import React, { useState, useEffect } from 'react';

const LoadingCounter = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    // Faster initial progress
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        // Very rarely decrease the counter (10% chance instead of 20%)
        const shouldDecrease = Math.random() < 0.1 && prevCounter > 5;
        
        // Calculate new value with faster increments
        let newValue;
        if (shouldDecrease) {
          // Smaller decrease of just 1-2
          newValue = prevCounter - Math.floor(Math.random() * 2) - 1;
        } else {
          // Much faster progress with larger increments
          const increment = prevCounter < 50 
            ? Math.floor(Math.random() * 8) + 3  // 3-10 increment for first half
            : Math.floor(Math.random() * 5) + 2; // 2-6 increment for second half
          
          newValue = prevCounter + increment;
        }
        
        // Cap at 99 initially but move to this point faster
        if (newValue >= 99 && prevCounter < 99) {
          return 99;
        }
        
        // Complete when we reach 100
        if (newValue >= 100) {
          setIsComplete(true);
          if (onComplete) {
            // Reduced waiting time to 200ms
            setTimeout(onComplete, 200);
          }
          return 100;
        }
        
        return newValue;
      });
    }, 60); // Update every 60ms instead of 100ms for faster animation

    // Shorter pause at 99 before completing
    if (counter === 99) {
      const finalTimer = setTimeout(() => {
        setCounter(100);
        setIsComplete(true);
        if (onComplete) {
          // Reduced waiting time to 200ms
          setTimeout(onComplete, 200);
        }
      }, 400); // Pause at 99 for just 400ms instead of 800ms
      
      return () => clearTimeout(finalTimer);
    }

    return () => clearInterval(interval);
  }, [counter, isComplete, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <div className="text-9xl font-bold text-pink-200">{counter}</div>
        <div className="mt-4 text-xl text-pink-200">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingCounter;