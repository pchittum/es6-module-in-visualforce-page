//'use strict';

const testString = 'test';

let _testConfigs = {};

function setConfigs(configs){
    _testConfigs = {...configs};
}

function getConfigs(){
    return _testConfigs;
}

const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
    testAvailableVFObjects(event);
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
    testAvailableVFObjects(event);
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
    testAvailableVFObjects(event);
});

function testAvailableVFObjects(event){
    console.log('##### Start Checking VF Objects #####');
    console.log(event.type);
    console.dir(_testConfigs.contactModel);
    console.dir(_testConfigs.lmsSubscribe);
    console.dir(_testConfigs.user);
    //console.dir(window.lmsUtil.messageChannel);
    console.log('##### End Checking VF Objects #####');

}

export { setConfigs, getConfigs }; 
