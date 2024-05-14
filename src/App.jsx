import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  function addExpense() {
    if (!input || !amount) return;
    else {
      const newExpense = {
        id: Date.now(),
        title: input,
        amount: amount,
      };
      setExpenses([...expenses, newExpense]);
      setAmount('');
      setInput('');
    }
  }
  const handleDelete = (itemId) => {
    setExpenses(expenses.filter((expense) => expense.id !== itemId));
  };
  return (
    <section>
      <div className="wrapper">
        <h1>Expense Tracker</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            placeholder="Expense..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Amount..."
            min="0"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <ul className="expense-list">
          {expenses.map((expense, index) => (
            <li key={expense.id}>
              <span>
                {index + 1})
                {expense.title.charAt(0).toUpperCase() + expense.title.slice(1)}
              </span>
              <span>Rs {expense.amount}</span>
              <button
                onClick={() => {
                  handleDelete(expense.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default App;

<h2>Expense Tracker</h2>;
