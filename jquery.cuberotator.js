/*
 * 3D Cube Rotator 
 * @version: 0.1 
 * @authors: Ian Moriarty and Evan Dana
 */

//show top
$.fn.rotate_down_top = function(mode, until, step, initial, elt) {
  var _mode = mode; // true = up, false = down
  var _until = (!until) ? 0 : until;
  var _step = (!step) ? -1 : step;
  var _initial = (!initial) ? 90 : initial;
  var _elt = (!elt) ? $(this) : elt;

  var deg = _initial + _step;

  var browser_prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];
  for (var i=0, l = browser_prefixes.length; i < l; i++) {
    var pfx = browser_prefixes[i]; 
    _elt.css(pfx+'transform', 'perspective(625px) translate3d(0px, '+ -(116/90)*deg+'px, 0px) scale3d(1, 1, 1) rotateX('+deg+'deg)');
    //_elt.css(pfx+'transform-origin', '50% '+deg+'%');
  }

  if (deg > _until) {
    setTimeout(function() {
      $(this).rotate_down_top(_mode, _until, _step, deg, _elt); //recursive call
    }, 20);
  }
};

$.fn.rotate_down_front = function(mode, until, step, initial, elt) {
  var _mode = mode; // true = up, false = down
  var _until = (!until) ? -90 : until;
  var _step = (!step) ? -1 : step;
  var _initial = (!initial) ? 0: initial;
  var _elt = (!elt) ? $(this) : elt;

  var deg = _initial + _step;

  var browser_prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];

  for (var i=0, l = browser_prefixes.length; i < l; i++) {
    var pfx = browser_prefixes[i]; 
    _elt.css(pfx+'transform', 'perspective(625px) translate3d(0px, '+ -(116/90)*deg+'px, 0px) scale3d(1, 1, 1) rotateX('+deg+'deg)');
    //_elt.css(pfx+'transform-origin', '50% '+deg+'%');
  }

  if (deg > _until) {
    setTimeout(function() {
      $(this).rotate_down_front(_mode, _until, _step, deg, _elt); //recursive call
    }, 20);
  }
};

//show bottom
$.fn.rotate_up_top = function(mode, until, step, initial, elt) {
  var _mode = mode; // true = up, false = down
  var _until = (!until) ? 90 : until;
  var _step = (!step) ? 1 : step;
  var _initial = (!initial) ? 0 : initial;
  var _elt = (!elt) ? $(this) : elt;

  var deg = _initial + _step;

  var browser_prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];
  for (var i=0, l = browser_prefixes.length; i < l; i++) {
    var pfx = browser_prefixes[i]; 
    _elt.css(pfx+'transform', 'perspective(625px) translate3d(0px, '+ -(116/90)*deg+'px, 0px) scale3d(1, 1, 1) rotateX('+deg+'deg)');
    //_elt.css(pfx+'transform-origin', '50% '+deg+'%');
  }

  if (deg < _until) {
    setTimeout(function() {
      $(this).rotate_up_top(_mode, _until, _step, deg, _elt); //recursive call
    }, 20);
  }
};

$.fn.rotate_up_front = function(mode, until, step, initial, elt) {
  var _mode = mode; // true = up, false = down
  var _until = (!until) ? 0 : until;
  var _step = (!step) ? 1 : step;
  var _initial = (!initial) ? -90: initial;
  var _elt = (!elt) ? $(this) : elt;

  var deg = _initial + _step;

  var browser_prefixes = ['-webkit-', '-moz-', '-o-', '-ms-', ''];

  for (var i=0, l = browser_prefixes.length; i < l; i++) {
    var pfx = browser_prefixes[i]; 
    _elt.css(pfx+'transform', 'perspective(625px) translate3d(0px, '+ -(116/90)*deg+'px, 0px) scale3d(1, 1, 1) rotateX('+deg+'deg)');
    //_elt.css(pfx+'transform-origin', '50% '+deg+'%');
  }

  if (deg < _until) {
    setTimeout(function() {
      $(this).rotate_up_front(_mode, _until, _step, deg, _elt); //recursive call
    }, 20);
  }
};
