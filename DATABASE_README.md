# WealthWeave Database Setup

This document explains how the database functionality for WealthWeave works, specifically for storing user signups and lead information.

## Overview

WealthWeave uses Google Firebase (Firestore) as its database system to store two types of data:
1. **Leads** - People who enter their email on the homepage or click signup buttons
2. **Users** - People who complete the full signup form with detailed information

## Database Structure

The database has two collections:

### Leads Collection
- **email**: The email address submitted (or 'unknown' for click-only tracking)
- **source**: Where the lead came from (homepage, resources page, about page, etc.)
- **createdAt**: Timestamp when the lead was created

### Users Collection
- **firstName**: User's first name
- **lastName**: User's last name
- **email**: User's email address
- **experience**: Selected experience level (beginner, intermediate, advanced)
- **interests**: Array of selected interest areas
- **createdAt**: Timestamp when the user account was created

## How the Data is Collected

1. **Homepage Email Form**:
   - When a user submits their email on the homepage, it's stored in the "leads" collection
   - Then the user is redirected to the signup page with their email pre-filled

2. **Signup Page**:
   - Collects comprehensive user information
   - Stores in the "users" collection when submitted
   - Redirects to Learning Center

3. **Other Pages**:
   - "Get Started" buttons on About page track clicks in the leads collection
   - "Subscribe" button on Resources page does the same

## Accessing the Data

### Admin Dashboard

An admin dashboard is available at `/admin` that shows:
- All collected leads with timestamps
- All user signups with detailed information
- Export functionality for CSV downloads

### Firebase Console

For more advanced management:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select the "wealth-weave" project
3. Go to "Firestore Database" to view and manage data directly

## Firebase Configuration

The Firebase configuration is in `src/services/firebase.ts` and should be updated with your actual Firebase project configuration. For production, use environment variables instead of hardcoded values:

```js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## Security Considerations

1. The current setup is for development/demo purposes. For production:
   - Enable Firebase Authentication for the admin dashboard
   - Set up Firestore Security Rules to restrict data access
   - Use environment variables for Firebase configuration
   - Consider server-side validation of submissions

2. GDPR Compliance:
   - Add proper privacy policy explaining data collection
   - Implement consent mechanisms for marketing emails
   - Add functionality for users to request their data or deletion

## Future Enhancements

Potential enhancements to the system:
- Email verification flow
- User authentication system
- Integration with email marketing services (Mailchimp, etc.)
- More detailed analytics tracking
- Role-based admin access 