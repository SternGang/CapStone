const Notification = ({ message }) => {

  if (message === null) {
    return null
  }

  return (
      <div className="is-size-2 has-text-danger has-text-centered" color>{message}</div>
  )
}

export default Notification