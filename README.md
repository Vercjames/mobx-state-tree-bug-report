# Mobx State Tree - Bug Report 
The following is an example project to highlight a potential deficiency within the mobx-state-tree library. 

## Getting Started || Live Development
Inside the project directory run:
```
$ yarn install
$ yarn run start 
```

## Bug Report || Problem Source
Inside [client-apps/routing-app/app-screen-index/index-screen.tsx](https://github.com/Vercjames/mobx-state-tree-bug-report/blob/master/client-apps/routing-app/app-screen-index/index-screen.tsx) 
you can enable this code which is currently removed
```
  // Enable This code
  React.useEffect(() => {
    // Presume this is the response from an API.
    TaskStore.TaskCollection[0].setDescription(null)
  }, [])
``` 


## Bug Report || Video Demo
To view my video report please check out it out [here](https://youtube.com/)

