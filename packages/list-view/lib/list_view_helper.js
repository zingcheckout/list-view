Ember.ListViewHelper = {
  applyTransform: (function(){
    var element = document.createElement('div');

    if ('webkitTransform' in element.style){
      return function(element, position){
        var x = position.x,
            y = position.y;

        var w = this.get('elementWidth'),
            h = this.get('rowHeight'); 

        element.style.width = w + 'px'; 
        element.style.height = h + 'px';

        element.style.webkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
      };
    }else{
      return function(element, position){
        var x = position.x,
            y = position.y;

        element.style.top =  y + 'px';
        element.style.left = x + 'px';
      };
    }
  })()
};
