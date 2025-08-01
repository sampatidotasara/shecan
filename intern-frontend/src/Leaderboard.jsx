export default function Leaderboard() {
  const leaderboard = [
    { name: "Ronak", donations: 1500 },
    { name: "Aarav", donations: 1200 },
    { name: "Neha", donations: 900 },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
      <ol className="list-decimal list-inside">
        {leaderboard.map((user, idx) => (
          <li key={idx}>{user.name} - ₹{user.donations}</li>
        ))}
      </ol>
    </div>
  );
}

