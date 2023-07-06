import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { movieResponse } from "./data/movieResponse";
import { sliderResponse } from "./data/sliderResponse";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";
import {
  Categories,
  createCategoryEndpoint,
  createMovieEndpoint,
} from "../utils/endpoint";

// Extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

export const restHandlers = [
  rest.get(createMovieEndpoint("misterios-del-titanic"), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieResponse));
  }),
  rest.get(createCategoryEndpoint(Categories.Family), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sliderResponse));
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

// Runs a cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();

  // Reset the handlers and close the server after all tests
  server.resetHandlers();
  server.close();
});
