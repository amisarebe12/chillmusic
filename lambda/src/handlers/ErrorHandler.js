class ErrorHandler {
  canHandle() {
    return true;
  }

  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    const speakOutput = 'Xin lỗi, tôi gặp sự cố khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
}

module.exports = new ErrorHandler();
