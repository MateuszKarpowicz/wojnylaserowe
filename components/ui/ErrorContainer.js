export default function ErrorContainer({ 
  error, 
  title = "Ups! Coś poszło nie tak", 
  onRetry = () => window.location.reload(),
  retryText = "Spróbuj ponownie",
  className = "" 
}) {
  if (!error) return null;

  return (
    <div className={`error-container ${className}`}>
      <div className="error-content">
        <h2>{title}</h2>
        <p>{error}</p>
        <div className="error-actions">
          <button 
            onClick={onRetry}
            className="retry-button"
          >
            {retryText}
          </button>
        </div>
      </div>
    </div>
  );
}
