// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {onclickPlayAgain, score, isWon} = props
  const result = isWon ? 'You Won' : 'You Lose'
  const scoreDetailsWord = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="winCard">
      <div className="contentContainer">
        <h1 className="resultText">{result}</h1>
        <p className="BestScoreWord">{scoreDetailsWord}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={onclickPlayAgain}>
          Play Again
        </button>
      </div>
      <img className="resultsImage" src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
