import Stars    from './Stars';
import Moon     from './Moon';
import Meteor   from './Meteor';


var FESTIVAL = {
    size:{
        width: window.innerWidth,
        height: window.innerHeight
    },

    conut:{
        stars: 250
    },

    maxFrameInterval:10,

    initial: function(canvas){
        canvas.width = this.size.width;
        canvas.height = this.size.height;
        this.ctx = canvas.getContext('2d');

        this.genarateItems();
        this.flash();
    },

    genarateItems: function(){
        this.stars = new Stars(this.ctx,this.size.width,this.size.height,this.conut.stars);
        this.moon = new Moon(this.ctx,this.size.width,this.size.height,this.size.width);
        this.meteors = [];
        this.meteorGenerator();
    },

    //流星生成函数
    meteorGenerator : function(){
        //x位置偏移，以免经过月亮
        let x = Math.random() * this.size.width + 800;
        this.meteors.push(new Meteor(this.ctx, x, this.size.height));

        //每隔随机时间，生成新流星
        setTimeout(()=> {
            this.meteorGenerator();
        }, Math.random() * 2000);
    },

    flash: function(){
        this.frameInterval = this.frameInterval || 0;
        this.frameInterval++;
        this.frameInterval%this.maxFrameInterval ===0 && this.stars.blink();

        this.moon.draw();
        this.stars.draw();

        this.meteors.forEach((meteor, index, arr)=> {
            //如果流星离开视野之内，销毁流星实例，回收内存
            if (meteor.flow()) {
                meteor.draw();
            } else {
                arr.splice(index, 1);
            }
        });

        requestAnimationFrame(this.flash.bind(this));
    }

};

FESTIVAL.initial(document.getElementById('canvas'));