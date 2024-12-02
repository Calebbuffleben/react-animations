import withAuth from './withAuth';
import Dashboard from './Dashboard';

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;