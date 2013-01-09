/*
 * 3D Cube Rotator 
 * @version: 0.1 
 * @authors: Ian Moriarty and Evan Dana
 */
 
$.fn.rotate_face = function(until, step, initial, direction, elt) {
  var _until = (!until) ? 0 : until;
  var _step = (!step) ? 1 : step;
  var _initial = (!initial) ? 0: initial;
  var _dir = (!direction) ? "up" : direction;
  var _elt = (!elt) ? $(this) : elt;

  var deg = _initial + _step;

  var browser_prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];

  for (var i=0, l = browser_prefixes.length; i < l; i++) {
    var pfx = browser_prefixes[i]; 
    _elt.css(pfx+'transform', 'perspective(625px) translate3d(0px, '+ -(116/90)*deg+'px, 0px) scale3d(1, 1, 1) rotateX('+deg+'deg)');
    //_elt.css(pfx+'transform-origin', '50% '+deg+'%');
  }

  if(deg === _until){
    //trigger at end of event
    _elt.trigger('TransitionEndTrigger');
  }

  if ((_dir === "up" && deg < _until) || (_dir === "down" && deg > _until)) {
    //time to call next iteration
    setTimeout(function() {
      $(this).rotate_face(_until, _step, deg, _dir, _elt); //recursive call
    }, 10);
  }
};
