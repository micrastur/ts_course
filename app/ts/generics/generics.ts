import { commonUserData } from '../basicTypes/basicTypes';

// Basic Gemeric
export function getUserLeftSavings<T>(expenses: T): T {
    return commonUserData.savings -= expenses;
}

//Build-in Generic - Array
export function addVisitedCountries<T>(countries: T[]) {
    countries.forEach((item: string) => {
        commonUserData.visitedCountries.push(item)
    });
}