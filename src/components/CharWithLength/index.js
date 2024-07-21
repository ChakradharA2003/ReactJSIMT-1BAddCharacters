import './index.css'

const CharWithLength = props => {
  const {charText, charLength} = props
  return (
    <li>
      <p className="character-list-with-length">
        {charText} :<span className="char-length">{charLength}</span>
      </p>
    </li>
  )
}
export default CharWithLength
