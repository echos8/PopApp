## Starting this project up

As you can see I made the base of this app in a lazy way with ionic templates. To start the app up go to your commandline and type ````ionic serve --browser chrome````
Now the app will be available at localhost:8100
If you make changes to the code you will be able to see them when you refresh the page.


## To Do's for now:

- Login Signup has to be finished (Nassim)
- After login if you get back a good response you go to the about page, new page has to be made with buttons ```new test```, ```skillls``` and ```fresh meat``` (Mariana or Nassim)
- Examplery _Screen shots_ have to be made from the drawing Echo's showed. So there will be an example of what the app will look like. (Echo)
- Look of the pages has to be tweaked (Echo)
- Backend has to be setup with Maven SpringBoot and Heroku, this will be a new repository (Nassim)
- Free Database has to be made (Nassim or Mariana)




This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

