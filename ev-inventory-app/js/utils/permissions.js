// utils/permissions.js

export const ROLE_PERMISSIONS = {
    SuperAdmin: {
        canAddUsers: true,
        manageLocations: true,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: true,
        settings: true
    },
    CEO: {
        canAddUsers: false,
        manageLocations: false,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: false,
        settings: true
    },
    COO: { // Optional if COO same as CEO
        canAddUsers: false,
        manageLocations: false,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: false,
        settings: true
    },
    Agent: {
        canAddUsers: false,
        manageLocations: false,
        manageContractors: false,
        inventoryCrud: true,
        viewDashboard: false,
        viewIndex: false,
        productsCrud: false,
        settings: false
    }
};

// Utility
export function getPermissions(role) {
    return ROLE_PERMISSIONS[role] || {};
}
export function can(permission) {
    // You must import getCurrentUser from users.js
    const user = window.getCurrentUser ? window.getCurrentUser() : null;
    return user && getPermissions(user.role)[permission];
}
