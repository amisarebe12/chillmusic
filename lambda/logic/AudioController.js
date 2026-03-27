const Constants = require('../constants/Constants');

class AudioController {
  /**
   * Phát nhạc
   * @param {Object} handlerInput 
   * @param {String} url 
   * @param {Number} offsetInMilliseconds 
   */
  static play(handlerInput, url, offsetInMilliseconds = 0) {
    return handlerInput.responseBuilder
      .addAudioPlayerPlayDirective('REPLACE_ALL', url, Constants.PLAY_TOKEN, offsetInMilliseconds, null);
  }

  /**
   * Dừng nhạc
   * @param {Object} handlerInput 
   */
  static stop(handlerInput) {
    return handlerInput.responseBuilder
      .addAudioPlayerStopDirective();
  }

  /**
   * Đưa nhạc vào hàng đợi để loop (Looping logic)
   * @param {Object} handlerInput 
   * @param {String} url 
   */
  static enqueue(handlerInput, url) {
    return handlerInput.responseBuilder
      .addAudioPlayerPlayDirective('ENQUEUE', url, Constants.PLAY_TOKEN, 0, Constants.PLAY_TOKEN);
  }
}

module.exports = AudioController;
