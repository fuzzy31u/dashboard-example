import * as React from 'react';

export interface Props {
    id: number;
    company: string;
}

function Summary({id, company}: Props) {
    return (
        <div>Hello {company}</div>
    );
}

export default Summary;