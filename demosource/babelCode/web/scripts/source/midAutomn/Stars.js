/**
 * 星星为一堆集合，而不是具体的一个
 */
class Star{
    /**
     * [contructor 构造多个星星]
     * @param  {[type]} ctx    [画布]
     * @param  {[type]} height [星星可以存在的区域的高度]
     * @param  {[type]} width  [星星可以存在的区域宽度]
     * @param  {[type]} amount [需要产生的星星的]
     * @return {[type]}        [description]
     */
    constructor(ctx,height,width,amount) {
        this.ctx = ctx;
        this.height = height;
        this.width= height;
        this.stars = this.generateStars(amount);
    }

    /**
     * [generateStars 生产一定数量的星星，并保存在stars中]
     * @param  {Number} amount [星星的数量]
     * @return {[Object]}      [包含星星的属性]
     */
    generateStars(amount){
        let stars = [];
        while(amount--){
            stars.push({
                x: this.width * Math.random(),
                y: this.height * Math.random(),
                r: Math.random() + 0.55
            });
        }
        return stars;
    }

    /**
     * [draw 画星星]
     * @return {[type]} [description]
     */
    draw(){
         let ctx = this.ctx;
         ctx.save();
         ctx.fillStyle = '#fff';
         this.stars.forEach(item =>{
            ctx.beginPath();
            ctx.arc(item.x,item.y,item.r,0,2*Math.PI);
            ctx.fill();
         });
         ctx.restore();
    }

    /**
     * [blink 动态改变星星的半径，制造闪烁效果]
     * @return {[type]} [description]
     */
    blink() {
        this.stars.forEach(item => {
            let offset = Math.random() > 0.5 ? 0.4 : -0.4;
            item.r = Math.abs(item.r + offset);
            item.r > 1.5 && (item.r -= offset);
        });
    }
}

export default Star;