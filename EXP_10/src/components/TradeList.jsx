function TradeList({ trades, onDelete }) {
  return (
    <div>
      <h2>Trade Journal</h2>
      {trades.length === 0 ? (
        <p className="empty-state">No trades recorded yet. Add your first trade above.</p>
      ) : (
        <div className="trade-list">
          {trades.map((trade) => (
            <article key={trade.id} className="trade-card">
              <div className="trade-header">
                <strong>{trade.symbol}</strong>
                <span>{trade.date}</span>
              </div>
              <div className="trade-row">
                <span>{trade.direction}</span>
                <span>Qty: {trade.quantity}</span>
                <span>PL: {trade.profitLoss.toFixed(2)}</span>
              </div>
              <div className="trade-row">
                <span>Entry: {trade.entry}</span>
                <span>Exit: {trade.exit}</span>
              </div>
              <div className="trade-notes">
                <p><strong>Mistakes:</strong> {trade.mistakes || 'None'}</p>
                <p><strong>Notes:</strong> {trade.notes || 'No notes'}</p>
              </div>
              <button className="delete-btn" onClick={() => onDelete(trade.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default TradeList
