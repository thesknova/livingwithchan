import { initBotId } from "botid/client/core";

// Register the AI chat endpoint for BotID protection. The client injects a
// lightweight challenge so legitimate browser requests carry a token that
// checkBotId() validates server-side; scripted/curl traffic is flagged.
initBotId({
  protect: [
    {
      path: "/api/chat",
      method: "POST",
    },
  ],
});
