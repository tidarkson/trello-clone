import { React, Component } from "react";

class ConditionalRender extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <button>Reveal div</button>
            <div>This div is hidden by default</div>
        </div>)
    }
}

export default ConditionalRender