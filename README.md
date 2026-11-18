# Encore

**Your music on your Mac's lock screen, and a Dynamic Island in the notch.**

Encore adds an iPhone-style Now Playing widget to your **lock screen and screen saver**, with big album art, live synced lyrics and bars that move with the music. While you work, it turns your MacBook's notch into a **Dynamic Island** for music, calls, weather, battery and more. It works with **Spotify** and **Apple Music**.

**[⬇ Download the latest version](https://github.com/Zhuss-08/encore/releases/latest)** (Encore.dmg)

**Try it free for 7 days**, then [buy it once for £2](https://zhuss-08.github.io/encore/) to keep it, with all future updates included. One licence works on up to 2 Macs.

Encore was called **Lyrics Screensaver** before version 1.9. If you had that, updating keeps all your settings and renames it for you.

---

## Lock screen & screen saver

- **Now Playing widget** in clear liquid glass, with the song, artist, controls and progress bar.
- **Enlarged album art** over a soft blur of the album's colours.
- **Blurred album art background** (optional): the cover fills the screen, softly blurred, with a slider for how much. Covers are widened to fit the screen, so plain areas grow while faces and writing keep their shape. An optional AI fill (a one-time 187 MB download that runs entirely on your Mac) handles the trickiest covers.
- **Live lyrics** that follow the song line by line. Click a line to jump to it.
- **Music visualiser** bars that move with what's actually playing.
- **Music video background** (optional): the song's official video plays behind the album art, in time with the music.
- Keeps **Apple's own clock**, in your chosen font and size, so locking and unlocking look seamless.

## Dynamic Island

- **Now Playing**: album art and moving bars beside the notch. Hover to open full controls, the lyric line, your calendar and audio output.
- **Incoming calls**: FaceTime and iPhone calls appear in the notch with working **Accept** and **Decline** buttons, instead of macOS's alert.
- **Weather**: the temperature, the next few hours and the chance of rain, over a moving sky that matches the weather and time of day where you are, with tonight's real moon, rain that splashes and snow that settles. Click it to open the Weather app.
- **Volume & brightness** pop-ups that can replace macOS's own.
- **Battery**: charging alerts and a **Low Battery** card. Tap the battery to turn on Low Power Mode.
- **Headphones**: a pop-up when your AirPods or headphones connect.
- **Timer** and **File Shelf**: drag files onto the notch to keep them handy.
- **Trackpad gestures**: swipe to open and close, or to skip songs.

Everything can be turned on or off in **Settings**.

---

## Installing

1. Download **Encore.dmg** from the [latest release](https://github.com/Zhuss-08/encore/releases/latest) and open it.
2. Drag **Encore** into your **Applications** folder, then open it.
3. The first time, macOS may say it **can't verify the app**, because Encore isn't from the App Store. Click **Done**, then go to **System Settings → Privacy & Security**, scroll down and click **Open Anyway** next to Encore. You only need to do this once.

Encore runs from the **menu bar** (the little TV icon), not the Dock. Turn on **Open at Login** there or in Settings.

**Updates:** Encore checks this page for new versions. Click **Update Now** when it offers one, and it installs itself.

**Needs** macOS 14 or later. The moving bars need macOS 14.2 or later, and the Dynamic Island looks best on a MacBook with a notch.

## Permissions

macOS asks before Encore can use each of these. Only allow what you want:

| Permission | Used for |
|---|---|
| Automation (Spotify / Music) | Seeing what's playing and controlling playback |
| System audio | Making the bars move with the music. Nothing is recorded or saved. |
| Accessibility | Taking over the volume and brightness keys, and answering calls from the notch |
| Calendars | Today's events in the island. Your calendars stay on your Mac. |
| Location | The weather where you are. You can type a town instead in Settings → Weather. |
| Bluetooth | Listing and switching your headphones |

Turning Low Power Mode on from the notch asks for your Mac password the first time only. You can undo that in **Settings → Battery**.

## Privacy

Encore has no ads or tracking, and you don't need an account to use it. It only goes online for:

- **Lyrics** from [LRCLIB](https://lrclib.net), looked up by song title and artist.
- **Album art** from Apple's iTunes search, only when the music app doesn't provide it.
- **Weather** from [Open-Meteo](https://open-meteo.com), using your location rounded to about 1 km.
- **Music videos** from YouTube, if you turn that on.
- **Video timings**: how far each music video is from its song, shared anonymously so videos line up straight away for everyone.
- **The AI fill model**, only if you choose to download it, fetched once from Hugging Face. Your covers are never uploaded.
- **Update checks** on this GitHub page.
- **Licence checks** with [Polar](https://polar.sh), which sells Encore, when you activate a key and every few days after. Encore never sees your card details.

## Good to know

- Drawing over the lock screen uses a private part of macOS, the same approach other notch and lock-screen apps use. A future macOS update could stop it working until Encore is updated.
- Encore isn't affiliated with Apple, Spotify or YouTube.
