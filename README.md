# Team Profile Generator

## Description

This application allows the simplicity of generating a profile page for your company just by answering straight forward questions using some of the software that will be discussed later on. With the use of Node.js and the Inquirer package, it will prompt users to input information regarding their employees or themselves and submit to be generated into a HTML profile page. Once everything has been filled out successfully, the page will automatically be generated at the user's disposal.

## Table of Contents

* User Story
* Acceptance Criteria
* Mock Up
* Getting Started & Installation
* Test
* Socials

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

<img src="./Assets/Screenshot.png"> The pathway for the generated HTML file is located in the /dist folder of the application.

## Getting Started & Installation

To get started with the application,  make sure you have the latest version of Node installed.

Following the installation of Node, clone this repository to the local server to begin generating the Profile page.

Once the repository has been connected, install the following packages in the terminal:
```
npm i inquirer@8.2.4 jest@29.3.1 fs
```
After installation of the packages, in the same terminal, run the application by typing:

```
node index.js
```

The user will then be prompted to answer the questions that will create the profile through HTML and CSS.

## Test

```
npm run test
```


## Socials

For details regarding the specific application, proceed to the repository: https://github.com/wiju24/Profile-Generator 

For details regarding the Github profile, click on the link: https://github.com/wiju24

For any questions or concerns, do not hesitate to email: vijithiran_navajeevayokan@hotmail.com
