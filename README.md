## Before you start

- Run "CyberView test" in your repository.
- Send your repository when you are done.

## Installation and Running

Run the following commands to clone and run the repository.

`git clone <git repo URL>`

`cd <repo nameק>`

`npm install`

`npm start`

## Coding Challenge Requirements

- Push this cloned repo to your own, _personal_, Github/Gitlab account.
- Submit your _personal_ repo URL when finished your assignment.
- Make at least one commit, demonstrating how to write a good commit message.
- This coding challenge should not take more than 1-3 hours.

# React/Mobx

## Task 1

Create a User Model in React.

## Task 1 Details

- User Model should contain at least `Age` and `Name` properties.
- Ensure you have utilizing MobX reactivity decorators.
- A starter file is located at `~/src/models.User.model.ts`.

## Task 2

Create a `CurrentUserStore` that uses the `UserModel` type you just wrote in Task 1.

- A starter file is located at `~/src/stores/CurrentUser.store.ts`.

## Task 3

- Create two React components: `EditUser` and `DisplayUsername`.
- The components should be displayed, side by side, in the `App.tsx` component.

## Task 3 Details

## `EditUser`

- On component load, if no user information alrady exists, query this API `https://randomuser.me/api` and display some of the user's information.
- Create button that calls the API without refreshing the page.
- Component should allow editing of user's name and age.
- Store current user information in browser local storage. Load information on page load, if exists.
- Create button to clear all user information.

## `DisplayUsername`

Component should display the user's username.

- Username = user.name + user.age (Example: Eric30, Moshe25, Chaim42)
- Only the first 10 chars of a name should be displayed in the username, but the full name should be saved (even longer than 10 chars).
- Ensure that the first letter of the username is capital, and that rest of the letter are lowercase.
- Changes in the user's name and age should be automatically reflected in this component utilizing MobX reactivity.


# Notes

Your work will be judged based on these factors:

1. Does it run without errors?
2. Is the code clean and easy to understand?
3. Is the code easy to extend?
4. Does the code follow best practices?

If you have extra time and energy, feel free to add a feature of your own design. It will be taken into strong consideration.


Please provide feedback if any errors or bugs are encountered in this repo. We want to make your coding challenge as painless as possible.

- ICTBIT Dev Team
