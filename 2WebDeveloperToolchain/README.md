# Web Developer Toolchain - Step by Step

## Overview
1. [Setup project with npm (Package management tool)](#npm_setup)
2. [Create static assets with Webpack (Project Bundler)](#webpack)
3. [Production build with Webpack](#webpack_prod)
4. [Integrate Babel in project (Transpilation tool for advanced browser support)](#babel)
5. [Integrate ESLint with Webpack and Babel](#eslint)
## Prerequisites
- Download and install [Node.js](https://nodejs.org/)
- Install IDE of you choice (eg. [VS Code](https://code.visualstudio.com/download))

## <a name="npm_setup">1. Setup project with npm</a>
Create a new Javascript application by creating a folder with your desired <project-name> to store all of the application source code. Navigate inside the folder and open the command line tool (for Windows Shift + right click -> “Powershell-Fenster hier öffnen”).

```shell
mkdir my-project
cd my-project
```

Next, we will initialize the project as npm project which comes with two benefits for the project: 
- First, you can install libraries (node packages) from npm to your project. 
- Secondly, you can add npm scripts to start, test, or deploy your project in a later stage of your project's lifecycle.

This step requires the installation of Node.js! Initialize npm project with command line tool:

``` shell
npm init -y
```
> The shorthand flag –y tells npm to take all the defaults.

Open the project in Visual Studio Code by typing “code .” inside the command line:

``` shell
code .
```

Now, since we have used npm to initialize it, our project should have a package.json file, which should be filled with defaults.

![Package.json](https://github.com/leonardo1710/WebEngineeringSDE/blob/main/2WebDeveloperToolchain/images/packagejson1.PNG)

After this step, it is possible to install libraries with npm. Once you have installed your first library via npm to your project, it should show up in your package.json file as dependency. In addition, you will see a `node_modules` folder showing up, where all your installed libraries will be kept as actual source code. Furthermore, a `package-lock.json` file will be created.
> `package-lock.json` describes the exact project dependency tree to generate identical projects on each machine.

Example installation of npm package [Axios](https://github.com/axios/axios):
``` shell
npm install axios
```

Your `package.json` file should look like this:

![Package.json dependencies](https://github.com/leonardo1710/WebEngineeringSDE/blob/main/2WebDeveloperToolchain/images/packagejson_dependencies.PNG)

There are 3 ways to install npm packages: 
- Install a package in project
  ``` shell
  npm install <package-name>
  ```
- Install a package as a development dependency (see details in [DevDependencies](#devdependencies))
  ``` shell
  npm install <package-name> --save-dev
  ```
- Install a package globally. 
  ``` shell
  npm install <package-name> -g
  ```

Inside your project create a folder named `\src`  and create an index.js file inside that folder. 

``` shell
mkdir src
cd src
touch index.js
```

> If you are not working on a linux machine you must install the touch cli to use `touch` commands (in cmd: `npm install touch-cli -g`). Of course you can just create the index.js file by hand.

To test if your project setup works, write a console.log()-statement inside index.js:

``` javascript
console.log("Hello npm project!");
```

Run project with CMD from root to see the console message:
``` shell
node src/index.js
```

### Automated task running

For automated task running, we can also define start, test and deployment scripts inside our `package.json`. The so-called `npm scripts`. Inside package.json in `scripts{}` block define:
``` json
{ 
  "name": "my-project",
  ...
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

Now we can start the application by only calling `npm start` in the command line. Every time you change the underlying start script in the package.json file's npm scripts, you only need to type “npm start” in the command line without the specifics of the underlying script.

### NPM Summary
- Npm is the package manager for the Node Javascript platform.
- Provides a way to package your program for others to consume.
- Provides a way to download the packages from a centralized repository.
- Makes it easier for you to manage and switch versions.

## <a name="webpack">2. Create static assets with Webpack (Project Bundler)</a> 

[Webpack](https://webpack.js.org/) is a Javascript bundler for web applications. In the past, you had to link Javascript files
manually in HTML files. With Webpack all dependencies and Javascript files are converted into static
assets and added to the HTML file.
![Webpack](https://www.w-vision.ch/blog/2018/webpack/image-thumb__518__support-article-zoom/webpack_overview.jpg "Static asset bundling")

Create a `/dist` folder inside your project root and add an `index.html` to it.
``` shell 
mkdir dist
cd dist
touch index.html
```
> The `/dist` folder is the so-called distribution folder (can have any name you want). The folder will be used to serve your application from a local or remote web server. The distribution folder will be everything you need to publish your web application.

### Project Bundler - Why?
Without dependency management and project bundlers, we would add the Javascript file to our HTML like this:
``` html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    <h1>Hello Webpack</h1>
    <script src="../src/index.js"></script>
  </body>
</html>
```
However, this may become a tedious task over time, because you have to keep track of what Javascript you link to your HTML file (if we have many dependencies, different source files, that depend on a specific order and so on). That is why we are using Webpack to generate one Javascript bundle from all our source code in the `/src` folder, which will be automatically put into your `/dist` folder afterwards. Then, it can be used in our entry point HTML file the following way:
``` html
<h1>Hello Webpack</h1>
<!-- Instead of 
<script src="../src/index.js"></script>
<script src="../src/myscript2.js"></script>
<script src="../src/myscript3.js"></script>
...
-->
<script src="bundle.js"></script>
```

### Install Webpack in project
You will use Webpack to bundle your JavaScript source code, but also to add advanced features to build your project with further build steps later on. Moreover, you will use the Webpack Dev Server to serve your project in a local environment with a local web server for development purposes. Last but not least, you need the Webpack CLI as well. Let's install all three dependencies as libraries (node packages) by using npm for your project. From your project's root directory, type the following command to install all libraries as development dependencies:
``` shell
npm install --save-dev webpack webpack-dev-server webpack-cli
```
> <a name="devdependencies">Development dependencies</a>: Development dependencies (short: dev dependencies, indicated with `--save-dev`) are <b>not bundled</b> in
your production code later on. This way, you keep the bundle for your production code lightweight. For instance,
if you want to test your source code later on, you can do this in your local development mode with all the
testing libraries installed as dev dependencies, but later on these libraries will not be included in the actual
application for production. 

> <a name="proddependencies">Production build dependencies</a>: Only the dependencies for running the source code are needed as production ready
dependencies. They can be installed without the `--save-dev flag`.

Your `package.json` should look like this:
![Package.json](https://github.com/leonardo1710/WebEngineeringSDE/blob/main/2WebDeveloperToolchain/images/packagejson_dev_dependencies.PNG)

Change the npm scripts section inside `package.json` to start the project with webpack server:
``` json
"scripts": {
    "start": "webpack serve --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
},
``` 

Run `npm start` in your command line to start the Webpack Development Server. To see the output,
navigate to your `dist/index.html` and open it in a browser. The browser DevTools indicate that the
bundle.js file cannot be found. That's because we didn't tell Webpack yet to generate it for us. 

Next, let's
see how we can bundle our source code files from the `/src` folder into the `/dist` folder with Webpack.

> Note: to stop the Webpack Development Server you have to press CTRL + C two times

Therefore, add the following addition to your `npm start` script in your `package.json` file:

```json
"scripts": {
    "start": "webpack serve --config ./webpack.config.js --mode development",
    ...
},
```

The script defines that you want to use the Webpack Dev Server with a configuration file called
`webpack.config.js`. Create the required webpack.config.js file in your project's root directory and add the
following code to it:
``` javascript
module.exports = {
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: './src/index.js',
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: './dist'
  }
};
```
Furthermore, we can resolve the paths so that they work across operating systems:

``` javascript
const path = require('path');

module.exports = {
  // 1
  // Use the src/index.js file as entry point to bundle it.
  // If the src/index.js file imports other JS files,
  // bundle them as well
  entry: path.resolve(__dirname, './src/index.js'),
  // 2
  // The bundles source code files shall result in a bundle.js file
  // in the /dist folder
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  // 3
  // The /dist folder will be used to serve our application
  // to the browser
  devServer: {
    static: path.resolve(__dirname, './dist'),
  }
};
```

Now we can start the Development Server again. After running npm start, we get a URL where the application is running in the command line (eg: Project is running at http://localhost:8080/). If you open
the URL in the browser, you should see the console.log() from the index.js file inside the DevTools Console.

Success! We integrated Webpack to our npm project and defined a correct setup for bundling our project
assets. You are now able to import other packages or script files into your index.js. They will be all
bundled into your bundle.js file through Webpack.

## <a name="webpack_prod">3. Production Build with Webpack</a>

## <a name="babel">4. Integrate Babel</a>

## <a name="eslint">5. Integrate ESLint</a>