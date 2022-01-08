export default class LifeExp{
    mercuryLife(number){
        this.life = Math.abs(Math.round(79-number*.24))
        this.left = Math.round(this.life*.24)
        return this.left
    }
      venusLife(number){
        this.life = Math.abs(Math.round(79-number*.62))
        this.left = Math.round(this.life*.62)
        return this.left
    }
      marsLife(number){
        this.life = Math.abs(Math.round(79-number*1.88))
        this.left = Math.round(this.life*1.88)
        return this.left
    }
      jupiterLife(number){
        this.life = Math.abs(Math.round(79-number*11.86))
        this.left = Math.round(this.life*11.86)
        return this.left
    }
}