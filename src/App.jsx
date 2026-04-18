import { useState } from 'react'
import FactCard from './components/FactCard'
import { getRandomFact } from './data/facts'

export default function App() {
  const [fact, setFact] = useState(() => getRandomFact())

  function handleNext() {
    setFact(getRandomFact(fact.id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>每日冷知识</h1>
        <p className="subtitle">每次刷新，探索一个你不知道的世界</p>
      </header>
      <main>
        <FactCard fact={fact} onNext={handleNext} />
      </main>
      <footer className="app-footer">
        <p>共 15 条冷知识 · 随机探索</p>
      </footer>
    </div>
  )
}
