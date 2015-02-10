var Sheep = cc.Sprite.extend({
    value:1,
    ctor:function (value) {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.value = value;
        var barPng = new cc.Sprite(res.man_png);
        barPng.setPosition(0,0);
        this.addChild(barPng);

        return true;
    }
});