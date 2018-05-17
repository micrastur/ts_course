/* /// <reference path="nameSpaces/nameSpaces" /> */

import { UserInfo } from './nameSpaces/nameSpaces';
import {
    getUserLeftSavings,
    addVisitedCountries
} from './generics/generics';
import { commonUserData } from './basicTypes/basicTypes';


import UserContent = UserInfo.UserContent;

window.onload = () => {
    console.log(UserInfo, UserContent)
    UserContent.generateUserContent(commonUserData);
    getUserLeftSavings<number>(30);
    addVisitedCountries<string>(['New Zealand', 'Morocco']);
}