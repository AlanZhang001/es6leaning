
/**
 * 画月亮
 */
class Moon{
    // 初始化Moon所在画布
    constructor(ctx,width,height,canvasWidth){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
    }

    draw(){
        let ctx = this.ctx;
        //  渐变开始的圆的位置
        let startCircule = {
            x:200,
            y:200,
            r:80
        };
        // 渐变结束的圆的位置
        let stopCircule = {
            x:200,
            y:200,
            r:800
        };
        let gradient = ctx.createRadialGradient(startCircule.x, startCircule.y, startCircule.r,
            stopCircule.x, stopCircule.y, stopCircule.r);

        //径向渐变,为开始圆和结束圆之间添加颜色渐变
        gradient.addColorStop(0, 'rgb(255,255,255)');
        gradient.addColorStop(0.01, 'rgb(70,70,80)');
        gradient.addColorStop(0.2, 'rgb(40,40,50)');
        gradient.addColorStop(0.4, 'rgb(20,20,30)');
        gradient.addColorStop(1, 'rgb(0,0,10)');

        ctx.save();
        ctx.fillStyle = gradient;
        ctx.fillRect(0,0,this.width,this.height);
        ctx.restore();
    }

    move(){

    }
}

export default Moon;