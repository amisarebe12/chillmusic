const AudioController = require('./AudioController');
const AssetManager = require('./AssetManager');
const Constants = require('../constants/Constants');
const aplTemplate = require('../view/apl/chill_music_template.json');

class DirectiveFactory {
  /**
   * Factory Method: Sinh ra response bao gồm Audio Player và APL (nếu thiết bị hỗ trợ)
   * @param {Object} handlerInput 
   * @param {Number} offsetInMilliseconds 
   */
  static createPlayResponse(handlerInput, offsetInMilliseconds = 0) {
    const audioUrl = AssetManager.getAudioUrl();
    
    // 1. Logic Audio Player
    AudioController.play(handlerInput, audioUrl, offsetInMilliseconds);
    handlerInput.responseBuilder.withShouldEndSession(true);

    // 2. Logic Hiển thị (APL) nếu thiết bị hỗ trợ
    if (this.supportsAPL(handlerInput)) {
      handlerInput.responseBuilder.addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        token: 'chillMusicToken',
        document: aplTemplate.document,
        datasources: {
          musicData: {
            backgroundUrl: AssetManager.getBackgroundUrl(),
            title: Constants.SKILL_NAME,
            subtitle: "Now Playing - Ambient Relaxation",
            logoUrl: AssetManager.getLogoUrl()
          }
        }
      });
    }

    return handlerInput.responseBuilder.getResponse();
  }

  /**
   * Tạo Response cho Enqueue (để loop)
   */
  static createEnqueueResponse(handlerInput) {
    const audioUrl = AssetManager.getAudioUrl();
    AudioController.enqueue(handlerInput, audioUrl);
    return handlerInput.responseBuilder.getResponse();
  }

  /**
   * Kiểm tra thiết bị có hỗ trợ màn hình APL không
   * @param {Object} handlerInput 
   */
  static supportsAPL(handlerInput) {
    const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    return supportedInterfaces['Alexa.Presentation.APL'] !== undefined;
  }
}

module.exports = DirectiveFactory;
