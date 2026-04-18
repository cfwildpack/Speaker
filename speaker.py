class Speaker:
    def __init__(self, name, max_volume=100):
        self.name = name
        self.max_volume = max_volume
        self.volume = 50
        self.is_on = False

    def power_on(self):
        self.is_on = True
        print(f"{self.name} is now ON.")

    def power_off(self):
        self.is_on = False
        print(f"{self.name} is now OFF.")

    def set_volume(self, level):
        if 0 <= level <= self.max_volume:
            self.volume = level
            print(f"Volume set to {self.volume}")
        else:
            print("Invalid volume level.")

if __name__ == "__main__":
    speaker = Speaker("NovaSound X100")
    speaker.power_on()
    speaker.set_volume(75)
