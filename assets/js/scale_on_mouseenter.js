AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        large: {
            default: '2.5 2.5 2.5', 
            type: 'vec3'
        },
        small: {
            default: '1 1 1', 
            type: 'vec3'
        }
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.el.addEventListener('mouseenter', function () {
            el.object3D.scale.copy(data.large);
        });

        this.el.addEventListener('mouseleave', function () {
        el.object3D.scale.copy(data.small);
        });
    
    // animation__mouseenter="property: scale; to: 2.3 2.3 2.3; dur: 300; startEvents: mouseenter"
    // animation__mouseleave="property: scale; to: 2 2 2; dur: 300; startEvents: mouseleave"
    }
});