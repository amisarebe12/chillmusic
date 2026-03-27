const Constants = require('../constants/Constants');

class AssetManager {
  constructor() {
    if (AssetManager.instance) {
      return AssetManager.instance;
    }

    this.audioUrl = Constants.AUDIO_URL;
    this.backgroundUrl = Constants.BACKGROUND_URL;
    this.logoUrl = Constants.LOGO_URL;
    
    // Singleton pattern
    AssetManager.instance = this;
  }

  getAudioUrl() {
    return this.audioUrl;
  }

  getBackgroundUrl() {
    return this.backgroundUrl;
  }

  getLogoUrl() {
    return this.logoUrl;
  }
}

// Xuất ra một instance duy nhất (Singleton)
module.exports = new AssetManager();
