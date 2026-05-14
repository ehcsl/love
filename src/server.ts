import "./lib/error-capture";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      const { default: serverEntry } = await import("@tanstack/react-start/server-entry");
      return await serverEntry.fetch(request);
    } catch (error) {
      console.error(consumeLastCapturedError() ?? error);
      return brandedErrorResponse();
    }
  },
};