import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="app">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Telegram Web App</h1>
      </header>
      <main className="p-4">
        <Outlet context={{ user, setUser }} />
      </main>
      <nav className="fixed bottom-0 w-full bg-gray-200 p-4">
        {/* Add navigation buttons here */}
      </nav>
    </div>
  );
}

export default App;
