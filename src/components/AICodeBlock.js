import React, { useState, useEffect, useRef } from 'react';

const AICodeBlock = ({ code }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const preRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const typeCode = async () => {
      // Initial delay before starting
      await new Promise(resolve => setTimeout(resolve, 2000));

      while (currentIndex < code.length) {
        // Slower typing speed: 100ms to 200ms per character
        const delay = Math.random() * 100 + 100;
        await new Promise(resolve => setTimeout(resolve, delay));
        
        setDisplayedCode(prev => prev + code[currentIndex]);
        currentIndex++;
      }
    };

    typeCode();
  }, [code]);

  return (
    <div className="code-matrix">
      <pre ref={preRef}>
        {displayedCode}
        <span className="typing-cursor"></span>
      </pre>
    </div>
  );
};

export default AICodeBlock; 