// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, selectedEmoji} = props
  const {emojiName, emojiUrl, id} = emojisList
  const onclickEmoji = () => {
    selectedEmoji(id)
  }
  return (
    <li className="list">
      <button className="emojiContainer" type="button" onClick={onclickEmoji}>
        <img className="emojiImage" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
