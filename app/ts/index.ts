/* /// <reference path="nameSpaces/nameSpaces" /> */

import { UserInfo } from './nameSpaces/nameSpaces';
import { commonUserData } from './basicTypes/basicTypes';
import UserContent = UserInfo.UserContent;

window.onload = () => {
    console.log(UserInfo, UserContent)
    UserContent.generateUserContent(commonUserData);
}