export default function LoadingSpinner({ message = "Ładowanie...", className = "" }) {
  return (
    <div className={`loading-container ${className}`}>
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p>{message}</p>
    </div>
  );
}
