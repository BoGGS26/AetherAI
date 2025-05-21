import React, { useState } from 'react';
import { callGPT } from '../utils/openai';

const Dashboard = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const result = await callGPT(prompt);
    setResponse(result);
  };

  return (
    <div className="p-8 text-white bg-[#1E1E2F] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">AetherAI Studio</h1>
      <textarea
        className="w-full p-3 text-black"
        rows={6}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button
        className="mt-4 px-6 py-2 bg-[#00E0FF] text-black font-bold rounded"
        onClick={handleSubmit}
      >
        Generate
      </button>
      {response && (
        <div className="mt-6 p-4 bg-[#2C2C3C] rounded">
          <h2 className="font-semibold mb-2">Output:</h2>
          <pre className="whitespace-pre-wrap">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
