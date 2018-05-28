
# Feedly
React-native iOS application feed reader powered by NewsAPI.org ( https://newsapi.org/ )

Features
----------------------------------------------------------------------------
- App state managed with Redux
- Async fetch with Redux Thunk
- Use Redux Logger
- Animations powered by Lottie

Demo
----------------------------------------------------------------------------
<br>
<img height="400"src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/splash.png"/>
<img height="400" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/main.png"/>
<img height="400" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/settings.png"/>
</br> 

Installation
----------------------------------------------------------------------------
1. Download or clone the repository 
2. Move inside the repository with the command line
3. Run the next line:
`npm install`

Run on iOS emulator
-----------------------------------------------------------------------------

* Option 1
1. Move inside ios folder inside the project folder and open the file **Feedly.xcodeproj**.
2. Select your emulator device and click in the play button
<br>
<img height="300" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/playemulator.png"/>
</br>
3. Wait and enjoy

* Option 2
1. Run the next line in the console `react-native run-ios` 
2. Wait and enjoy


 Run on iOS device
-----------------------------------------------------------------------------
* Option 1
1. Move inside ios folder inside the project folder and open the file **Feedly.xcodeproj**.
2. Move to Feedly -> Signing and select a Team
<br>
<img height="300" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/team.png"/>
</br>

3. Select your device and click in the play button
4. Wait and enjoy

If you want to run without the Metro Bundler:

1. Move to AppDelegate.m inside iOS project folder and comment the line **//Debug** and uncomment the line **//Release**
<br>
<img height="300" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/production.png"/>
</br>

2. Select your device and click in the play button
3. Wait and enjoy

Update interval Test
-----------------------------------------------------------------------------
1. Move to folder project -> src -> routes -> FeedView -> index.js and jump to the line 42
<br>
<img height="200" src="https://github.com/TheLastClown/Feedly/blob/master/src/common/assets/app_assets/change.png"/>
</br>

If you want to set timer in minutes delete `time * 1000` and change with `Utils.setTimeToMinutes(time)`, save and reload
