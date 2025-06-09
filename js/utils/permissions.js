// utils/permissions.js
import { getCurrentUserRole } from './users.js';

export const ROLE_PERMISSIONS = {
    SuperAdmin: {
        canAddUsers: true,
        manageLocations: true,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: true,
        settings: true,
        viewAuditLog: true,
        exportAuditLog: true
    },
    CEO: {
        canAddUsers: false,
        manageLocations: false,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: false,
        settings: true,
        viewAuditLog: true,
        exportAuditLog: true
    },
    COO: {
        canAddUsers: false,
        manageLocations: false,
        manageContractors: true,
        inventoryCrud: true,
        viewDashboard: true,
        viewIndex: true,
        productsCrud: false,
        settings: true,
        viewAuditLog: true,
        exportAuditLog: false
    },
    Agent: {
        canAddUsers: false,
        manageLocations: false,
        manageContractors: false,
        inventoryCrud: true,
        viewDashboard: false,
        viewIndex: false,
        productsCrud: false,
        settings: false,
        viewAuditLog: true, // Can view their own entries only
        exportAuditLog: false
    }
};

// Utility functions
export function getPermissions(role) {
    return ROLE_PERMISSIONS[role] || {};
}

export async function can(permission) {
    const role = await getCurrentUserRole();
    return !!getPermissions(role)[permission];
}