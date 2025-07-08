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

function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
  order(query, onSuccessCallback, onErrorCallback);
}

function postOrder(variety, quantity) {
  // implement the postOrder function to create a query and order
  const query = { variety, quantity };
  order(query, onSuccess, onError);
}
