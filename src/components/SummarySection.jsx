import React, { useState, useEffect } from "react";

const SummarySection = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/summary.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch summary");
        }
        return response.json();
      })
      .then((data) => {
        setSummary(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading summary...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Summary</h2>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Total Income</p>
          <p className="text-lg font-semibold">{summary.totalIncome}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Total Expenses</p>
          <p className="text-lg font-semibold">{summary.totalExpenses}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Net Balance</p>
          <p className="text-lg font-semibold">{summary.netBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
