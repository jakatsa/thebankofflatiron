import React, { useState, useEffect } from 'react';

function EditTransaction({ transaction, onUpdate, onCancel }) {
  const [editTransaction, setEditTransaction] = useState({ ...transaction });

  useEffect(() => {
    // Reset the editTransaction state whenever the transaction prop changes
    setEditTransaction({ ...transaction });
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(editTransaction);
  };

  return (
    <div>
      <h3>Edit Transaction</h3>
      <label htmlFor="editDescription">Description:</label>
      <input
        type="text"
        id="editDescription"
        name="description"
        value={editTransaction.description}
        onChange={handleChange}
      />
      <label htmlFor="editCategory">Category:</label>
      <input
        type="text"
        id="editCategory"
        name="category"
        value={editTransaction.category}
        onChange={handleChange}
      />
      <label htmlFor="editAmount">Amount:</label>
      <input
        type="number"
        id="editAmount"
        name="amount"
        value={editTransaction.amount}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditTransaction;
