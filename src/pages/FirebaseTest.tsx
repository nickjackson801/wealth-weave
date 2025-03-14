import React, { useState } from 'react';
import { saveEmailSignup, saveUserData } from '../services/firebase';

const FirebaseTest = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [testType, setTestType] = useState<'lead' | 'user'>('lead');

  const runTest = async () => {
    setIsLoading(true);
    setTestResult('');
    
    try {
      if (testType === 'lead') {
        // Test lead creation
        const testEmail = `test-${Date.now()}@example.com`;
        const result = await saveEmailSignup(testEmail, 'firebase_test');
        
        if (result.success) {
          setTestResult(`✅ Lead saved successfully with ID: ${result.id}`);
        } else {
          setTestResult(`❌ Failed to save lead: ${JSON.stringify(result.error)}`);
        }
      } else {
        // Test user creation
        const testUser = {
          email: `test-${Date.now()}@example.com`,
          firstName: 'Test',
          lastName: 'User',
          experience: 'beginner',
          interests: ['investment', 'retirement']
        };
        
        const result = await saveUserData(testUser);
        
        if (result.success) {
          setTestResult(`✅ User saved successfully with ID: ${result.id}`);
        } else {
          setTestResult(`❌ Failed to save user: ${JSON.stringify(result.error)}`);
        }
      }
    } catch (error) {
      console.error('Test error:', error);
      setTestResult(`❌ Error during test: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Firebase Connection Test</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Test Type</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setTestType('lead')}
              className={`px-4 py-2 rounded-md ${
                testType === 'lead' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Test Lead Creation
            </button>
            <button
              onClick={() => setTestType('user')}
              className={`px-4 py-2 rounded-md ${
                testType === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Test User Creation
            </button>
          </div>
        </div>
        
        <button
          onClick={runTest}
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Testing...' : 'Run Firebase Test'}
        </button>
        
        {testResult && (
          <div className={`mt-6 p-4 rounded-md ${testResult.startsWith('✅') ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={testResult.startsWith('✅') ? 'text-green-700' : 'text-red-700'}>
              {testResult}
            </p>
          </div>
        )}
        
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-medium mb-2">Troubleshooting Tips:</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Check browser console for detailed error messages</li>
            <li>Verify Firebase project settings in Firebase Console</li>
            <li>Ensure Firestore database has been created in your project</li>
            <li>Check Firestore rules to allow read/write operations</li>
            <li>Verify network connectivity to Firebase servers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirebaseTest; 