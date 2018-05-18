/* /// <reference path="nameSpaces/nameSpaces" /> */

import { UserInfo } from './nameSpaces/nameSpaces';
import {
    getUserLeftSavings,
    addVisitedCountries,
    ExtendDistance
} from './generics/generics';
import UniqUser from './classes/classes';
import { commonUserData } from './basicTypes/basicTypes';


import UserContent = UserInfo.UserContent;

window.onload = () => {
    UserContent.generateUserContent(commonUserData);

    getUserLeftSavings<number>(30);
    addVisitedCountries<string>(['New Zealand', 'Morocco']);

    const distance = new ExtendDistance<string, string>();
    distance.plannedPath = "40";
    distance.extraPath = "15";
    const commonPath: number = distance.getCommonPath();
    console.log(commonPath);
    var person1 = new UniqUser('Vasya', 'Manager');
    //console.log(person1.userName, person1.jobPosition);
    
}