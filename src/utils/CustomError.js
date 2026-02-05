class CustomError extends Error {
  constructor(type = "CUSTOM_ERROR", code = 500, message, data) {
    super(message);
    this.type = type;
    this.code = code;
    this.data = data;
  }
}

export default CustomError;
