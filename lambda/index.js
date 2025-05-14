const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido, puedes preguntarme cuál es mi color favorito, artista, carrera o creador.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PreguntaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'PreguntaIntent';
    },
    handle(handlerInput) {
        const tipoPregunta = Alexa.getSlotValue(handlerInput.requestEnvelope, 'tipoPregunta');
        console.log(`~~~~ Intent: PreguntaIntent, Slot Value: ${tipoPregunta}`);
        let speakOutput = '';

        if (!tipoPregunta) {
            speakOutput = 'No entendí bien tu pregunta. ¿Podrías repetirla de otra manera?';
        } else {
            switch (tipoPregunta.toLowerCase()) {
                case 'color favorito':
                    speakOutput = 'Mi color favorito es el verde esmeralda.';
                    break;
                case 'artista':
                    speakOutput = 'Mi artista favorito es ED MAverik.';
                    break;
                case 'carrera':
                    speakOutput = 'Estudié Ingeniería en Desarrollo de Software, claro que sí.';
                    break;
                case 'creador':
                    speakOutput = 'Mi creador se llama Kalid, un gran universitario.';
                    break;
                default:
                    speakOutput = 'Lo siento, solo puedo responder preguntas sobre mi color favorito, artista, carrera o creador.';
                    break;
            }
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Quieres saber algo más sobre mí?')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme cosas como: ¿Cuál es tu color favorito? ¿Quién es tu artista favorito?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Hasta luego!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entendí eso. Solo puedo responder preguntas sobre mi color favorito, artista, carrera o creador.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Quieres saber algo más sobre mí?')
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Sesión terminada: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error capturado: ${JSON.stringify(error)}`);
        const speakOutput = 'Lo siento, hubo un problema. Intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PreguntaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('kalid/personal-skill/v1')
    .lambda();
