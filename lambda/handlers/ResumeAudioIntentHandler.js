const DirectiveFactory = require('../logic/DirectiveFactory');

class ResumeAudioIntentHandler {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' 
      && request.intent.name === 'AMAZON.ResumeIntent';
  }

  handle(handlerInput) {
    // Lấy offset thời gian dừng nhạc hiện tại từ token của thiết bị
    let offsetInMilliseconds = 0;
    const context = handlerInput.requestEnvelope.context;
    
    if (context && context.AudioPlayer && context.AudioPlayer.offsetInMilliseconds) {
      offsetInMilliseconds = context.AudioPlayer.offsetInMilliseconds;
    }

    // Tiếp tục phát nhạc từ thời điểm dừng
    return DirectiveFactory.createPlayResponse(handlerInput, offsetInMilliseconds);
  }
}

module.exports = new ResumeAudioIntentHandler();
