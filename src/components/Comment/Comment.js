import {Component} from "react";


class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, email, body} = this.props.comment;
        return (
            <div>
                <h3>id : {id}</h3>
                <h3>name : {name}</h3>
                <h3>email : {email}</h3>
                <h3>body : {body}</h3>
            </div>
        )
    }
}


export {
    Comment
}
