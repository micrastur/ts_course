import { commonUserData } from './basicTypes/basicTypes';
import generateUserContent from './tsInterfaces/tsInterfaces';

window.onload = () => {
    console.log('s', generateUserContent);
    generateUserContent(commonUserData);
}