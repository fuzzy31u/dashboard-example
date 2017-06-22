import * as React from 'react';

export interface Props {
    name?: string;
}

class App extends React.Component<Props, undefined> {
    public render() {
        return <div>this is App Component</div>;
    }
}

export default App;