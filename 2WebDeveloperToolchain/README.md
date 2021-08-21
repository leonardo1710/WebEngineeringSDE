# Web Developer Toolchain - Step by Step

## Overview
1. Setup project with npm (Package management tool)
2. Create static assets with Webpack (Project Bundler)
3. Production build with Webpack
4. Integrate Babel in project (Transpilation tool for advanced browser support)
5. Integrate ESLint with Webpack and Babel 
## Prerequisites
- Download and install [Node.js](https://nodejs.org/)
- Install IDE of you choice (eg. [VS Code](https://code.visualstudio.com/download))

## 1. Setup project with npm
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
<script src=".bundle.js"></script>
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