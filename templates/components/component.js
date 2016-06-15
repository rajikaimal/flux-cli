import React from 'react';

const SampleComponent = React.createClass({
    getInitialState: function () {
        return {
            open: false
        };
    },
    componentDidMount: function () {
        this.setState({
            open: true
        });
    },
    componentWillUnmount: function () {
        //cleanup code comes here
    },
    render: function () {
        return (
            <div>
                Sample component
                { this.state.open }
            </div>
        );
    }
});

export default SampleComponent;