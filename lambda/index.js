const Alexa = require('ask-sdk-core');

// Import Handlers
const LaunchRequestHandler = require('./handlers/LaunchRequestHandler');
const PlayAudioIntentHandler = require('./handlers/PlayAudioIntentHandler');
const PauseAudioIntentHandler = require('./handlers/PauseAudioIntentHandler');
const ResumeAudioIntentHandler = require('./handlers/ResumeAudioIntentHandler');
const CancelAndStopIntentHandler = require('./handlers/CancelAndStopIntentHandler');
const HelpIntentHandler = require('./handlers/HelpIntentHandler');
const SessionEndedRequestHandler = require('./handlers/SessionEndedRequestHandler');
const AudioPlayerEventHandler = require('./handlers/AudioPlayerEventHandler');
const ErrorHandler = require('./handlers/ErrorHandler');

// Đăng ký Handlers thông qua ASK SDK Builder
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    PlayAudioIntentHandler,
    PauseAudioIntentHandler,
    ResumeAudioIntentHandler,
    CancelAndStopIntentHandler,
    HelpIntentHandler,
    SessionEndedRequestHandler,
    AudioPlayerEventHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
