# Testing out js modules as VF static resources

This little project was a bit of reserch to come up with a preferred way to incorporate a JS ES6 module script in a Visualforce page. Requirements were: 

- VF
- ES6 modules JS
- Page global variables and JS objects needed to be passed into the JS module
- The JS module need to have a function invoked inline on the VF page

I incorporated this into the VF page recipe for Lightning Message Service in the 
LWC Recipes sample app [here](https://github.com/trailheadapps/lwc-recipes/pull/309).

As usual, MDN provided excellent guidance to find a way to do this, given the
structure of Visualforce. You can learn about modules in this MDN [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).