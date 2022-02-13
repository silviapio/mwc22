# 👩‍💻 Developer's Manual

## Basics

This app was bootstrapped with [Create React App](https://create-react-app.dev/).

### Install

```sh
npm install
```

### Usage

```sh
npm start
```

## Routing

The routing was done with [React Router](https://reactrouter.com/).

There are 3 routes available: home ("/"), form ("/"), profile ("/").

## Data Storage

LocalStorage API is used to store user's data.

## Folder and Files Structure

Folder `src` is organized as follows:
- `assets` folder which contains:
    - a subfolder `images` which stores images (logo and default avatar)
    - file `inputsData.js` which stores all data related to inputs (text, textarea, radio)
- `general-styles` folder which contains a CSS reset sheet (`index.css`), the CSS variables (`globalStyles.js`), and the media queries / devices variables (`mediaQueries.js`)
- `utils` folder, containing some general purpose functions
- `components` folder, storing all the functional components apart from `App.js`, which is left in `src` folder. Specifically:
    - `composed` folder contains all components which are composed by units (or, in the case of `Main`, which contain different screens)
    - `screens` folder contains components which are rendered on different routes, namely: `Home`, `Form`, `Profile`
    - `units` folder contains stateless components that are single units (like button, input, etc) and are used in other components

Folder `public` has the typical content of a CRA.

## Styling

Styling is done using a CSS-in-JS library, [styled components](https://styled-components.com/)

Each component has its own styles defined in the same folder, named with this pattern:

Component file `Home.js` --> styles file `Home.styles.js`.

### Media queries

The UI is optimized for small devices.

Media breakpoints are:

- tablet: 768px
- laptop: 1024px
- desktop: 1560px


## Screens Overview

### Home

Home simply checks if user's data is present in the LocalStorage, if no data is found then the Welcome screen is displayed, else a Welcome Back message is shown.

## Form

Form contains the most logic of the application, as it's a stateful component handling the inputs change, the input errors (except for the skills input), and the data submission (or denial of the same in case of blocking errors).

Inputs Full Name, Email, Country are validated when losing focus (`onBlur`). Full Name and Country cause error only if empty, Email causes error if the format is not valid (this is tested with a simple regex).

Input Description is validated on change, based on the character allowance. The characters left are displayed below, when this number is negative this causes an error.

Radio inputs have preset values, no validation is needed.

Gender input is used to generate a consistent Avatar. This is delegated to a separate stateful component, `AvatarBox`, which on mounting fetches a random image url with no set gender from an API. In case an error is thrown, a fallback image (saved locally) is used and a message is displayed. Otherwise, the fetched image is shown in the avatar box. Every time the gender is changed or the button "Change it" is clicked, a new image url is fetched. Then this url is passed to `Form` and is stored in its state, so that it can be saved with the other form data.

Skills input is used to generate different skills as tags (labels), but this task is again delegated to a stateful component, `SkillsBox`, which lets the user add a skill pressing on button "Add" or pressing Enter. Validation is done inside this component (it's not possible to add a skill if the input is empty or exceeds characters allowance). Once a skill is added, it is passed to `Form` and pushed in an array stored in its state. All the same, if the delete icon on the tag is clicked, `Form` gets the relevant info and deletes the skill from the array.

If no errors are present on inputs (excepts skills, whose error only prevents adding a new skill, but doesn't block saving), when "Save Data" is clicked, data is saved to LocalStorage. Else, the error is displayed and the page scrolls to top.

If "Reset Form" is clicked, all form data is cleared and user is taken back to Home.

## Profile

This is a pretty simple component that is used only to display user's data. It holds a single piece of state populated with data retrieved in LocalStorage.

It shouldn't be possible for the user to get to the profile page without having saved a profile (as the routing is done with react-router and no urls are set as reachable other than the home), but if by any means one gets to the profile page without having daved their data, a "no data available" message will be displayed.

In the typical case, data will be found, then modified in order for the text to be displayed properly, then rendered in the UI. 

The only option here is to go back to Form and edit data from there (`Form` component will detect data in the LocalStorage and display the form already populated).

