class HelpIntentHandler {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  }

  handle(handlerInput) {
    const speakOutput = 'Bạn có thể nói "play" để phát nhạc thư giãn, hoặc nói "stop" để dừng.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  }
}

module.exports = new HelpIntentHandler();
