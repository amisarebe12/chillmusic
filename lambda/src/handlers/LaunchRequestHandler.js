const DirectiveFactory = require('../logic/DirectiveFactory');

class LaunchRequestHandler {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  }

  handle(handlerInput) {
    const speakOutput = 'Chào mừng bạn đến với Chill Music. Bạn có thể nói "play" để bắt đầu thư giãn.';
    
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
}

module.exports = new LaunchRequestHandler();
