window.speachInterop = {
    sayWelcomeMessage: function () {
        const synth = window.speechSynthesis;

        let voices = [];
        voices = synth.getVoices();

        setTimeout(() => {

            voices = synth.getVoices();
            //alert(voices);

            const selectedVoice = "Microsoft Libby Online (Natural) - English (United Kingdom)";

            let speach = new SpeechSynthesisUtterance("How was your experience today at COPC?");

            for (const voice of voices) {
                //alert(voice.name);
                if (voice.name === selectedVoice) {
                    speach.voice = voice;
                }
            }

            synth.speak(speach);
        }, "1000");
        console.log("Welcome message spoken.");
    },
    sayThankYouMessage: function () {
        const synth = window.speechSynthesis;

        let voices = [];
        voices = synth.getVoices();

        setTimeout(() => {

            voices = synth.getVoices();
            //alert(voices);

            const selectedVoice = "Microsoft Libby Online (Natural) - English (United Kingdom)";

            let speach = new SpeechSynthesisUtterance("Thank you for using the feedback station! Scan the QR code with your device to tell us more.");

            for (const voice of voices) {
                //alert(voice.name);
                if (voice.name === selectedVoice) {
                    speach.voice = voice;
                }
            }

            synth.speak(speach);
        }, "1000");
        console.log("Thank you message spoken.");
    },
    sayErrorMessage: function () {
        const synth = window.speechSynthesis;

        let voices = [];
        voices = synth.getVoices();

        setTimeout(() => {

            voices = synth.getVoices();
            //alert(voices);

            const selectedVoice = "Microsoft Libby Online (Natural) - English (United Kingdom)";

            let speach = new SpeechSynthesisUtterance("Please wait for assistance.");

            for (const voice of voices) {
                //alert(voice.name);
                if (voice.name === selectedVoice) {
                    speach.voice = voice;
                }
            }

            synth.speak(speach);
        }, "1000");
        console.log("Error message spoken.");
    }
};