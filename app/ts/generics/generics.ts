import { commonUserData } from '../basicTypes/basicTypes';

// Basic Gemeric
export function getUserLeftSavings<T extends number>(expenses: T) {
    return commonUserData.savings -= expenses;
}

// Build-in Generic - Array

export const addVisitedCountries = <T>(countries: T[]): void => {
    countries.forEach((item) => {
        commonUserData.visitedCountries.push( item );
    });
}

// Generic Class with multiple generics
export class ExtendDistance<T extends U, U extends string> {
    public plannedPath!: T;
    public extraPath!: U;
    getCommonPath(): number {
        return +this.plannedPath + +this.extraPath;
    }
}