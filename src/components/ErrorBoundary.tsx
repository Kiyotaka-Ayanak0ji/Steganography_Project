import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState> {
    
    constructor(props: ErrorBoundaryProps) {
        //Call the parent constructor using the inherited props...
        super(props);

        //set initial error state to false...
        this.state = {hasError: false}
    }

    //Update the state for any errors
    //state updation for each child..
    static getDerrivedStateFromError(error: Error): ErrorBoundaryState {
        return {hasError: true};
    }
    
    static componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("Error Boundary caught an error", error);
    }

    render(): ReactNode {

        //Check for an error while rendering components...
        if(this.state.hasError){
            return <div>Error Rendering the component...</div>;
        }

        //Render its children recursively if it has no errors...
        return this.props.children;
    }

}