import * as DCT from "DCT";
import { React, ReactDOM } from "Global";
import { CommentForm, ProductList } from "Forms";

//return DCT.Execute(() => {
//});


ReactDOM.render(
    <CommentForm url="/comments" submitUrl="/comments/new" pollInterval={2000} />,
    document.getElementById("content")
);

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
ReactDOM.render(
    <ProductList data={propsValues} />,
    document.getElementById("content3")
);
