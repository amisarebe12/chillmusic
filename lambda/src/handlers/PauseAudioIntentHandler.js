const AudioController = require('../logic/AudioController');

class PauseAudioIntentHandler {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' 
      && request.intent.name === 'AMAZON.PauseIntent';
  }

  handle(handlerInput) {
    AudioController.stop(handlerInput);
    return handlerInput.responseBuilder.getResponse();
  }
}

module.exports = new PauseAudioIntentHandler();
