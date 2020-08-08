import React from 'react';

const Hello = () => {
    return (
        React.createElement('div', { id: 'hello', className: 'dummy-class' },
            React.createElement('h1', { id: 'innerHello' }, 'Hello Ahbi'))
    )
}

export default Hello;