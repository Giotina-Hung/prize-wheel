import React, { useState, useEffect } from 'react';

interface DrawRecord {
  winner: string;
  timestamp: string;
}

export default function DrawHistory() {
  const [history, setHistory] = useState<DrawRecord[]>([]);

  useEffect(() => {
    const fetchHistory = () => {
      const storedHistory = localStorage.getItem('prize_draw_history');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    };
    
    fetchHistory();
    // Re-check periodically or listen to a custom event if updates happen frequently
    const interval = setInterval(fetchHistory, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 w-full max-w-lg bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">抽籤歷史紀錄</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">目前沒有紀錄。</p>
      ) : (
        <ul className="space-y-2">
          {history.slice().reverse().map((record, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span className="font-semibold text-indigo-700">{record.winner}</span>
              <span className="text-sm text-gray-500">{new Date(record.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
