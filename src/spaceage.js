export default class SpaceAge{
  mercuryAge(number){
    this.age = Math.round(number*.24);
    return this.age;
  }
  venusAge(number){
    this.age = Math.round(number*.62);
    return this.age;
  }
  marsAge(number){
    this.age = Math.round(number*1.88);
    return this.age;
  }
  jupiterAge(number){
    this.age = Math.round(number*11.86);
    return this.age;
  }
}
