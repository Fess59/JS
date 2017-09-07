import * as DCT from "DCT";
import { React } from "Global";

export class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return DCT.Execute(() => {
            return (<div>{this.props.item}</div>);
        });
    }
}