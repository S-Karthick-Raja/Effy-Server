const SuccessRequest = (message, data) => {
  return {
    status: "success",
    message: message,
    data: data,
  };
};

export default SuccessRequest;
