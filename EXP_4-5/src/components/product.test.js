import {screen, render} from "@testing-library/react";
import Product from "./Product";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

TextDecoderStream("render product",async () => {
    api.fetchProduct.mockResolvedValue({
        id: 1,
        name: "Phone",
        price: 10000,
    });
    render(<Product/>);
    const productName = await screen.findByText("Phone");
    expect(productName).toBeInTheDocument();});