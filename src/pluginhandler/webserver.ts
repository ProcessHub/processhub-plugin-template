import Hapi = require("hapi");
import path = require("path");
import { rootPage } from "./rootpage";

const publicPath = path.join(__dirname, "../../../public");

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: publicPath
      }
    }
  }
});

let serverStarted = false;

// Zuweisung wegen "Promises must be handled appropriately"
let x = configureServer();

async function configureServer(): Promise<void> {
  server.connection({
    port: 8082
  });

  server.register({
    register: require("inert")
  }, function (err) {
    if (err) throw err;
  });

  process.on("uncaughtException", function (exception: any) {
    console.log("uncaughtException:\n" + exception); // to see your exception details in the console
    // if you are on production, maybe you can send the exception details to your
    // email as well ?
  });

  process.on("unhandledRejection", (reason: any, p: any) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
  });

  // http zu https umleiten, falls X-Forwarded-Proto = "http" (also nur, wenn Aufruf über ELB kam)
  await server.register({
    register: require("hapi-require-https"),
    options: {}
  });

  server.route({
    method: "GET",
    path: "/dist/{name*}",
    handler: {
      directory: {
        path: "../public/dist"
      }
    }
  });

  server.route({
    method: "GET",
    path: "/css/{name*}",
    handler: {
      directory: {
        path: "../public/css"
      }
    }
  });

  server.route({
    method: "GET",
    path: "/images/{name*}",
    handler: {
      directory: {
        path: "../public/images"
      }
    }
  });

  server.route({
    method: "GET",
    path: "/{name*}",
    handler: rootPage
  });
}

server.start(function (err) { });
