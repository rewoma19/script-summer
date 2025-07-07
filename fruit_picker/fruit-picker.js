import { notify } from "./notifier";

function onSuccess() {
  // implement the onSuccess callback to call notify with a success message
  const successMessage = { message: "SUCCESS" };
  notify(successMessage);
}

// onSuccess();

function onError() {
  // implement the onError callback to call notify with an error message
  const errMessage = { message: "ERROR" };
  notify(errMessage);
}
