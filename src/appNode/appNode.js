import React, { Component } from 'react'

class AppNode extends Component {
    constructor(props) {
        super(props);
        this.state = { url: props.url, name: props.name, watcherUrl: props.watcherUrl }
    }

    pingServer() {
        fetch(this.state.watcherUrl + "/_adminApi/ping")
            .then(res => res.status)
            .then(res => this.setState({ state: (res === 200 ? "OK": "NOT OK") }));
    }

    componentDidMount() {
        this.pingServer();
        this.interval = setInterval(() => this.pingServer(), 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>URL: {this.state.url}</p>
                <p>State: {this.state.state}</p>
            </div>
        )
    }
}

export default AppNode