import { TestScheduler } from 'jest'
import SpaceAge from '../src/spaceage.js'
import LifeExp from '../src/lifeexpect.js'

describe('SpaceAge', ()=>{
  test('should correctly return a users converted age on the specified planet', () =>{
      const age = new SpaceAge(40);
      expect(age.mercuryAge(40)).toEqual(10);
      expect(age.venusAge(40)).toEqual(25);
      expect(age.marsAge(40)).toEqual(75);
      expect(age.jupiterAge(40)).toEqual(474);
  });
});

describe('LifeExp', ()=>{
  test('should correctly return a users converted life expectency on the specified planet as a positive number', () =>{
      const life = new LifeExp(40);
      expect(life.mercuryLife(40)).toEqual(17);
      expect(life.venusLife(40)).toEqual(33);
      expect(life.marsLife(40)).toEqual(8);
      expect(life.jupiterLife(40)).toEqual(395);
  });
})