# Firebase Troubleshooting Guide for WealthWeave

This guide will help you troubleshoot common issues with Firebase integration in the WealthWeave application.

## Common Issues and Solutions

### 1. Data Not Saving to Firestore

If your form submissions are not being saved to Firestore, check the following:

#### Firestore Database Setup
- **Verify Database Creation**: Make sure you've created a Firestore database in your Firebase project.
  - Go to Firebase Console > Firestore Database > Create database
  - Choose either production or test mode to start

#### Firestore Rules
- **Check Security Rules**: Ensure your Firestore security rules allow write operations.
  - Go to Firebase Console > Firestore Database > Rules
  - For testing, you can use the rules in the `firestore.rules` file in this project
  - Copy and paste these rules into your Firebase Console

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{document=**} {
      allow read, write: if true;
    }
    match /users/{document=**} {
      allow read, write: if true;
    }
  }
}
```

#### Firebase Configuration
- **Verify Project Configuration**: Make sure your Firebase configuration in `src/services/firebase.ts` matches the values from your Firebase project.
  - Go to Firebase Console > Project Settings > Your Apps > SDK setup and configuration
  - Compare these values with what's in your code

### 2. Testing Firebase Connection

We've added a test page to help diagnose Firebase connection issues:

1. Navigate to `/firebase-test` in your application
2. Try both "Test Lead Creation" and "Test User Creation" buttons
3. Check the browser console (F12 > Console) for detailed error messages

### 3. Browser Console Errors

Common error messages and their solutions:

#### "Missing or insufficient permissions"
- This indicates a Firestore rules issue
- Update your Firestore rules as shown above

#### "FirebaseError: [code=not-found]: The project [project-id] does not exist or does not have Firestore enabled"
- Make sure you've created a Firestore database in your project
- Go to Firebase Console > Firestore Database > Create database

#### "FirebaseError: [code=invalid-argument]: Value for argument "documentRef" is not a valid resource path"
- This can happen if your collection path is incorrect
- Check that you're using the correct collection names ("users" and "leads")

### 4. Network Issues

- **CORS Issues**: If you see CORS-related errors, make sure your Firebase project is properly configured for your domain
- **Firewall Issues**: Ensure your network allows connections to Firebase servers

### 5. Firebase Project Setup

If you're still having issues, try these steps:

1. **Verify API Key Activation**: 
   - Go to Google Cloud Console > APIs & Services > Credentials
   - Make sure your API key is active and has the necessary permissions

2. **Check Firebase Plan**: 
   - Some features may require a paid plan
   - For basic Firestore usage, the Spark (free) plan should be sufficient

3. **Recreate Firebase Project**:
   - As a last resort, create a new Firebase project
   - Update your configuration with the new project details

## Testing Your Connection

To verify your Firebase connection is working:

1. Visit `/firebase-test` in your application
2. Run the test and check the results
3. If successful, you should see a confirmation message
4. Check your Firebase Console to see if the test data was saved

## Getting Help

If you're still experiencing issues:
- Check the [Firebase Documentation](https://firebase.google.com/docs)
- Search for your error message on [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)
- Review the Firebase section of your browser's console for detailed error messages 