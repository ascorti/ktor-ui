import React, { Component } from 'react'

class AppNode extends Component {
    static PING_TIMEOUT_DEFAULT_MS = 10 * 1000;

    constructor(props) {
        super(props);
        this.state = { url: props.url, name: props.name, watcherUrl: props.watcherUrl }
    }

    pingServer() {
        fetch(this.state.watcherUrl + "/_adminApi/ping", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                "publicAddress": this.state.url
            }),
        })
            .then(res => res.status)
            .then(res => this.setState({ state: (res === 200 ? "OK": "NOT OK") }));


    }

    componentDidMount() {
        this.pingServer();
        this.interval = setInterval(() => this.pingServer(), AppNode.PING_TIMEOUT_DEFAULT_MS);
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