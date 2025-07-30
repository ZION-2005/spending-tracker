import React, { useState, useEffect } from "react";
import defaultCategories from "../data/categories.json";
import { saveSpending, getAllSpendings, getCategories, saveCategory } from "../utils/storage";

const Journal = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    const loaded = getCategories(defaultCategories.map(c => c.category));
    setCategories(loaded);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !category || !amount) return;
    saveSpending({ date, category, amount: parseFloat(amount) });
    setDate("");
    setAmount("");
    setCategory("");
    alert("Saved!");
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updated = [...categories, newCategory];
      saveCategory(updated);
      setCategories(updated);
      setNewCategory("");
    }
  };

  return (
    <div>
      <h2>Spending Journal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date: </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div>
          <label>Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Amount: </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>

        <button type="submit">Add Spending</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4>Add Custom Category</h4>
        <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        <button onClick={handleAddCategory}>Add</button>
      </div>
    </div>
  );
};

export default Journal;