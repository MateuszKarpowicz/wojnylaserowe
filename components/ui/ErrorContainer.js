import uiData from '@/content/texts/ui.json';

export default function ErrorContainer({ 
  error, 
  title = uiData.error.default, 
  onRetry = () => window.location.reload(),
  retryText = uiData.error.retry,
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
