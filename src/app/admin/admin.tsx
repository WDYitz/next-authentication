export const AdminPage = () => {
  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <p>This is only accessible to users with the ADMIN role</p>
      <a href="/dashboard">Go to dashboard</a>
    </div>
  );
};


