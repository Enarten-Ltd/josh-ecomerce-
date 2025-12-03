function UserProfile({ user = {} }) {
  return (
    <div>
      <h2>{user.name || "Guest"}</h2>
      {user.isPremium && (
        <span className="bg-yellow-200 px-2 py-1 rounded">
          Premium Member
        </span>
      )}
    </div>
  );
}

export default UserProfile;