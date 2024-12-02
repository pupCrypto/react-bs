import React from "react";
import { Provider }from "react-redux";
import store from "../redux/store";

const withRedux = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);


export const decorators = [withRedux];