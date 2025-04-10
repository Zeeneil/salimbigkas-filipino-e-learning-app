import { auth, db } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const doCreateUserWithEmailAndPassword = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, {
    displayName: name,
  });
  await sendEmailVerification(user);
  await setDoc(doc(db, 'users', user.uid), {
    role: 'student',
    name,
    email,
    createdAt: new Date(),
    emailVerified: user.emailVerified,
    uid: user.uid,
    photoURL: user.photoURL || null,
    phoneNumber: user.phoneNumber || null,
    providerId: user.providerData[0]?.providerId || 'password',
  });

  return user;
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  if (!user.emailVerified) {
    console.warn('Email not verified. Please verify your email.');
    // Optionally, you can resend the verification email here
    await sendEmailVerification(user);
  }
  
  console.log('User object:', user);

  return user;
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  await setDoc(doc(db, 'users', user.uid), {
    name: user.displayName || 'Google User',
    email: user.email,
    createdAt: new Date(),
  });

  return user;
};

export const doSignInWithApple = async () => {
  const provider = new OAuthProvider('apple.com');
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName || 'Apple User',
      email: user.email,
      createdAt: new Date(),
    });
    return user;
  } catch (error) {
      console.error('Error signing in with Apple:', error);
    throw error;
  }
};

export const doSignInWithMicrosoft = async () => {
  const provider = new OAuthProvider('microsoft.com');
  provider.setCustomParameters({
    prompt: 'consent',
  });
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  await setDoc(doc(db, 'users', user.uid), {
    name: user.displayName || 'Microsoft User',
    email: user.email,
    createdAt: new Date(),
  });

  return user;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

// Listen for authentication state changes
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Update Firestore with the latest email verification status
      await setDoc(doc(db, 'users', user.uid), {
        emailVerified: user.emailVerified,
      }, { merge: true });
      callback(user);
    } else {
      callback(null);
    }
  });
};

// Reauthenticate the user with email and password
export const doReauthenticateWithEmail = async (email, password) => {
  const credential = EmailAuthProvider.credential(email, password);
  await reauthenticateWithCredential(auth.currentUser, credential);
};

export const doDeleteUser = async (email, password) => {
  const user = auth.currentUser;
  if (user) {
    try {
      doReauthenticateWithEmail(email, password);
      // Wait for reauthentication to complete
      // Proceed with account deletion
      await setDoc(doc(db, 'users', user.uid), {}, { merge: false });
      await deleteUser(user);
    } catch (error) {
      console.error('Error during account deletion:', error);
      throw error;
    }
  } else {
    throw new Error('No user is currently signed in.');
  }
};

// Update the current user's email
export const doUpdateEmail = async (newEmail) => {
  await updateEmail(auth.currentUser, newEmail);
};

// Update the current user's profile
export const doUpdateProfile = async (profile) => {
  await updateProfile(auth.currentUser, profile);
};