<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#development-environment">Development environment</a></li>
    <li><a href="#tools-and-related-documents">Tools & related documents</a></li>
    <li><a href="#extensions">Extensions</a></li>
    <li>
      <a href="#coding-conventions">Coding conventions</a>
      <ul>
        <li><a href="#naming">Naming</a></li>
        <li><a href="#formatting-rules">Formatting Rules</a></li>
         <li><a href="#comment-rules">Comment rules</a></li>
         <li><a href="#css-rules">CSS rules</a></li>
         <li><a href="#git-commands">Git commands</a></li>
         <li><a href="#how-to-write-a-commit-message">How to write a commit message</a></li>
      </ul>
    </li>
    <li>
      <a href="#git-commands">Git commands</a>
      <ul>
         <li><a href="#git-commands">Git commands</a></li>
      </ul>
    </li>
    <li><a href="#debug-and-maintenance-rules">Debug and maintenance rules</a></li>
  </ol>
</details>

## Installation

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

1. Clone the repo
   ```sh
   git clone https://github.com/hienluong97/training_todoapp.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Runs the app in the development mode.
   ```sh
   npm start
   ```
4. Open the code and start customizing!
   Your site is now running at http://localhost:3000.

<!-- Development environment-->
## Development environment
```
・Environment: NodeJS and NPM
・Languages: JavaScript, CSS
・Framework: Reactjs18
```
## Tools and related documents

* [VS code ](https://code.visualstudio.com/)
* [Open API](https://swagger.io/)  3.0.3
* [Font Awesome](https://fontawesome.com)
* [React documentation ](https://reactjs.org/)
## Extensions

* [Swagger Viewer ](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) ID: Arjun.swagger-viewer
* [OpenAPI Swagger Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi) ID: proohit.openapi-snippets
* [OpenApi Snippets](https://marketplace.visualstudio.com/items?itemName=proohit.openapi-snippets) ID: 42Crunch.vscode-openapi
## Coding conventions

### Naming
#### Folders
- Start with a letter, use `hyphencase` for names.
#### Variables
- Start variable names with a letter, use `camelCase` for names.
- Boolean variables are usually prefixed with `is` or `has`.

#### Functions
- Start function names with a letter, use `camelCase` for names.

#### Constant
- Define constants at the top of your file, function or class.
- `UPPER_SNAKE_CASE` is used .

#### Components
- Start components names with a letter, use `PascalCase` for names.
### Formatting Rules
```
[JavaScript, CSS] 

• Use Prettier.
• Indentation with spaces.
• Two spaces on a tab
```

### Comment rules
Following JavaScript comments JSDoc rules。[reference](https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html)
### CSS rules

#### Class Names
- Use one dash and lowercase letters for your class names, ex: `form_button`.
- Keep classes as short as possible, but prefix them accordingly when they belong to a specific component.
- Namespace component states by using a `.is_` prefix. (ex: `.is_open`, `.is_collapsed`, `.is_loading`)
​
## Git commands

Add
```
$ git add .
```
Commit
```
$ git commit -m "{message}"
```
Push a new branch
```
$ git push --set-upstream origin {branch_name}
```
Push
```
$ git push origin {branch_name}
```
Pull
```
$ git pull origin {branch_name}
```

### How to write a commit message
```
# Specify the issue ex: design fix #51
git commit -m "content #issue number"

# Close a completed issue.
git commit -m "content close #issue number"
```
## Debug and maintenance rules
-flow-
```
- Minor action that does not affect the system or business: Directly reflected in production → Report
- Responses that affect the system or business & Responses that change the design significantly: Reflect in STG → Report → Main maintenance mode → Reflect in production → Report → Cancel maintenance mode
```
-Response time-
```
- Business-impacting issues: Prompt response.
- Issues that do not affect business performance: deal with when you have time. If it is expected that multiple locations will be dealt with in a short period of time, it is OK to deal with them after accumulating to some extent.
```
