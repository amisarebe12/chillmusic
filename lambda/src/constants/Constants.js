class Constants {
  static get AUDIO_URL() {
    return 'https://yjlmfaopegiegdjpouzy.supabase.co/storage/v1/object/public/chill-music/chill_music_fixed.mp3';
  }

  static get BACKGROUND_URL() {
    return 'https://yjlmfaopegiegdjpouzy.supabase.co/storage/v1/object/public/chill-music/background.png';
  }

  static get LOGO_URL() {
    // URL Logo giả định nếu cần, có thể dùng lại Background hoặc link khác
    return 'https://yjlmfaopegiegdjpouzy.supabase.co/storage/v1/object/public/chill-music/logo.png';
  }

  static get SKILL_NAME() {
    return 'Chill Music';
  }

  static get PLAY_TOKEN() {
    return 'CHILL_MUSIC_TRACK_1';
  }
}

module.exports = Constants;
