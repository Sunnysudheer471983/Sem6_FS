import { useEffect, useMemo, useState } from 'react'
import TradeForm from './components/TradeForm.jsx'
import TradeList from './components/TradeList.jsx'
import Summary from './components/Summary.jsx'

const STORAGE_KEY = 'trading-journal-data'

function App() {
  const [trades, setTrades] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setTrades(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trades))
  }, [trades])

  const addTrade = (trade) => {
    setTrades((current) => [trade, ...current])
  }

  const removeTrade = (id) => {
    setTrades((current) => current.filter((trade) => trade.id !== id))
  }

  const filteredTrades = useMemo(() => {
    let list = [...trades]
    if (filter !== 'all') {
      list = list.filter((trade) => trade.direction === filter)
    }
    if (search.trim()) {
      const term = search.toLowerCase()
      list = list.filter(
        (trade) =>
          trade.symbol.toLowerCase().includes(term) ||
          trade.notes.toLowerCase().includes(term) ||
          trade.mistakes.toLowerCase().includes(term)
      )
    }
    return list
  }, [trades, filter, search])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>Trading Journal</h1>
          <p>Track daily gains/losses, mistakes, lessons, and performance.</p>
        </div>
      </header>

      <main className="layout-grid">
        <section className="panel">
          <TradeForm onAdd={addTrade} />
        </section>

        <section className="panel">
          <Summary trades={trades} />

          <div className="filters">
            <label>
              Search
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Symbol, mistake, note..."
              />
            </label>
            <label>
              Filter
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All trades</option>
                <option value="LONG">Long only</option>
                <option value="SHORT">Short only</option>
              </select>
            </label>
          </div>
        </section>

        <section className="panel panel-wide">
          <TradeList trades={filteredTrades} onDelete={removeTrade} />
        </section>
      </main>
    </div>
  )
}

export default App
