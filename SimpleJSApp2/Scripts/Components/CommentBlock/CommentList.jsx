import * as DCT from "DCT";
import { React } from "Global";
import { CommentItem } from "Forms";

export class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return DCT.Execute(() => {
            var commentNodes = this.props.data.map(function (comment) {
                return (
                    <CommentItem author={comment.author} key={comment.id}>
                        {comment.text}
                    </CommentItem>
                );
            });
            return (
                <div>{commentNodes}</div>
            );
        });
    }
}