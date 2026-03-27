const AudioController = require('../logic/AudioController');

class CancelAndStopIntentHandler {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  }

  handle(handlerInput) {
    // Ngừng nhạc và kết thúc session
    AudioController.stop(handlerInput);
    return handlerInput.responseBuilder
      .withShouldEndSession(true)
      .getResponse();
  }
}

module.exports = new CancelAndStopIntentHandler();
