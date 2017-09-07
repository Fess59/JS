import * as DCT from "DCT";
import { React } from "Global";
import { SearchPlugin } from "Forms";

export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        DCT.Execute(() => {
            this.state = { items: this.props.data.items };
            this.filterList = this.filterList.bind(this);
        });
    }
    filterList(text) {
        DCT.Execute(() => {
            var filteredList = this.props.data.items.filter(function (item) {
                return item.toLowerCase().search(text.toLowerCase()) !== -1;
            });
            this.setState({ items: filteredList });
        });
    }
    render() {
        return DCT.Execute(() => {
            return (
                <div>
                    <h2>{this.props.data.title}</h2>
                    <SearchPlugin filter={this.filterList} />
                    <ul>{
                            this.state.items.map(function (item) {
                                return <li key={item}>{item}</li>;
                            })
                        }
                    </ul>
                </div>);
        });
    }
}

