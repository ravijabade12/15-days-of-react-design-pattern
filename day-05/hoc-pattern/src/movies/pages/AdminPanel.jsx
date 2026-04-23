/**
 * AdminPanel - Admin-only dashboard
 * This component is wrapped with withUserDataAndPermissions HOC
 * Only visible to users with "admin" permission
 */
function AdminPanel({ userData, hasPermission }) {
  return (
    <div className="p-6 bg-purple-50 border border-purple-300 rounded-lg">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">⚙️ Admin Panel</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">System Statistics</h3>
          <p className="text-gray-600">Users Online: <span className="font-bold text-purple-600">1,234</span></p>
          <p className="text-gray-600">Total Permissions: <span className="font-bold text-purple-600">{userData.permissions.length}</span></p>
        </div>

        <div className="bg-white p-4 rounded border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Admin Actions</h3>
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 font-medium mb-2">
            Manage Users
          </button>
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 font-medium mb-2">
            View Logs
          </button>
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 font-medium">
            System Settings
          </button>
        </div>

        <div className="bg-purple-100 p-3 rounded border border-purple-300">
          <p className="text-sm text-purple-700">
            Current Admin: <span className="font-bold">{userData.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
