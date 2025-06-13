import { useState, useEffect } from 'react';

export default function Home() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Simulate fake review detection logic
  useEffect(() => {
    if (isAnalyzing) {
      setTimeout(() => {
        if (review.toLowerCase().includes("amazing") || review.length < 20) {
          setResult("⚠️ This review might be fake.");
        } else {
          setResult("✅ This review seems genuine.");
        }
        setIsAnalyzing(false);
      }, 2000);
    }
  }, [isAnalyzing]);

  const handleAnalyze = () => {
    if (review.trim() === '') {
      setResult("Please enter a review first.");
      return;
    }
    setIsAnalyzing(true);
    setResult("Analyzing...");
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🕵️‍♀️ AI Fake Product Review Detector</h1>

      <textarea
        rows="6"
        cols="60"
        placeholder="Paste a product review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', fontSize: '16px' }}
      />

      <br />
      <button
        onClick={handleAnalyze}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Analyze Review
      </button>

      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}
