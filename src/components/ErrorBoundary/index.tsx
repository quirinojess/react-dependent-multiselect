import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
 children?: ReactNode;
}

interface State {
 hasError: boolean;
 errorDescription: {
  message: string;
  stack: string;
 };
}

class ErrorBoundary extends Component<Props, State> {
 public state: State = {
  hasError: false,
  errorDescription: {
   message: "",
   stack: "",
  },
 };

 public static getDerivedStateFromError(e: {
  message: string;
  stack: string;
 }): State {
  // Update state so the next render will show the fallback UI.
  return {
   hasError: true,
   errorDescription: {
    message: e.message,
    stack: e.stack,
   },
  };
 }

 public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  console.error("Uncaught error:", error, errorInfo);
 }

 public render() {
  if (this.state.hasError) {
   return (
    <div className="flex flex-col max-w-sm m-auto gap-2 items-center justify-center">
     <h1 className="font-bold">Ocorreu um erro na aplicação</h1>

     {(import.meta.env.MODE === "development" ||
      import.meta.env.MODE === "test") && (
      <div className="flex flex-col gap-2">
       <span>{this.state.errorDescription.message}</span>
       <span>{this.state.errorDescription.stack}</span>
      </div>
     )}
    </div>
   );
  }

  return this.props.children;
 }
}

export default ErrorBoundary;
