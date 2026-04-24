import { useState } from "react";

function ExpenseTracker() {
  // 入力フォームの状態管理
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: ""
  });

  // 支出リスト
  const [expenses, setExpenses] = useState([]);

  // 編集用ID
  const [editId, setEditId] = useState(null);

  // カテゴリフィルター
  const [filter, setFilter] = useState("All");

  // 入力変更処理
  const handleChange = (e) => {
    const { name, value } = e.target;

    // フォーム更新
    setForm({
      ...form,
      [name]: value
    });
  };

  // 追加 or 更新処理
  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロード防止

    // 入力チェック
    if (!form.name || !form.amount || !form.category || !form.date) return;

    // 編集モードの場合
    if (editId) {
      const updated = expenses.map((item) =>
        item.id === editId ? { ...form, id: editId } : item
      );
      setExpenses(updated);
      setEditId(null); // 編集解除
    } else {
      // 新規追加
      setExpenses([
        ...expenses,
        {
          ...form,
          id: Date.now() // 一意ID
        }
      ]);
    }

    // フォームリセット
    setForm({
      name: "",
      amount: "",
      category: "",
      date: ""
    });
  };

  // 削除
  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  // 編集ボタン
  const handleEdit = (item) => {
    setForm(item); // フォームにデータセット
    setEditId(item.id); // 編集モードON
  };

  // フィルター処理
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((item) => item.category === filter);

  // 合計金額計算
  const total = filteredExpenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>

      {/* 入力フォーム */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Expense Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update" : "Add Expense"}
        </button>
      </form>

      {/* テーブル */}
      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredExpenses.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.amount}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>

              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 合計 */}
      <h3>Total: ${total}</h3>

      {/* フィルター */}
      <div>
        <label>Filter by Category: </label>

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseTracker;
