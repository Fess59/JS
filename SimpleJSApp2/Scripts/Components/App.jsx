import * as DCT from "DCT";
import { React } from "Global";
import { CommentForm, ProductList } from "Forms";

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Huawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return DCT.Execute(() => {
            return (
                <div>
                    <CommentForm url="/comments" submitUrl="/comments/new" pollInterval={2000} />
                    <ProductList data={propsValues} />
                </div>
            );
        });
    }
}