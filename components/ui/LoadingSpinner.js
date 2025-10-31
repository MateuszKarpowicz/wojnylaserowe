import uiData from '@/content/texts/ui.json';
import { cn } from '@/lib/utils';

export default function LoadingSpinner({ message = uiData.loading.default, className = "" }) {
  return (
    <div className={cn('loading-container', className)}>
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p>{message}</p>
    </div>
  );
}
