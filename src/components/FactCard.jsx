export default function FactCard({ fact, onNext }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="bulb">💡</span>
        <h2 className="topic">{fact.topic}</h2>
        <span className="tag">冷知识</span>
      </div>

      <div className="card-body">
        <div className="lang-section">
          <span className="lang-label">🇨🇳 中文</span>
          <p>{fact.zh}</p>
        </div>
        <div className="divider" />
        <div className="lang-section">
          <span className="lang-label">🇬🇧 English</span>
          <p>{fact.en}</p>
        </div>
        <div className="divider" />
        <div className="lang-section">
          <span className="lang-label">🇯🇵 日本語</span>
          <p>{fact.ja}</p>
        </div>
      </div>

      <div className="card-footer">
        <button className="next-btn" onClick={onNext}>
          下一条冷知识 →
        </button>
      </div>
    </div>
  )
}
