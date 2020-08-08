# What is Angular
- Framework to build SPA 
    - good for mobile app
    - less memory
- Targets all platform 
    - any OS
    - build and can be run any OS
    - could be used as normal HTML application
- Speed & performance
    - uses IV compiler

## Shell page
- The placedholder to put dynamic content inside

## Traditional vs SPA
<img src="spa-vs-traditional.jpg" alt="spa-vs-traditional">

## features
- Smaller builds
    - small bundled build size is smaller
- Typescript
    - super set of javascript
- Component Based
    - modulerize the application in smaller units
    - example - header, content, footer
- Annotations
    - @component
    - @module
- Reusability
    - directives, services, pipes 
    - to share data between the components
- Unit testable

## Concepts
- Modules
- Components
- Templates
- Directives
- Dependency Injection
- Routing
- Observables
- HTTP calls
- Services

## package
- packages in the form of modules
    - @angular/core
    - @angular/forms
    - @angular/http
    - @angular/router
- Hosted on NPM

## Ivy Compiler
- smaller bundle sizes
- faster testing
- better debugging
- improved css class and style binding
- improved type checking
- improved build errors
- improved build times, anabling AOT on by default

## cmds

### new
```
$ ng new <project-name>
```
- it installs `@angular/core, @angular/http, rxjs` etc

### serve 
```
$ ng serve
```
- Runs a dev server (Node.js) on localhost:4200 and host the app
- rusn the tranpiler in a watch mode

#### with different port
```
$ ng serve --host 0.0.0.0 --port 4201
```
## code Structure

### index.html
```html
/** where the angular code is put */
<app-root></app-root>
```

## Structure
<img src="angular-structure.jpg" alt="angular-structure" />

# Typescript
- helps finding errors at build time
- Typed language - String, number, boolean, enum
- we can write Object oriented programming
    - classes, interfaces, enums, access modifiers
    - strict null check
- Enhanced IDE support

## cons
- browsers do not support

## Transpilers
- convert the TS to equivalent JS

# Components
- are basic building blocks of angular application
- a component defines a patch of the screen
- example
    - navigation menu, login panel, shopping cart

## structure
- model
    - the data required 
    - for a login controller the model is 
        - userName, password
    - for a cartComponent
        - list of selected items
- view
    - HTML markup
- controller
    - controlling function acting on the data

## implementation
- with a typescript `class`
- annotated or decorated with `@Component`

```ts
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html', // View
    styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'my-dream-app';   // Model (data)
  // Controllers
  editTitle() {

  }
}
```

## Tree
- <img src="component-tree.jpg" alt="component-tree" />
- AppComponent is root - which is placed in `bootstrap` property of its module

## generate
```
$ ng g c login
```

# Modules
- organize the application, also conponents, directive, services, pipes can be under modules
- has a suffix `.module`
- <img src="module-example.jpg" alt="module-example" />
- root is geneneric
    - login
    - header, footer

## implementation
```ts
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### bootstrap property
can be multiple components forming their tree of components

<b>Note:</b> Having multiple bootstrap component, creates multiple trees of components and while injecting dependencies (ex. services), we will have to inject it to multiple trees