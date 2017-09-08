import * as DCT from "DCT";
import { React } from "Global";

export class ValidationForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var name = this.refs.nameField.value; //this.refs.nameField.value;
        alert("Имя: " + name);
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
                    <input   defaultValue="Tom" ref="nameField" />
                    <input type="submit" value="Отправить" />
                </form>;
  }
}
