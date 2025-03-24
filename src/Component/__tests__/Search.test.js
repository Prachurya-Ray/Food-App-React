import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA_DUMMY } from "../../mocks/apiData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA_DUMMY);
    },
  });
});

test("Search result on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const btn = body.getByTestId("test-search-btn");
  console.log(btn);
});

