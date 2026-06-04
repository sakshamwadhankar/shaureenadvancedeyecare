import React, { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

export default function StepAuth({ onAuthSuccess, onBack }) {
  const { loginWithGoogle, mockLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginWithGoogle();
      onAuthSuccess({
        name: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
      });
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Network error. Please check your connection.');
      } else {
        // Display the actual error message to help debug
        setError(`Error: ${err.message} (${err.code})`);
      }
      console.error('Auth error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3770bf]/10 text-[#3770bf] text-sm font-medium mb-3">
          <ShieldCheck size={15} />
          Step 2 of 3
        </div>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Philosopher', sans-serif" }}>
          Verify Your Identity
        </h2>
        <p className="text-[#8dc2ff] text-sm mt-1">Quick sign-in to secure your appointment</p>
      </div>

      {/* Auth Card */}
      <div className="bg-[#f3f6ff] rounded-2xl p-8 text-center space-y-6">
        {/* Decorative icon */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-white shadow-lg shadow-[#3770bf]/10 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Sign in with Google</h3>
          <p className="text-sm text-gray-500">We use Google sign-in to auto-fill your details and keep your booking secure.</p>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Sign-in Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className={`
            w-full py-3.5 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-3
            ${loading
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white border-2 border-[#3770bf]/20 text-gray-700 shadow-md hover:shadow-lg hover:border-[#3770bf]/40 hover:scale-[1.01] active:scale-[0.99]'
            }
          `}
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </>
          )}
        </button>

        {import.meta.env.DEV && (
          <button
            onClick={() => {
              mockLogin({
                uid: 'mock-123',
                displayName: 'Jane Doe (Demo)',
                email: 'jane.doe@example.com',
                photoURL: ''
              });
              onAuthSuccess({
                name: 'Jane Doe (Demo)',
                email: 'jane.doe@example.com',
                photoURL: ''
              });
            }}
            className="w-full py-2.5 rounded-xl border border-dashed border-[#3770bf]/30 text-xs font-semibold text-[#3770bf] hover:bg-[#3770bf]/5 transition-all duration-200"
          >
            Demo Bypass Sign In (Dev Only)
          </button>
        )}
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="w-full py-3 rounded-xl text-sm font-medium text-[#8dc2ff] hover:text-[#3770bf] hover:bg-[#f3f6ff] transition-all duration-200"
      >
        ← Back to Date & Time
      </button>
    </div>
  );
}
