"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-neutral-900">
          <p className="font-serif text-body text-neutral-600 mb-4">
            Something went wrong. Please refresh the page.
          </p>
          <a
            href="/"
            className="font-serif text-nav tracking-[0.08em] text-neutral-900 underline hover:no-underline"
          >
            Return home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
