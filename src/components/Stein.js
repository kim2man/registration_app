import SteinStore from 'stein-js-client';
import Constants from '../constants';

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5d3fb20987c49c04cac13693"
);

function writeToDatabase(parentInfo, student) {
    let registration = {...parentInfo, ...student};
    writeRegistration(registration);
}

function writeRegistration(registration) {
    store.append(Constants.dbYear, [registration], 
    {
        authentication: { username: Constants.username, password: Constants.auth }
    })
    .then(res => {
        window.location.href = '/confirmation';
    }).catch(err => {
        console.log(err);
        window.location.href = '/about';
    });
}

async function searchDatabase(email) {
    // console.log("em: " + email);
    return await store.read(Constants.previousDbYear,     
    {
        authentication: { username: Constants.username, password: Constants.auth },
        search: { email: email }
    })
    .then(data => {
        // console.log("Found " + data.length + " student(s): ");
        // data.forEach(element => {
        //     console.log(element.engName);
        // });
        // console.log(" Would you like to re-register them?");
        return data;
      }).catch(err => {
        console.log(err);
    });
}

export default {writeToDatabase, searchDatabase, writeRegistration};