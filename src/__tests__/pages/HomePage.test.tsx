import { render } from "@testing-library/react";
import { HomePage } from "../../pages/HomePage";
import store from "../../store/store";
import { Provider } from "react-redux";

describe("HomePage", () => {
  it("should render homepage correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Check if each slider with its respective title and category exists
    expect(
      getByText("GRATIS | La mejor selección de películas gratuitas")
    ).toBeInTheDocument();
    expect(
      getByText("TIENDA | Las películas del momento en compra o alquiler")
    ).toBeInTheDocument();
    expect(getByText("GRATIS | Rakuten Originals")).toBeInTheDocument();
    expect(
      getByText("GRATIS | Películas de acción gratis")
    ).toBeInTheDocument();
    expect(getByText("GRATIS | Películas de drama gratis")).toBeInTheDocument();
    expect(
      getByText("GRATIS | Películas de suspense gratis")
    ).toBeInTheDocument();
    expect(
      getByText("GRATIS | Películas familiares gratis")
    ).toBeInTheDocument();
  });
});
