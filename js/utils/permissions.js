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
export async function can(permission) {
    const role = await getCurrentUserRole();
    return !!getPermissions(role)[permission];
  }
