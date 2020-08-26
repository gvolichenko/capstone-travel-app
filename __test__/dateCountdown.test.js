import { dateCountdown } from "../src/client/js/app.js"
import { TestScheduler } from "jest"
require('jest-fetch-mock').enableMocks()


// this test was passed on 8/24/20
test('dateCountdown works correctly', () => {
    const today =  new Date() ;
    const sept1 = new Date('2020-09-01') ;
    const correctDiff = Math.ceil( (sept1 - today )  / (1000*60*60*24) )+1;
    
    expect(dateCountdown('2020-09-01')).toBe(correctDiff);
})

