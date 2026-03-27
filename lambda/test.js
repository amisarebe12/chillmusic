const { handler } = require('./src/index');

// Hàm Helper để chạy test
async function runTest(eventName, eventPayload) {
    console.log(`\n--- Chạy Test: ${eventName} ---`);
    try {
        const response = await new Promise((resolve, reject) => {
            handler(eventPayload, {}, (err, res) => {
                if (err) reject(err);
                else resolve(res);
            });
        });
        console.log('Response JSON:');
        console.log(JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

// 1. Giả lập một LaunchRequest (Khi người dùng nói: "Alexa, open Chill Music")
const launchRequestEvent = {
    version: '1.0',
    session: { new: true, application: { applicationId: 'amzn1.ask.skill.test' } },
    request: {
        type: 'LaunchRequest',
        requestId: 'amzn1.echo-api.request.test1',
        timestamp: new Date().toISOString(),
        locale: 'en-US'
    }
};

// 2. Giả lập một PlayAudioIntent (Khi người dùng nói: "Play music")
// Đặc biệt: Thiết bị CÓ HỖ TRỢ màn hình (APL)
const playIntentEvent = {
    version: '1.0',
    session: { new: false, application: { applicationId: 'amzn1.ask.skill.test' } },
    context: {
        System: {
            device: {
                supportedInterfaces: {
                    'Alexa.Presentation.APL': {} // Bật hỗ trợ APL (Màn hình)
                }
            }
        }
    },
    request: {
        type: 'IntentRequest',
        requestId: 'amzn1.echo-api.request.test2',
        timestamp: new Date().toISOString(),
        locale: 'en-US',
        intent: {
            name: 'PlayAudioIntent',
            confirmationStatus: 'NONE'
        }
    }
};

// Chạy các tests
(async () => {
    await runTest('Launch Request (Mở Skill)', launchRequestEvent);
    await runTest('Play Audio Intent (Phát nhạc - Có hỗ trợ màn hình APL)', playIntentEvent);
})();