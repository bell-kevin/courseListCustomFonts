# Course List with Custom Fonts

In this project, you will work with the FlatList component to create a list of courses, using custom fonts for the text.

![p](https://github.com/bell-kevin/courseListCustomFonts/blob/main/courseList.PNG)

https://github.com/academind/react-native-practical-guide-code/tree/04-deep-dive-real-app/extra-files/fonts

The heading over the list is in the default font, bold weight. In this example, there is one custom font for the course number and name, and a different custom font for the course description below the number and name. You need to select 2 custom fonts, your choice, that do not closely match the default font -- make sure there is a visible difference between the fonts. These must be different fonts, not the same font with different weights.

You can use the same array of course information as shown in the example, or use some other courses, your choice -- make sure there are at least 5 courses in the list. In the example, the array has 3 fields for each each entry: id, like "SDEV1022"; name, like "HTML CSS Basics"; and description, the smaller line of text below the id and name, as shown in the screenshot. The ID or course number (like SDEV1022) is unique, since no two courses have the same abbreviation and number, so that ID can also serve as the key extractor value in the FlatList. Create the array after the import statements, before the function for the component.

Create a Card component (in a separate file in the project, so it must be imported into App.js) which displays the data for a single course -- the course ID with a colon and the course name in one custom font on the first line, and the course description in a different custom font on the next line. The screen needs a background color that is not white (the example uses light gray), and the cards need a different background color (the example uses ivory). Round the corners of the Card a little. Use appropriate padding and/or margin so the text does not touch any edges of the card.

A FlatList has some required properties, "data", "keyExtractor", and "renderItem". The data is the array, and for each item in the array, the FlatList component will use the renderItem property to determine what to do with that item. The "data" property uses the array for the course information. The "keyExtractor" can be the course ID in the data. The "renderItem" property can call an inline function or a function written elsewhere in the file. Create a function in the App.js file to render the item. If you call it "renderItem", the line of code in the FlatList component about rendering the item in the array would be:

    renderItem={renderItem}

In that renderItem function, all you need to do is call the Card component, passing the item in the list as the prop to that separate component.

Add an item separator in the FlatList component, to put a line between items. This is usually just a View component with a style that specifies the color of the line (in backgroundColor), the thickness or height of the line (in height), and other style as needed for margins or width.

Take a screenshot like the example.

 ![p](https://github.com/bell-kevin/courseListCustomFonts/blob/main/customFont.PNG)

Submission: Zip together the screenshot and the root folder of the project, and submit a single zipped file.

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

Check out App.js here in the code files for the computer algorithm code.

Reading: Storing Projects
When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
