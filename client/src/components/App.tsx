import * as React from 'react';

export interface Props {
    name?: string;
}

class App extends React.Component<Props, undefined> {
    public render() {
        return <div>Hello {name}!</div>;
    }
}

export default App;