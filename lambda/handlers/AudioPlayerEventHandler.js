const DirectiveFactory = require('../logic/DirectiveFactory');

class AudioPlayerEventHandler {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type.startsWith('AudioPlayer.');
  }

  handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    // Looping logic mượt mà thông qua PlaybackNearlyFinished
    if (request.type === 'AudioPlayer.PlaybackNearlyFinished') {
      return DirectiveFactory.createEnqueueResponse(handlerInput);
    }

    // Các event khác (PlaybackStarted, PlaybackStopped, PlaybackFinished, PlaybackFailed)
    // không yêu cầu response.
    return handlerInput.responseBuilder.getResponse();
  }
}

module.exports = new AudioPlayerEventHandler();
