// pages/signup.js
import { useAuth } from '../services/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignUpForm from '../components/Auth/SignUpForm';

export default function SignUpPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          SnowScripting
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Save and organize your ServiceNow scripts
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}