# React-Native Navigation:

# Methods

### Screens
- push(componentId, layout)
- pop(componentId, mergeOptions?)
- popToRoot(componentId, mergeOptions?)
- popTo(componentId, mergeOptions?)
- setStackRoot(componentId, params)
- showModal(layout = {})
- dismissModal(componentId, mergeOptions?)
- dismissAllModals(mergeOptions?)
- mergeOptions(componentId, options = {})  


### Explanation about Methods

#### Screens

1.push(componentId, layout)

Push a new screen into this screen's navigation stack.

```javascript
Navigation.push(this.props.componentId, {
  component: {
    name: 'example.PushedScreen',
    passProps: {
      text: 'Pushed screen'
    },
    options: {
      topBar: {
        title: {
          text: 'Pushed screen title'
        }
      }
    }
  }
});
```
2.pop(componentId, mergeOptions?)

Pop the top screen from this screen's navigation stack.

```javascript
Navigation.pop(this.props.componentId);
```

3.popToRoot(componentId, mergeOptions?)

Pop all the screens until the root from this screen's navigation stack.

```javascript
Navigation.popToRoot(this.props.componentId);
```

4.popTo(componentId, mergeOptions?)

Pop the stack to a given component.

```javascript
Navigation.popTo(componentId);
```

5.setStackRoot(componentId, params)

Reset the current navigation stack to a new screen component (the stack root is changed, accepts multiple children).

```javascript
Navigation.setStackRoot(this.props.componentId, [
    {
    component: {
          name: 'example.NewRootScreen',
          passProps: {
            text: 'Root screen'
          },
          options: {
            animations: {
              setStackRoot: {
                enabled: true
              }
            }
          }
        }
  }
]);
```
6.showModal(layout = {})
  Show a screen as a modal.

```javascript
Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: 'example.ModalScreen',
        passProps: {
          text: 'stack with one child'
        },
        options: {
          topBar: {
            title: {
              text: 'Modal'
            }
          }
        }
      }
    }]
  }
});
```
7.dismissModal(componentId, mergeOptions?)

Dismiss the current modal.

```javascript
Navigation.dismissModal(this.props.componentId);
```

8.dismissAllModals(mergeOptions?)
Dismiss all the current modals at the same time.

```javascript
Navigation.dismissAllModals();
```
9.mergeOptions(componentId, options = {})

  Set options dynamically for component.

  WARNING! this is called after the component has been rendered at least once. If you want the options to apply as soon as the screen is created, use static options(passProps){...} or pass the options as part of the push/modal etc command.

  ```javascript
  Navigation.mergeOptions(this.props.componentId, {
   topBar: {
     visible: true,
     title: {
       text: 'Title'
     }
   },
   bottomTabs: {

   },
   bottomTab: {

   },
   sideMenu: {

   },
   overlay: {

   }
 });
  ```  
