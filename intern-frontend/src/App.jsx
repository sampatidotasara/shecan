import { useEffect, useState } from "react";

function App() {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/intern")
      .then(res => res.json())
      .then(data => setIntern(data));
  }, []);

  if (!intern) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Intern Dashboard</h1>

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <p><strong>Name:</strong> {intern.name}</p>
        <p><strong>Referral Code:</strong> {intern.referralCode}</p>
        <p><strong>Total Donations:</strong> ₹{intern.donations}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Rewards</h2>
          <ul className="list-disc list-inside">
            {intern.rewards.map((reward, idx) => (
              <li key={idx}>{reward}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

