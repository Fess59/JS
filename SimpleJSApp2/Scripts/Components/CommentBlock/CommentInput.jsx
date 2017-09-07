import * as DCT from "DCT";
import { React } from "Global";

export class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        DCT.Execute(() => {
            this.state = { author: "123", text: "123" };
            this.handleAuthorChange = this.handleAuthorChange.bind(this);
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        });
    }
    handleAuthorChange(e) {
        DCT.Execute(() => {
            if (e.target.value != null)
                this.setState({ author: e.target.value });
        });
    }
    handleTextChange(e) {
        DCT.Execute(() => {
            if (e.target.value != null)
                this.setState({ text: e.target.value });
        });

    }
    handleSubmit(e) {
        DCT.Execute(() => {
            e.preventDefault();
            if (this == null) throw new Error("this == null");
            if (this.state == null) throw new Error("state == null");
            var author = this.state.author.trim();
            var text = this.state.text.trim();
            if (!text || !author) return;
            this.props.onCommentSubmit({ author: author, text: text });
            this.setState({ author: "", text: "" });
        });
    }
    render() {
        return DCT.Execute(() => {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={this.handleAuthorChange} />
                    <input
                        type="text"
                        placeholder="Say something..."
                        value={this.state.text}
                        onChange={this.handleTextChange} />
                    <input type="submit" />
                </form>);
        });
    }
}

