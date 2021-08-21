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

![Package.json](https://github.com/leonardo1710/WebEngineeringSDE/blob/main/2WebDeveloperToolchain/images/packagejson1.png)


