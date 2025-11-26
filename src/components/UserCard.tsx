function UserCard({ name, role, imageUrl }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
      <div className="ml-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}

// Using it with different data
function TeamList() {
  return (
    <div className="space-y-4">
      <UserCard 
        name="Alice Johnson" 
        role="Designer" 
        imageUrl="/alice.jpg" 
      />
      <UserCard 
        name="Bob Smith" 
        role="Developer" 
        imageUrl="/bob.jpeg" 
      />
    </div>
  );
}

export default UserCard;
