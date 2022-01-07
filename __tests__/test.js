import { TestScheduler } from 'jest'
import SpaceAge from '../src/spaceage.js'

describe('SpaceAge', ()=>{
  test('should correctly return a users converted age on the specified planet', () =>{
      const age = new SpaceAge(40);
      expect(age.mercuryAge(40)).toEqual(9.6);
      expect(age.venusAge(40)).toEqual(24.8)
  });
})