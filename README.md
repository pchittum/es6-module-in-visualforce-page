# Testing out js modules as VF static resources

This little project was a bit of reserch to come up with a preferred way to incorporate a JS ES6 module script in a Visualforce page. Requirements were: 

- VF
- ES6 modules JS
- Page global variables and JS objects needed to be passed into the JS module
- The js module need to have a function invoked inline on the VF page

Incorporated this into the VF page recipe for Lightning Message Service in the 
LWC Recipes sample app here: https://github.com/trailheadapps/lwc-recipes/pull/309