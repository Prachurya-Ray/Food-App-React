import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server";

test("Logo should render while loading application", ()=>{
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy%20Logo");

})

test("online status should render while loading application", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if online sts is loaded
  const online_sts = header.getByTestId("online-sts");
  expect(online_sts.innerHTML).toBe("✅");
});

test("cart should have 0 items while loading application", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if cart is loaded with 0 value
  const test_cart = header.getByTestId("test-cart");
  expect(test_cart.innerHTML).toBe('0');
});

