function Notification({ isSuccess }) {
  return (
    <div className={isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
      {isSuccess ? 'Operation successful!' : 'An error occurred.'}
    </div>
  );
}

export default Notification;

