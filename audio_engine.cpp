#include <iostream>
using namespace std;

class AudioEngine {
public:
    void playSound(string track) {
        cout << "Playing track: " << track << endl;
    }

    void stopSound() {
        cout << "Stopping audio." << endl;
    }
};

int main() {
    AudioEngine engine;
    engine.playSound("demo_track.mp3");
    return 0;
}
