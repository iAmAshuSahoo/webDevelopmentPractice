//Problem Statement

// Practicing Prototypes
// Finally, let’s work on this and objects linked via prototype (Chapter 4,
// Pillar 2).
// Define a slot machine with three reels that can individually spin(), and then
// display() the current contents of all the reels.
// The basic behavior of a single reel is defined in the reel object below. But
// the slot machine needs individual reels—objects that delegate to reel, and
// which each have a position property.
// A reel only knows how to display() its current slot symbol, but a slot
// machine typically shows three symbols per reel: the current slot (position),
// one slot above (position - 1), and one slot below (position + 1). So
// displaying the slot machine should end up displaying a 3 x 3 grid of slot
// symbols.


function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
var reel = {
    symbols: [
    "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
            this.symbols.length - 1
            );
        }
        this.position = (
        this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    // reel: Object.create(reel),
    reels: [
        // this slot machine needs 3 separate reels
        // hint: Object.create(..)
        Object.create(reel), Object.create(reel), Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
        reel.spin();
    });
    },
    display() {
        // TODO
        const disp = [];
        for (let i = 0; i < 3; i++) {
            const temp = []
            this.reels.forEach(function displayReel(reel) {
                temp.push(reel.display());
                reel.position += 1;
                if (reel.position > (reel.symbols.length - 1)) {
                    reel.position -= reel.symbols.length;
                }
            })
            disp.push(temp);
        }
        return disp;
    }
};
slotMachine.spin();
slotMachine.display();
// "X", "Y", "Z", "W", "$", "*", "<", "@"
// 0    1      2   3   4     5     6   7
// < | @ | *
// @ | X | <
// X | Y | @
// 6 7 5
// 7 0 6
// 0 1 7

slotMachine.spin();
slotMachine.display();
// Z | X | W
// W | Y | $
// $ | Z | *
// 2 0 3
// 3 1 4
// 4 2 5