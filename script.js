const el = document.querySelector('.figure-progress');

function figure(el, pers) {
  const sideQuarter = 25;
  const size = el.clientWidth / sideQuarter;
  const sizeH = el.clientHeight / sideQuarter;
  const wrapper = document.createElement('div');
  const pointer = document.createElement('div');

  pointer.style.width = size + 'px';
  pointer.style.height = sizeH + 'px';

  wrapper.classList.add('__wrap');
  pointer.classList.add('__pointer');
  
  el.append(wrapper);
  
  let top = 0;
  let right = 0;
  let bottom = 0;
  let left = 0;

  for (let i = 1; i <= pers; i++) {
    console.log(1 <= pers);

    const elem = document.createElement('i');
    
    elem.classList.add('__px');
    elem.style.width = size + 'px';
    elem.style.height = sizeH + 'px';
    wrapper.append(elem);

    if (i <= sideQuarter) {
      elem.style.left = size * top++ + 'px';
    } else if (i > sideQuarter && i <= sideQuarter * 2) {
      elem.style.right = 0;
      elem.style.top = sizeH * right++ + 'px';
    } else if (i > sideQuarter*2 && i <= sideQuarter * 3) {
      elem.style.bottom = 0;
      elem.style.right = size * bottom++ + 'px';
    } else {
      elem.style.left = 0;
      elem.style.bottom = sizeH * left++ + 'px';
    }
  }

  const lastItem = wrapper.childNodes[wrapper.childNodes.length - 1];

  pointer.style.top = lastItem.offsetTop + 'px';
  pointer.style.left = lastItem.offsetLeft + 'px';

  el.append(pointer);
}

figure(el, 1);