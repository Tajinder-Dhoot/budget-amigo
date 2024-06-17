import { useEffect, useState } from 'react';
import './App.css';
import ExpenseEntry from "./pages/ExpenseEntry"
import { collection, onSnapshot } from 'firebase/firestore';
import db from './firebase';

function App() {

  const [purchases, setPurchases] = useState([]);

  // useEffect(() => {
  //   onSnapshot(collection(db, "users"), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  useEffect(() => {
    onSnapshot(collection(db, "purchases"), (snapshot) => {
      setPurchases(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <ExpenseEntry purchases={purchases} />
    </div>
  );
}

export default App; 
