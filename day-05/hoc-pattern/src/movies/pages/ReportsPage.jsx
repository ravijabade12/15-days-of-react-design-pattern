/**
 * ReportsPage - Reports dashboard
 * This component is wrapped with withUserDataAndPermissions HOC
 * Only visible to users with "report" permission
 */
function ReportsPage({ userData, hasPermission }) {
  return (
    <div className="p-6 bg-green-50 border border-green-300 rounded-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-4">📊 Reports</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Reports</h3>
          <ul className="space-y-2">
            <li className="flex items-center p-3 bg-green-50 rounded hover:bg-green-100 cursor-pointer">
              <span className="text-xl mr-3">📈</span>
              <span className="font-medium text-gray-900">Monthly Sales Report</span>
            </li>
            <li className="flex items-center p-3 bg-green-50 rounded hover:bg-green-100 cursor-pointer">
              <span className="text-xl mr-3">👥</span>
              <span className="font-medium text-gray-900">User Activity Report</span>
            </li>
            <li className="flex items-center p-3 bg-green-50 rounded hover:bg-green-100 cursor-pointer">
              <span className="text-xl mr-3">💰</span>
              <span className="font-medium text-gray-900">Financial Report</span>
            </li>
            <li className="flex items-center p-3 bg-green-50 rounded hover:bg-green-100 cursor-pointer">
              <span className="text-xl mr-3">🔍</span>
              <span className="font-medium text-gray-900">Performance Analysis</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Options</h3>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-medium mb-2">
            📥 Download as PDF
          </button>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-medium">
            📋 Export as CSV
          </button>
        </div>

        <div className="bg-green-100 p-3 rounded border border-green-300">
          <p className="text-sm text-green-700">
            Reports available for: <span className="font-bold">{userData.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
