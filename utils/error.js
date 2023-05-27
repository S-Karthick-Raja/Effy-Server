const ErrorResponse = (message, error) => {
  return {
    status: "error",
    message: message,
    error: error,
  };
};

export default ErrorResponse;
