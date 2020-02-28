<h1 align="center">
  <p align="center">The Cat API</p>
<p align="center">

## Introduction

I have been set the following challenge:

1. Sign up and create an API key at https://thecatapi.com/

2. Create an app that retrieves some data from one of the cat API endpoints (of your choice) and renders it on a web page. (Be creative!)

3. Send us a link to a GitHub repo where we can view the code you've written. The root folder of the repo should contain a screenshot showing your app rendering the cat data.

## Getting Started

```
> clone git@github.com:FrankieBoye/theCATapi.git
> copy full path of index.html
> paste path into your browser address bar
> click button labelled 'CLICK FOR CAT!!'

You may require an API key. Head over to https://thecatapi.com and get one for free.

Pass the API key as a query parameter in index.js, eg e.g. https://thecatapi.com/v1/images?api_key=ABC123

To run a Cypress test, type 'node_modules/.bin/cypress open' into the terminal while in the root directory and press enter. This will open the Cypress test window. Then click 'Run all specs'.
```

## Cypress testing

![image](https://user-images.githubusercontent.com/44870179/75495227-ed18ce80-59b5-11ea-837c-655034a3acef.png)

![image](https://user-images.githubusercontent.com/44870179/75530330-a655c380-5a0b-11ea-96bd-fc3d68f33cae.png)

## Usage

This is a simple JavaScript/HTML web app that will display random cat pictures and GIFs at the press of a button.

## User stories

```
As a cat enthusiast, I would like to be able to see random cat photos.

```

## Future development

1. Unit tests still need to be written for this application. I need to look into using a mock API.

2. Currently the application is not responsive and the images do not resize according to the browser window size. The images from the API come in various sizes and to see some of the larger ones, you need to scroll the page. I need to look into CSS styling to solve this.

3. I want the cat fact to change every time the 'CLICK FOR CAT!!' button is pressed.

4. The formatting and styling will be improved also(fonts, button positioning etc)

## Screenshots
![image](https://user-images.githubusercontent.com/44870179/75353220-f1a09280-58a2-11ea-9a2e-c8e1882b8fec.png)

![image](https://user-images.githubusercontent.com/44870179/75353237-fbc29100-58a2-11ea-9fe4-4c835fadfe39.png)

Added a header and some CSS styling for the background and button.

![image](https://user-images.githubusercontent.com/44870179/75453080-40196400-596b-11ea-9240-0174b5428120.png)

Added a title for Cypress testing purposes.

![image](https://user-images.githubusercontent.com/44870179/75491390-ce163e80-59ad-11ea-8aee-639c654112d1.png)

Removed the static header and connected another API that returns cat facts.

![image](https://user-images.githubusercontent.com/44870179/75593374-0d5f9080-5a7d-11ea-997d-179d13270973.png)
