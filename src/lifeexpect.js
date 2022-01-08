export default class LifeExp{
  mercuryLife(number){
    this.life = Math.round(number*.24);
    this.left = Math.round(79*.24)-this.life;
    return this.left;
  }
  venusLife(number){
    this.life = Math.round(number*.62);
    this.left = Math.round(79*.62-this.life);
    return this.left;
  }
  marsLife(number){
    this.life = Math.round(number*1.88);
    this.left = Math.round(79*1.88-this.life);
    return this.left;
  }
  jupiterLife(number){
    this.life = Math.round(number*11.86);
    this.left = Math.round(79*11.86-this.life);
    return this.left;
  }
}