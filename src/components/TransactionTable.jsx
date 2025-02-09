import React, { useState, useEffect } from "react";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(""); 

  useEffect(() => {
    fetch("/api/transaction.json") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return; 

    if (file.type !== "text/csv") {
      alert("Please upload a valid CSV file.");
      return;
    }

    setFileName(file.name); 
    console.log("Valid CSV file uploaded:", file.name);
  };

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg h-full overflow-auto">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Transactions</h2>

        
        <div className="flex items-center space-x-4">
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            accept=".csv" 
            onChange={handleFileUpload} 
          />
          <label 
            htmlFor="file-upload"
            className="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300"
          >
            Upload CSV
          </label>
          {fileName && <p className="text-gray-600 dark:text-gray-300 text-sm">Uploaded: {fileName}</p>}
        </div>
      </div>

     
      <div className="overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium">Balance</th>
              <th className="px-6 py-3 text-left text-xs font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="px-6 py-4">{tx.time}</td>
                <td className="px-6 py-4">{tx.date}</td>
                <td className="px-6 py-4">{tx.description}</td>
                <td className="px-6 py-4">{tx.transactionType}</td>
                <td className="px-6 py-4">{tx.balance}</td>
                <td className="px-6 py-4">{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
