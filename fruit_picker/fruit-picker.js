import { notify } from "./notifier";

function onSuccess() {
  const successMessage = { message: "SUCCESS" };
  notify(successMessage);
}

// onSuccess();
