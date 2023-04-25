import {Component} from "react";


class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <h3>id : {id}</h3>
                <h3>title : {title}</h3>
                <h3>body : {body}</h3>
            </div>
        )
    }
}


export {
    Post
}
