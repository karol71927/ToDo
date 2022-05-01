# ToDo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Overview

Project is similar to JIRA or teams task board. It has 3 groups of tasks To Do, In Progress and Done.
![Home page](/resources/1.png)

It is single page application with modal windows. So whenever user wants to see task or add new one proper modal will be opened.

1. Add task window
   ![Add task window](/resources/2.png)
2. View task window
   ![View task window](/resources/3.png)
3. View tasks in day
   ![View tasks in day](/resources/4.png)

### Viewing tasks and adding comments

User can view task in modal window and there will be displayed title, description and comments sorted by date descending. When user adds comment he can add emojis with emoji picker. What is more user can change status of task and board will be reloaded.
![Emoji Picker](/resources/5.jpg)

### Adding tasks

User can add task. There are two mandatory fields title and description and there is an option to add date to it. It will be displayed under task title on task board. Additionally user can see that task is added in calendar. Both mandatory fields are validated before submitting. If user input will be invalid there will be information about it and save button will be disabled.
![Adding task with invalid data](/resources/6.png)

## Technical

App was made in Angular 13. There are many of small reusable components. For example there is modal window which is used in every modal it provides background and basic view. As you probably see on photos above each of window has title and x button in left corner.

I have used Angular Reactive Forms to control user input. I decided to use it instead of template driven forms because of the fact that logic of Reactive Forms is in the TypeScript file. I wanted to add some validators to the forms and it is easier to use it with Reactive Forms.

Tests were made with Jasmine and Karma. I have used CI/CD driver for GitHub used in purpose of continuos testing. Testing is launched by push of any branch on GitHub. I have used GitHub Actions because of the fact that it is built in GitHub and does not require any additional machine like Jenkins.

Additionally I have used:

- [ng-select](https://www.npmjs.com/package/@ng-select/ng-select) - package which provides dropdown list
- [ngx-emoji-mart](https://www.npmjs.com/package/@ctrl/ngx-emoji-mart) - package which provides emoji picker it is Angular port of emoji-mart
