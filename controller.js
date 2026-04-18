class SpeakerController {
    constructor(name) {
        this.name = name;
        this.volume = 50;
    }

    increaseVolume() {
        if (this.volume < 100) {
            this.volume += 5;
        }
        console.log(`Volume: ${this.volume}`);
    }

    decreaseVolume() {
        if (this.volume > 0) {
            this.volume -= 5;
        }
        console.log(`Volume: ${this.volume}`);
    }
}

const speaker = new SpeakerController("NovaSound X100");
speaker.increaseVolume();
