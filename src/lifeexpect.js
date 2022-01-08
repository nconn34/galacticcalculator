export default class LifeExp{
    mercuryLife(number){
        this.life = Math.abs(Math.round(79-number*.24))
        return this.life
    }
      venusLife(number){
        this.life = Math.abs(Math.round(79-number*.62))
        return this.life
    }
      marsLife(number){
        this.life = Math.abs(Math.round(79-number*1.88))
        return this.life
    }
      jupiterLife(number){
        this.life = Math.abs(Math.round(79-number*11.86))
        return this.life
    }
}