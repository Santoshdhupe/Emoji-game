// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import Navbar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {selectedEmojisList: [], isGameRunning: true, topScore: 0}

  setTopScoreAndFinishGame = presentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (presentScore > topScore) {
      newTopScore = presentScore
    }
    this.setState({topScore: newTopScore, isGameRunning: false})
  }

  selectedEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojisList} = this.state
    const isEmojiPresent = selectedEmojisList.includes(id)
    const selectedEmojisLength = selectedEmojisList.length

    if (isEmojiPresent) {
      this.setTopScoreAndFinishGame(selectedEmojisLength)
    } else {
      if (emojisList.length - 1 === selectedEmojisLength) {
        this.setTopScoreAndFinishGame(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
      }))
    }
  }

  resetGame = () => {
    this.setState({selectedEmojisList: [], isGameRunning: true})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {selectedEmojisList, isGameRunning, topScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffledEmojisList()
    const isWon = selectedEmojisList.length === emojisList.length
    return (
      <div className="appContainer">
        <Navbar
          score={selectedEmojisList.length}
          isGameRunning={isGameRunning}
          topScore={topScore}
        />
        {isGameRunning ? (
          <ul className="emojisList">
            {shuffledEmojis.map(eachEmoji => (
              <EmojiCard
                emojisList={eachEmoji}
                key={eachEmoji.id}
                selectedEmoji={this.selectedEmoji}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={selectedEmojisList.length}
            onclickPlayAgain={this.resetGame}
            isWon={isWon}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
