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
        productsCrud: true, // Make sure this exists
        settings: true,
        viewAuditLog: true,
        exportAuditLog: true,
        accessAllPages: true,
        canAddInventory: true,
        canDeleteInventory: true
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
        exportAuditLog: true,
        accessAllPages: true,
        canAddInventory: true,
        canDeleteInventory: true
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
        exportAuditLog: false,
        accessAllPages: true,
        canAddInventory: true,
        canDeleteInventory: true
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
        viewAuditLog: false,
        exportAuditLog: false,
        accessAllPages: false,
        canAddInventory: false,
        canDeleteInventory: false,
        canMoveInventory: true,
        canEditInventory: true,
        canChangeStatus: true
    }
};

export async function canMoveInventory() {
    const role = await getCurrentUserRole();
    if (role === 'Agent') {
        return await can('canMoveInventory');
    }
    return await can('inventoryCrud');
}

export async function canEditInventory() {
    const role = await getCurrentUserRole();
    if (role === 'Agent') {
        return await can('canEditInventory');
    }
    return await can('inventoryCrud');
}

export async function canChangeStatus() {
    const role = await getCurrentUserRole();
    if (role === 'Agent') {
        return await can('canChangeStatus');
    }
    return await can('inventoryCrud');
}

export async function can(permission) {
    try {
      let userRole = await getCurrentUserRole();
      
      if (!userRole) {
        console.warn('No user role found, checking localStorage fallback...');
        const fallbackRole = localStorage.getItem('userRole');
        if (fallbackRole) {
          console.log('Using fallback role:', fallbackRole);
          userRole = fallbackRole;
          // FIXED: Cache the role for future use
          localStorage.setItem('lastUserRole', fallbackRole);
        } else {
          // FIXED: Try last known role
          const lastRole = localStorage.getItem('lastUserRole');
          if (lastRole) {
            console.log('Using last known role:', lastRole);
            userRole = lastRole;
          }
        }
      }
      
      if (!userRole) {
        console.error('No user role found in any fallback method');
        return false;
      }
      
      // FIXED: Store successful role for future fallback
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('lastUserRole', userRole);
      
      const hasPermission = ROLE_PERMISSIONS[userRole]?.[permission] || false;
      console.log(`Permission check: ${userRole} -> ${permission} = ${hasPermission}`);
      return hasPermission;
    } catch (error) {
      console.error('Permission check error:', error);
      return false;
    }
  }

// Rest of your existing functions...
export function getPermissions(role) {
    return ROLE_PERMISSIONS[role] || {};
}

export async function canManageInventory() {
    return await can('inventoryCrud');
}

export async function canAddInventory() {
    return await can('canAddInventory');
}

export async function canDeleteItems() {
    return await can('canDeleteInventory');
}

export async function shouldRedirectToInventory() {
    const role = await getCurrentUserRole();
    return role === 'Agent';
}

let _cachedRole = null;
export async function getCurrentUserRoleCached() {
    if (_cachedRole) return _cachedRole;
    _cachedRole = await getCurrentUserRole();
    return _cachedRole;
}

export function clearRoleCache() {
    _cachedRole = null;
}

export async function canAccessPage(pageName) {
    try {
        const role = await getCurrentUserRole();
        
        if (role === 'Agent') {
            return ['inventory', 'login'].includes(pageName);
        }
        
        return true;
    } catch (error) {
        console.error('Error checking page access:', error);
        return false;
    }
}

export async function getAllowedPages() {
    try {
        const role = await getCurrentUserRole();
        
        if (role === 'Agent') {
            return ['inventory'];
        }
        
        return ['index', 'inventory', 'dashboard', 'settings', 'audit', 'products'];
    } catch (error) {
        console.error('Error getting allowed pages:', error);
        return ['inventory'];
    }
}