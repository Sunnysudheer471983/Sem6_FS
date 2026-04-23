import { useState } from 'react'

const initialState = {
  date: new Date().toISOString().slice(0, 10),
  symbol: '',
  direction: 'LONG',
  quantity: 0,
  entry: 0,
  exit: 0,
  mistakes: '',
  notes: ''
}

function TradeForm({ onAdd }) {
  const [form, setForm] = useState(initialState)

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const profitLoss = Number(form.quantity) * (Number(form.exit) - Number(form.entry)) * (form.direction === 'SHORT' ? -1 : 1)

    const trade = {
      id: crypto.randomUUID(),
      ...form,
      quantity: Number(form.quantity),
      entry: Number(form.entry),
      exit: Number(form.exit),
      profitLoss,
      timestamp: Date.now()
    }

    onAdd(trade)
    setForm(initialState)
  }

  return (
    <div>
      <h2>Add Trade</h2>
      <form className="trade-form" onSubmit={handleSubmit}>
        <label>
          Date
          <input type="date" value={form.date} onChange={handleChange('date')} required />
        </label>
        <label>
          Symbol
          <input type="text" value={form.symbol} onChange={handleChange('symbol')} placeholder="AAPL, BTCUSD" required />
        </label>
        <label>
          Direction
          <select value={form.direction} onChange={handleChange('direction')}>
            <option value="LONG">LONG</option>
            <option value="SHORT">SHORT</option>
          </select>
        </label>
        <label>
          Quantity
          <input type="number" value={form.quantity} onChange={handleChange('quantity')} min="0" step="1" required />
        </label>
        <label>
          Entry Price
          <input type="number" value={form.entry} onChange={handleChange('entry')} min="0" step="0.01" required />
        </label>
        <label>
          Exit Price
          <input type="number" value={form.exit} onChange={handleChange('exit')} min="0" step="0.01" required />
        </label>
        <label>
          Mistakes / Lessons
          <textarea value={form.mistakes} onChange={handleChange('mistakes')} placeholder="What went wrong?" rows="3" />
        </label>
        <label>
          Notes
          <textarea value={form.notes} onChange={handleChange('notes')} placeholder="Strategy, setup, review notes" rows="3" />
        </label>
        <button type="submit">Add Trade</button>
      </form>
    </div>
  )
}

export default TradeForm
