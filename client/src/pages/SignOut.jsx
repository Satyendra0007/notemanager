import { NoteContext } from '../store/NoteContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {

  const Navigate = useNavigate()
  const { deleteFromLocalStorage, isLoggedIn } = useContext(NoteContext)

  useEffect(() => {
    if (!isLoggedIn) {
      Navigate("/login")
    }
    else {
      deleteFromLocalStorage()
      Navigate("/")
    }
  }, [])

  return (
    <div>
      Logged Out
    </div>
  )
}
