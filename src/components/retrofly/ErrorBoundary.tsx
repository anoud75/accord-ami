import { Component, ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error) { console.error("App error:", error); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <p className="eyebrow mb-4">Something broke</p>
            <h2 className="display-3 mb-4">An unexpected error occurred.</h2>
            <button onClick={() => location.reload()} className="ink-link">
              Reload the page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
