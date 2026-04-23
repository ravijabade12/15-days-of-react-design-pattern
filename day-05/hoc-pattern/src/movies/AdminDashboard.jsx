import { withUserDataAndPermissions } from "./hoc/withUserDataAndPermissions";
import ProfilePage from "./pages/ProfilePage";
import AdminPanel from "./pages/AdminPanel";
import ReportsPage from "./pages/ReportsPage";

// Wrap components with the HOC
// ProfilePage doesn't require any specific permission
const ProfilePageWithUserData = withUserDataAndPermissions(ProfilePage);

// AdminPanel requires "admin" permission
const AdminPanelWithUserData = withUserDataAndPermissions(AdminPanel, "admin");

// ReportsPage requires "report" permission
const ReportsPageWithUserData = withUserDataAndPermissions(ReportsPage, "report");

/**
 * AdminDashboard - Main dashboard component that displays all pages
 * Shows user profile, admin panel (if admin), and reports (if has permission)
 */
export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          🏢 Admin Dashboard
        </h1>

        <div className="space-y-6">
          {/* Profile Section - Always Visible */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Profile Section</h2>
            <ProfilePageWithUserData />
          </section>

          {/* Admin Section - Only if admin */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Admin Section</h2>
            <AdminPanelWithUserData />
          </section>

          {/* Reports Section - Only if has report permission */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Reports Section</h2>
            <ReportsPageWithUserData />
          </section>
        </div>

        {/* Footer with HOC Pattern Info */}
        <div className="mt-12 p-4 bg-white rounded-lg border border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            This dashboard demonstrates the <strong>Higher Order Component (HOC)</strong> pattern.
            <br />
            The <code className="bg-gray-100 px-2 py-1 rounded">withUserDataAndPermissions</code> HOC wraps components to inject user data
            and handle permission-based access control.
          </p>
        </div>
      </div>
    </div>
  );
}
