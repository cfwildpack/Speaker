public class Speaker {
    private String name;
    private int volume;

    public Speaker(String name) {
        this.name = name;
        this.volume = 50;
    }

    public void setVolume(int volume) {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
            System.out.println("Volume set to " + volume);
        }
    }

    public static void main(String[] args) {
        Speaker speaker = new Speaker("NovaSound X100");
        speaker.setVolume(80);
    }
}
