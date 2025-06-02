// utils/users.js

const USERS_KEY = 'cm_users';
const SESSION_KEY = 'cm_session_user';

// For MVP, plain password (hash for production!)
export function loadUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

export function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Add new user (called by SuperAdmin)
export function addUser({username, password, role}) {
    const users = loadUsers();
    if (users.some(u => u.username === username)) throw new Error('Username already exists');
    users.push({username, password, role});
    saveUsers(users);
}

// Simple login (returns user object or throws)
export function login(username, password) {
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) throw new Error('Invalid username or password');
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
}

// Logout
export function logout() {
    localStorage.removeItem(SESSION_KEY);
}

// Get current logged-in user (null if none)
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}

// Change password (future enhancement)
export function changePassword(username, newPassword) {
    const users = loadUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1) throw new Error('User not found');
    users[idx].password = newPassword;
    saveUsers(users);
}
