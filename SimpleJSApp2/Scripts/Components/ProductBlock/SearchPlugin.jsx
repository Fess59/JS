import * as DCT from "DCT";
import { React } from "Global";

export class SearchPlugin extends React.Component {
    constructor(props) {
        super(props);
        DCT.Execute(() => {
            this.onTextChanged = this.onTextChanged.bind(this);
        });
    }
    onTextChanged(e) {
        DCT.Execute(() => {
            var text = e.target.value.trim();   // удаляем пробелы
            this.props.filter(text); // передаем введенный текст в родительский компонент
        });
    }
    render() {
        return DCT.Execute(() => {
            return <input placeholder="Поиск" onChange={this.onTextChanged} />;
        });
    }
}
