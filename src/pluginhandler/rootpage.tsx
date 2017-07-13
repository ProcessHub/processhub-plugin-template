import * as React from "react";
import { RouterContext, match } from "react-router";
import Hapi = require("hapi");
import { renderToString } from "react-dom/server";

export function rootPage(request: Hapi.Request, reply: any) {
  reply(`<!DOCTYPE html>
    <html>
      <head lang="en">
        <meta charset="UTF-8">
        <title>ProcessHub</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.js"></script>
        <script src="http://localhost:8080/dist/iframeResizer.contentWindow.min.js"></script>
        <link rel="stylesheet" href="https://app.processhub.com/css/semantic.min.css" type="text/css" />
        <link rel="stylesheet" href="https://app.processhub.com/css/processhub.css" type="text/css" />
        <link rel="stylesheet" href="/css/plugin.css" type="text/css" />
      </head>

      <body>
        <div id="ProcessHubPlugin" class="height100"></div>
        <script src="/dist/processhub-plugin.bundle.js"></script>      
      </body>
    </html>`);
}
