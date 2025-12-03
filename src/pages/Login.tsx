
function LoginStatus({ isLoggedIn, username }) {
  const renderContent = () => {
    if (isLoggedIn) {
      return (
        <div className="flex items-center gap-2">
          <span>Welcome, {username}!</span>
          <button className="text-red-500">Logout</button>
        </div>
      );
    } else {
      return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      );
    }
  };
  
  return <div>{renderContent()}</div>;
}

export default Login;
