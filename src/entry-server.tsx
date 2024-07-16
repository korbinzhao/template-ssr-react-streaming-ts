import React from "react";
import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server";
import App from "./App";
import "./index.css";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
// import fs from 'fs';

const cache = createCache();

export function render(
  _url: string,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions
) {
  return renderToPipeableStream(
    <StyleProvider cache={cache}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StyleProvider>,
    options
  );
}

export function extractCss() {
  const css = extractStyle(cache);

  // fs.writeFileSync('dist/client/antd-extract.css', css);

  return css;
}
