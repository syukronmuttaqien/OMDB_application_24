Hi, This is the note from me.

  

I have several step to complete this Test Project.

  

**Step 1: [Changing From Expo to Bare React Native]**(https://github.com/syukronmuttaqien/OMDB_application_24/pull/1)

From My Perspective, Expo is quite useful, but Expo has a Limited Access to the Native API especially when we want to create a Native Modules.

  

For Optimization, because Expo Included Some Features that we don't need, so i planned to take out unused feature, so we can make the size of the app smaller.

  

I Assume this project will be big and complex, so Bare React Native is a best choice for a scalable application.

  

**Step 2: [Add Navigation System](https://github.com/syukronmuttaqien/OMDB_application_24/pull/2)**

Add ingNavigation System using React Navigation Library, So Our Bare React Native can do a Navigation Between Screen.

  Link: [React Navigation](https://reactnavigation.org/)

  

**Step 3: [Implement Networking Feature](https://github.com/syukronmuttaqien/OMDB_application_24/pull/3)**

i'm Implementing Networking using Axios, after that create a interceptor for debugging purpose, if the app is Dev the logging of network will shown on log.

  

After that, i'm also integrating the Axios with React Query for better readability and usability, so we can shorten the code on every time call the API.

Also Changing the Scrollview to Flatlist in Movie List Page, because Flatlist will boost performance on a big list item.

  

**Step 4: [Beautify The UI](https://github.com/syukronmuttaqien/OMDB_application_24/pull/4)**

- Create `.env` using `react-native-config` libraries.

- Refactor MovieItem Component

- Create Custom Text Component

- Create Input Component

- Create NetworkInfo Component (For Listening Network State)

- Change UI for The Movie List Page

- Change UI for The Movie Detail Page

- Make a Search Bar Text for Searching a Movie

- Make an Infinite Scroll in Movie List Page if it has a lot of movies.

- Add Several Error handling on screen.


**Testing Note**
If You want to Test Out The using Simulator or Android Emulator, make sure you copy `.env.local` and rename it to `.env`