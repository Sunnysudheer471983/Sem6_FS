function Summary({ trades }) {
  const totalTrades = trades.length
  const totalPL = trades.reduce((sum, trade) => sum + trade.profitLoss, 0)
  const wins = trades.filter((trade) => trade.profitLoss > 0).length
  const losses = trades.filter((trade) => trade.profitLoss <= 0).length
  const avgPL = totalTrades ? totalPL / totalTrades : 0
  const winRate = totalTrades ? ((wins / totalTrades) * 100).toFixed(0) : '0'
  const mistakeCount = trades.filter((trade) => trade.mistakes.trim()).length

  return (
    <div className="summary-panel">
      <h2>Performance Summary</h2>
      <div className="metric-grid">
        <div className="metric-card">
          <span>Total trades</span>
          <strong>{totalTrades}</strong>
        </div>
        <div className="metric-card">
          <span>Total P/L</span>
          <strong>{totalPL.toFixed(2)}</strong>
        </div>
        <div className="metric-card">
          <span>Win rate</span>
          <strong>{winRate}%</strong>
        </div>
        <div className="metric-card">
          <span>Avg P/L</span>
          <strong>{avgPL.toFixed(2)}</strong>
        </div>
        <div className="metric-card">
          <span>Winning trades</span>
          <strong>{wins}</strong>
        </div>
        <div className="metric-card">
          <span>Mistake reviews</span>
          <strong>{mistakeCount}</strong>
        </div>
      </div>
    </div>
  )
}

export default Summary
