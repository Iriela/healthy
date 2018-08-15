import { auth, database, provider, refValue } from '../Config/app_config.js';


export function getCurrentValue(){
    return refValue.once('value').then(snapshot => snapshot.child('Value').val());
}
export function incrementValue(newValue){
    refValue.update({Value: newValue + 1})
    console.log('value incremented');
}

export const addItem =  () => {
    valueObj++;
}