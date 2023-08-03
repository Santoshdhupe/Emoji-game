// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, isGameRunning, topScore} = props
  return (
    <div className="navBar">
      <div className="navContainer1">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameRunning && (
        <div className="navContainer2">
          <p className="scores">Score: {score}</p>
          <p className="scores">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default Navbar
