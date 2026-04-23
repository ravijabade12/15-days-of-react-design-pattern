/**
 * ProfilePage - Displays logged-in user's information
 * This component is wrapped with withUserDataAndPermissions HOC
 */
function ProfilePage({ userData, hasPermission }) {
  return (
    <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">👤 User Profile</h2>
      
      <div className="space-y-3">
        <div className="bg-white p-3 rounded border border-blue-200">
          <p className="text-gray-600 text-sm">Name</p>
          <p className="text-lg font-semibold text-gray-900">{userData.name}</p>
        </div>
        
        <div className="bg-white p-3 rounded border border-blue-200">
          <p className="text-gray-600 text-sm">Email</p>
          <p className="text-lg font-semibold text-gray-900">{userData.email}</p>
        </div>
        
        <div className="bg-white p-3 rounded border border-blue-200">
          <p className="text-gray-600 text-sm">User ID</p>
          <p className="text-lg font-semibold text-gray-900">#{userData.id}</p>
        </div>
        
        <div className="bg-white p-3 rounded border border-blue-200">
          <p className="text-gray-600 text-sm">Role</p>
          <p className="text-lg font-semibold text-blue-600 capitalize">{userData.role}</p>
        </div>

        <div className="bg-white p-3 rounded border border-blue-200">
          <p className="text-gray-600 text-sm mb-2">Permissions</p>
          <div className="flex flex-wrap gap-2">
            {userData.permissions.map((permission) => (
              <span 
                key={permission}
                className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {permission}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
