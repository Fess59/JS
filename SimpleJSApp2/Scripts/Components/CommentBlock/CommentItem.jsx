import * as DCT from "DCT";
import { React, Remarkable } from "Global";

export class CommentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    rawMarkup() {
        return DCT.Execute(() => {
            var md = new Remarkable();
            var rawMarkup = md.render(this.props.children.toString());
            return { __html: rawMarkup };
        });
    }

    render() {
        return DCT.Execute(() => {
            return (
                <div>
                    <h2>
                        {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            );
        });
    }
}