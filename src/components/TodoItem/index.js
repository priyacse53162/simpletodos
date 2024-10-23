import './index.css'
const TodoItem = props => {
  const {key, todo, deleteItem} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="todolist">
      <p className="todotitle">{title}</p>
      <button type="button" className="deletebutton" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
