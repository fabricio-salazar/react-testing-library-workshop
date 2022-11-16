import { ReactElement } from "react";
import { Provider } from "react-redux";
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { ThemeProvider } from "../theme";
import { setupStore } from "../store";
import { graphQLMocks } from "./testFixtures";

interface ProviderProps {
  children: ReactElement;
}

const Providers = ({ children }: ProviderProps) => (
  <Provider store={setupStore()}>
    <MockedProvider mocks={graphQLMocks}>
      <ThemeProvider>{children}</ThemeProvider>
    </MockedProvider>
  </Provider>
);

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export const renderHookWithProviders = <TProps, TResult>(
  hook: (initialProps: TProps) => TResult,
  options?: Omit<RenderHookOptions<TProps>, "wrapper">
) => renderHook(hook, { wrapper: Providers, ...options });
