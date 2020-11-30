# Brewser FrontEnd

### Welcome to Brewser, your new favorite beer browser!
Brewser is a brand new web app, designed to give the user a full experience of exploring breweries around the country. Our brewery search engine allows you to find which breweries are near you, gives you details about that brewery, and even lets you rate and review it. But that's not all! Brewser also gives you the ability to "check-in" a beer or two (or more!) that you've had at any given brewery, give it a review as well, and allows you to see what other users have checked in and reviewed.



___



### About This Project
Brewser is the result of a project assignment for a software developing course with General Assembly. Jane Cho, Lucy Franco, and Casey Jenkins decided to team up to tackle a re-imagined version of the popular social beer app, Untappd. The requirements were to make a PERN-stack app with full CRUD functionality, in which the model Untappd provided worked well for the project. Additionally, the team had a ton of fun diving into the beer/brewery world, and ultimately enjoyed creating an app that can provide a useable, likeable alternative to likeminded apps currently available.



___



### Screenshots

![HomeModal] (https://i.imgur.com/JNEedKQ.png?1)
![SearchPage] (https://i.imgur.com/wIEQGiJ.png?1)
![BreweryList] (https://i.imgur.com/myaGWIF.png?2)
![BreweryShow] (https://i.imgur.com/5mV0iRO.png?1)
![BreweryReview] (https://i.imgur.com/36u3Ros.png?1)
![BeerList] (https://i.imgur.com/M6aEv2q.png?1)
![AboutPage] (https://i.imgur.com/2sELYfr.png?1)
![BeerShow] (https://i.imgur.com/qxZtNED.png?1)
![ProfilePage] (https://i.imgur.com/3jpqbRa.png?1)
![LoginScreen] (https://i.imgur.com/znIscq1.png?1)
![SignupPage] (https://i.imgur.com/1bXXYx4.png?1)
![LogoutScreen] (https://i.imgur.com/XFnfMoJ.png?1)



___



### User Stories

* When first entering the application, the user will see a modal to ask if they are at least 21 years old.
* The user lands on a homepage where they can search breweries, search beer posts and see the navigation bar with links to the About, Register and Login pages.
* Once user is registered and logged in, they can additionally write brewery or beer posts and will be directed to their profile page showing all their posts upon login.
* Users can type in a brewery name or location on the homepage. This will take them to their search results page. If the brewery has a website, user can select url which opens new window to the brewery's website. Or user can click on "Read More" which will direct them to that brewery's page.
* On the selected brewery's page, user can write a brewery review for that location or a beer review that they enjoyed at that location. When submitted, user's review will post to the brewery page and to their profile page.
* From the profile page, users can delete their own posts.




___



### Wireframes
![Wireframe] (https://i.imgur.com/vKXWI9E.png?1)
![Wireframe] (https://i.imgur.com/vppohGA.png?1)
![Wireframe] (https://i.imgur.com/WVOU6VO.png?1)
![Wireframe] (https://i.imgur.com/s5SlMQ5.png?1)
![Wireframe] (https://i.imgur.com/BUbyVht.png?1)



___



### Special Thanks
We would like our instructors at GA for helping overcome hurdles along the way, including but not limited to: Brock Whitbread-Cole, James Sinkler, Seanny Phoenix, Jacob Kleiman, Uyen Lam, among others. OpenBreweryDB.com allowed us to pull data and use it for our search function. Without it, Brewser would be boring, so huge thanks to them. Shoutout to the internet in general for doing what it does, espcially StackOverflow.com, W3Schools.com, MDN.com, etc. Also special thanks to Abinav Seelan on blog.campvanilla.com for this example on dropdown menus in React.js. Additionally, thanks to Untappd for the inspiration behind Brewser. And lastly, thank you to all the breweries out there that make beer enjoyable enough to deserve apps like this.



___



### Future Development

1. The ability to edit a post that you have made.
    1. All of the framework for this functionality is built within the app, however, we were unable to make it work within the timeframe of this project.
1. Use a “star” rating instead of an integer rating on posts.
    1. Using a small star icons and allow users to select a number of stars out of 5 instead of selecting 1-5. This is inline with how other sites that use customer reviews work.
1. Google Map integration
    1. Utilize google maps to locate breweries and assist with getting directions for the user.
1. Profile Photo
    1. Allow users to upload a photo of themselves to their profile.
1. Add “username” to user profile.
    1. Adding a username to the profile will allow for any user posts to incorporate an identifier of who made the post.



___



Brewser was made by Jane Cho, Lucy Franco, and Casey Jenkins

> Note: Built to work with [this repo](https://github.com/jmcho311/brewser-auth-backend).