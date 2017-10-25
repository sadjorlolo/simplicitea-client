[![Simplici*tea logo](https://i.imgur.com/fkvppfJ.png)](https://sadjorlolo.github.io/simplicitea-client/)

# Simplici*tea

[Simplici*tea](https://sadjorlolo.github.io/simplicitea-client/) is a full-stack
single page application created by me, Sarah Adjorlolo.
Both the [front-end repository](https://github.com/sadjorlolo/simplicitea-client)
and the [back-end repository](https://github.com/sadjorlolo/sarah-fullstack) are
pinned to my personal [Github](https://github.com/sadjorlolo) page.

This application can be found here: https://sadjorlolo.github.io/simplicitea-client/.

The back-end is deployed here: https://desolate-depths-48909.herokuapp.com/.

## About the Application

The purpose of this application is to allow a user to store, update, and delete
their personal tea reviews. Since the reviews are associated with a specific,
signed in user, they cannot be created, viewed, updated, or deleted by any
other user.

Upon sign in, the user has the ability to sign out, change password, create a
new review, and view all of their reviews.

If a user chooses to create a review, upon clicking the "Create New Review"
button, there is first a prompt to select from a pre-defined list of teas to
review. Upon tea selection, the user can enter information for their review,
such as water temperature, steep time, rating, and notes. After saving, the
newly created review is available in the list of all reviews associated with
that user. A single review must be selected before being updated or deleted.

The application works through a series of back-end requests to the server. If a 
new user is created, the email and password are passed through the server to the
API in the form of a POST request. A signed in user can access all reviews or
only a single review by sending a GET request, with or without a review id.
Using a specific review request, a user can send a DELETE request to delete a
review or a PATCH request to update a review. By creating a brand new review, a
user is sending a form full of data in a POST request.

All of these are available actions for a signed in user because they are
authorized with a token upon successful sign-in.

## Development Process

The developmemt process for this application begin with designing the setup of
the back-end API. I knew I would have at least three tables: Users, Reviews,
and Teas. Each User would have multiple Reviews, and each Tea could be linked to
multiple Reviews, but each Review could only be associated with a single user
id and a single tea id.

Once each table was set up with the intended columns and datatypes, I attached
foreign keys for both user_id and tea_id to the Reviews table. Both Users and
Reviews belongs to Protected classes, meaning they cannot be accessed or changed
unless a user is signed in. The Tea table, however, is not a Protected class.
The contents of the Teas table are fully accessable to the public, though only
through index and show methods.

I tested curl requests for each resource to ensure records could be added to,
viewed, updated, and deleted from the database, given specific input constraints.

With the back-end complete, I began working on the front-end. With a series of
forms, buttons, console.log messages, and input fields, I was able to set up
user functionality with the correct API calls for signing up, signing in,
changing password, signing out, viewing all tea reviews, viewing a single review,
creating a new review and saving it to the database, updating an existing review
and saving changes to the database, and deleting a review from the database.

Whenever I encountered a problem, I would comment out code unnecessary to
solving the problem at hand, make sure I was passing the proper data in my
callback functions by verifying the data in console logs. If the data was
incorrect, I would correct the mistake and test again. If the data was correct,
I had to re-evaluate the path the data was traveling and make adjustments as
needed to get the correct data through the correct function and to the database.

## Technologies Used

The following technologies were used in the creation of this application:
  - HTML for application layout.
  - SCSS for custom application design and formatting.
  - AJAX requests for interacting with my API:
    - POST, PATCH, GET, and DELETE.
    - Authorization headers to specify actions for a signed-in user.
  - jQuery for DOM manipulation and event handling functionality.
  - Heroku for back-end hosting.
  - GitHub Pages for front-end hosting.

## Future Iterations

1) Add responsiveness for different sized screens.
2) Add search functionality for reviews to allow a user to filter based on tea
   brand, name, type, etc.
3) Allow users to create new teas to review, but also search global database
   in case of duplicates (fuzzy match).
4) Change "rating" to have selectable stars instead of selecting a number from a
   dropdown.

## Wireframes and User Stories

![Simplicitea Wireframes](https://i.imgur.com/Zm36fkf.png)

User stories:

As a user, I want to...

1) Sign up, sign in, sign out, change password
2) Create a review and save it to the database.
3) Edit a review and have updates save to the database.
4) Delete a review from the database.
5) See all reviews I have created.
6) View a single review.
