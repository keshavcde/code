import React, { useState } from 'react';
import axios from 'axios';


function Code() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunCode = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setAiResponse(null);
      
      if (!code.trim()) {
        throw new Error('Please enter some code to execute');
      }

      const response = await axios.post('http://localhost:3000/generate/ai', {
        prompt: code
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setAiResponse(response.data.response || response.data);
    } catch (err) {
      if (err.response) {
        setError(`Backend error: ${err.response.data.message || err.response.statusText || 'Unknown error'}`);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dark-editor-container">
      <h1 className="dark-title">AI Code Editor</h1>
      <div className="editor-layout">
        <div className="dark-code-section">
          <div className="dark-header">
            <h2>Code Editor</h2>
            <button 
              type="button"
              onClick={handleRunCode} 
              disabled={isLoading || !code.trim()}
              className="dark-run-button"
            >
              {isLoading ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Processing...
                </>
              ) : (
                '▶ Run Code'
              )}
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
            className="dark-code-input"
            spellCheck="false"
            data-gramm="false"
            data-gramm_editor="false"
          />
        </div>
        <div className="dark-output-section">
          <div className="dark-output-header">
            <h2>Output</h2>
          </div>
          <div className="dark-output-content">
            {isLoading ? (
              <div className="dark-loading">
                <div className="pulse-animation" aria-hidden="true" />
                Processing your request...
              </div>
            ) : error ? (
              <div className="dark-error">
                <div className="error-icon" aria-hidden="true">⚠️</div>
                <div>
                  <strong>Error:</strong>
                  <pre className="dark-output-text">{error}</pre>
                </div>
              </div>
            ) : aiResponse ? (
              <div className="dark-ai-response">
                <div className="ai-icon" aria-hidden="true">🤖</div>
                <div>
                  <pre className="dark-output-text">{aiResponse}</pre>
                </div>
              </div>
            ) : (
              <div className="dark-success">
                <div className="info-icon" aria-hidden="true">ℹ️</div>
                <span>Enter code and click &quot;Run Code&quot; to see results</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;