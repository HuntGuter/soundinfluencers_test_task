import './App.css'
import './loader.css'

function App() {
  
  return (
    <>
        <div className="loader">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bar"></div>
        ))}
      </div>
    </>
  )
}

export default App
