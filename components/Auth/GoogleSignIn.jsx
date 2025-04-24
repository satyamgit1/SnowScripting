import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../lib/firebase'

const GoogleSignIn = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}