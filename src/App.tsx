/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import PrizeWheel from './components/PrizeWheel';
import DrawHistory from './components/DrawHistory';

export default function App() {
  const [input, setInput] = useState('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
  const [items, setItems] = useState(input.split(',').map(s => s.trim()));

  const handleUpdate = () => {
    setItems(input.split(',').map(s => s.trim()));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">動態抽籤大轉盤</h1>
      
      <div className="mb-8 w-full max-w-lg flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-3 border rounded-lg shadow-sm"
          placeholder="輸入選項，用逗號分隔"
        />
        <button 
          onClick={handleUpdate}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          更新轉盤
        </button>
      </div>

      <PrizeWheel items={items} />
      
      <DrawHistory />
    </div>
  );
}
