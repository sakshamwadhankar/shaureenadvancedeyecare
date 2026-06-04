import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, provider, signInWithPopup } from './firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // Only overwrite if we aren't currently using a mock session
      if (firebaseUser) {
        setUser(firebaseUser);
        const storageKey = `hospitalv2_profile_${firebaseUser.uid}`;
        const savedProfile = localStorage.getItem(storageKey);
        
        if (savedProfile) {
          try {
            setProfile(JSON.parse(savedProfile));
          } catch (e) {
            console.error('Failed to parse saved profile:', e);
            const initial = { name: firebaseUser.displayName || '', phone: '' };
            setProfile(initial);
            localStorage.setItem(storageKey, JSON.stringify(initial));
          }
        } else {
          const initial = { name: firebaseUser.displayName || '', phone: '' };
          setProfile(initial);
          localStorage.setItem(storageKey, JSON.stringify(initial));
        }
      } else {
        // If logged out from Firebase, check if we had a mock session.
        // If it's a mock session, preserve it. Otherwise, clear.
        setUser((currentUser) => {
          if (currentUser?.uid === 'mock-123') {
            return currentUser;
          }
          setProfile(null);
          return null;
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  };

  const mockLogin = (mockUser) => {
    setUser(mockUser);
    const storageKey = `hospitalv2_profile_${mockUser.uid}`;
    const savedProfile = localStorage.getItem(storageKey);
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (e) {
        setProfile({ name: mockUser.displayName || '', phone: '' });
      }
    } else {
      const initial = { name: mockUser.displayName || '', phone: '' };
      setProfile(initial);
      localStorage.setItem(storageKey, JSON.stringify(initial));
    }
  };

  const logout = async () => {
    if (user?.uid === 'mock-123') {
      setUser(null);
      setProfile(null);
    } else {
      await signOut(auth);
    }
  };

  const updateProfile = (name, phone) => {
    if (!user) return;
    const storageKey = `hospitalv2_profile_${user.uid}`;
    const updated = { name, phone };
    setProfile(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const value = {
    user,
    profile,
    loading,
    loginWithGoogle,
    mockLogin,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
