## Issue with orientation listener in Apple iPad while using the OS "Split-View" feature

The app hangs then crashes when used in "Split-View" mode. The crash occurs after leaving the Split-View and then returning back.

This video demonstrates the issue:
https://youtu.be/TrnQc8IGpPM

##### How to reproduce:

1. Add an orientation listener anywhere in the app
2. Open the app in Split-View
3. Leaving both apps (swipe up or press home)
4. Return back to them. The timing (quick vs long delay) doesn't seem to matter
5. The app hangs (doesn't respond) then crashes

##### Notes:

- The provided code is basically the getting-started expo project with AppState and orientation listeners attached.

- Clearing the listener with useEffect doesn't seem to solve the issue.

- The issue doesn't occur in iPhone (at least in my testing) and doesn't occur while using the app stand-alone (no Split-View) in iPad.

- I noticed that as long as the orientation listener is attached, the app doesn't go to "background" state after leaving app. Normally, the app goes into "inactive" then to "background"

- However, if I add an AppState listener to clear the orientation listener on "inactive" state, the issue doesn't occur.
