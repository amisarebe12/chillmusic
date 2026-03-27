const DirectiveFactory = require('../logic/DirectiveFactory');

class PlayAudioIntentHandler {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' 
      && request.intent.name === 'PlayAudioIntent';
  }

  handle(handlerInput) {
    // Factory method sẽ tự động thêm directive Audio và APL
    return DirectiveFactory.createPlayResponse(handlerInput, 0);
  }
}

module.exports = new PlayAudioIntentHandler();
