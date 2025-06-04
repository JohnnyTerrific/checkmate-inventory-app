import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from './firebase.js'; // Import from your centralized file
import { onAuthStateChanged } from "firebase/auth";

export function onUserAuthStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function getCurrentUserProfile() {
  const user = getCurrentUser();
  if (!user) return null;
  const userDocRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
  } else {
      // Auto-create minimal profile if missing
      const profile = {
          email: user.email,
          role: "Agent", // or your default role
          username: user.email.split('@')[0],
          createdAt: new Date().toISOString()
      };
      await setDoc(userDocRef, profile);
      return { id: user.uid, ...profile };
  }
}

export async function addUser(email, password, role) {
    // 1. Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // 2. Add user profile to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email,
      role,
      username: email.split('@')[0], // or however you want to set username
      createdAt: new Date().toISOString()
    });
    return user;
  }

export async function loadUsers() {
    const snapshot = await getDocs(collection(db, "users"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export function getCurrentUserId() {
  return auth.currentUser?.uid || "Unknown";
}

export function getCurrentUser() {
  return auth.currentUser;
}

export function getCurrentUserEmail() {
  return auth.currentUser?.email || "Unknown";
}

export async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export async function logout() {
    await signOut(auth);
}
export async function getCurrentUserRole() {
  const user = getCurrentUser();
  if (!user) return null;
  const userDocRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userDocRef);
  return docSnap.exists() ? docSnap.data().role : null;
}