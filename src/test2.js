export class Phase {

    constructor(id, durationSec, soundOn = true) {
        this.id = id;
        this.durationSec = durationSec;
        this.soundOn = soundOn;
    }
}
