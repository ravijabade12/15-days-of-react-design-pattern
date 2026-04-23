// Mock user data
const mockUserData = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "admin",
  permissions: ["read", "write", "report", "admin"]
};

/**
 * Higher Order Component that injects user data and permission checking
 * @param {React.Component} WrappedComponent - The component to wrap
 * @param {string} requiredPermission - Permission needed to view this component (optional)
 * @returns {React.Component} - Enhanced component with user data and permission checking
 */
export function withUserDataAndPermissions(WrappedComponent, requiredPermission = null) {
  return function WithUserDataAndPermissionsComponent(props) {
    // Simulate fetching user data
    const userData = mockUserData;
    
    // Check if user has required permission
    const hasPermission = requiredPermission 
      ? userData.permissions.includes(requiredPermission)
      : true;

    // If permission is required but user doesn't have it, show access denied
    if (requiredPermission && !hasPermission) {
      return (
        <div className="p-6 bg-red-100 border border-red-400 rounded">
          <h2 className="text-2xl font-bold text-red-600 mb-2">❌ Access Denied</h2>
          <p className="text-red-700">
            You don't have permission to view this page. Required permission: <strong>{requiredPermission}</strong>
          </p>
        </div>
      );
    }

    // Pass user data and permission status as props
    return (
      <WrappedComponent 
        userData={userData}
        hasPermission={hasPermission}
        {...props} 
      />
    );
  };
}
