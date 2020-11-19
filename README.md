# Unit 17 Nosql Homework: Workout Tracker

![deployedScreenshot](https://user-images.githubusercontent.com/68077734/99605394-35a56b80-29cd-11eb-8401-51e73b671871.png)

For this assignment, I created a workout tracker that meets all the requirements listed in this document. I was already provided with the front end code in the `Develop` folder but removed and organized all the the files in the MVC format and deleted the develop folder. This assignment required me to create Mongo database with a Mongoose schema and handle routes with Express.

At first I tried to approach the app from a different perspective.  I created separate Cardio and Resistance Models and had a Workout model that included those models.  I modified the front end code slightly to call two different api-routes to create a collection in the database.  For workout to display them, I planned to populate it in the API route call for displaying workouts.  After I opened the seed file and seeing that my approach would not work with these inputs, so I created a single workout model that paralleled the seed file for the app and everything works as desired now.  

Let's take a look at the requirements for the project. 

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.


## Acceptance Criteria and optimizations

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.  Just in case someone saves all the workouts and does not put them in on time or out of sequence, the api call sorts the activities by date so it can even pick the latest workout from an existing seed file.  

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises on the `stats` page.  The last 7 days are saved and passed into the function since there is only 7 days that can be displayed     on the stats page.  

## Questions

For more information please contact me using my [email](keremukaraman@gmail.com).

The link for the fitness tracker repo can be found [here](https://github.com/KKaraman/KKfitnessTracker).

The link for the kkfitnesstracker heroku app can be found [here](https://kkfitnesstracker.herokuapp.com/).

If you liked this, you can see my other repositories at my [GitHub profile](https://github.com/KKaraman).
