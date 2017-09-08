"use strict";
import * as DCT from "DCT";
import React from "react";
import { CommentList,CommentInput } from "Forms";


export class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        DCT.Execute(() => {
            this.state = { data: [], url: "", submitUrl: "", pollInterval: 2000 };
            this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
            this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        });
    }
    loadCommentsFromServer() {
        DCT.Execute(() => {
            var xhr = new XMLHttpRequest();
            xhr.open("get", this.props.url, true);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                this.setState({ data: data });
            }.bind(this);
            xhr.send();
        });
    }
    handleCommentSubmit(comment) {
        DCT.Execute(() => {
            var data = new FormData();
            data.append("author", comment.author);
            data.append("text", comment.text);
            var xhr = new XMLHttpRequest();
            xhr.open("post", this.props.submitUrl, true);
            xhr.onload = () => {
                this.loadCommentsFromServer();
            };
            xhr.send(data);
        });
    }
    componentDidMount() {
        DCT.Execute(() => {
            this.loadCommentsFromServer();
            window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        });
    }
    render() {
        return DCT.Execute(() => {
            return (
                <div>
                    <h1>Comments  </h1>
                    <CommentList data={this.state.data} />
                    <CommentInput onCommentSubmit={this.handleCommentSubmit} />
                </div>
            );
        });
    }
}

