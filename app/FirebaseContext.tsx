"use client"
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth"
import { auth, db } from "./Firebase"
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"

interface AuthContextProps {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  error: string | null
  setError: (error: string | null) => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        console.log("...onAuthStateChanged", user)
        // Check if user exists in database
        const checkUserExists = async () => {
          const userDocRef = doc(db, "users", user.uid)
          const userDocSnapshot = await getDoc(userDocRef)

          // if user does not exist, create one in database
          if (!userDocSnapshot.exists()) {
            await setDoc(userDocRef, {
              email: user.email,
              displayName: user.displayName,
              userId: uuidv4(),
              created_at: Timestamp.now(),
            })
            console.log("created user in database!")
          } else {
            console.log("user already exists in database")
          }
        }
        checkUserExists()
      } else {
        console.error("user is null")
      }
    })

    return () => unsubscribe()
  }, [])

  const handleAuthError = (error: any): void => {
    console.error("Firebase Authentication Error:", error.message)
    // You can handle the error as needed, e.g., show a user-friendly message
  }

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      // handleAuthError(error)
      setError(error.message)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      await auth.signOut()
      setUser(null)
    } catch (error) {
      handleAuthError(error)
    }
  }

  const signUp = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      handleAuthError(error)
    }
    console.log("signUp promise complete")
  }

  const value: AuthContextProps = {
    user,
    signIn,
    signOut,
    signUp,
    error,
    setError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
