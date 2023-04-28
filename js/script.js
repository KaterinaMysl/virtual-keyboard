

let bodyA = document.querySelector('body');

let addBlock = function () {
  bodyA.className = "body";
  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  bodyA.prepend(wrapper);


  let headerA = document.createElement("header");
  headerA.className = "header";
  wrapper.prepend(headerA);
  let headerCont = document.createElement("div");
  headerCont.className = "header__container container";
  headerA.append(headerCont);

  let title = document.createElement("h1");
  title.className = "title";
  title.innerText = 'Virtual Keyboard';
  headerCont.prepend(title);


  let mainA = document.createElement("main");
  mainA.className = "main";
  wrapper.append(mainA);

  let mainCont = document.createElement("div");
  mainCont.className = "main__container container";
  mainA.append(mainCont);
  let decorBox = document.createElement("div");
  decorBox.className = "main__decor-box";
  mainCont.append(decorBox);

  let colorsBox = document.createElement("div");
  colorsBox.className = "main__colors-box";
  decorBox.append(colorsBox);
  let colors = document.createElement("div");
  colors.className = "main__colors";
  colorsBox.append(colors);
  let colorsInput = document.createElement("input");
  colorsInput.className = "main__colors-input";
  colorsInput.type = "color";
  colorsInput.value = "#ada1a1";
  colors.append(colorsInput);

  let nightDay = document.createElement("div");
  nightDay.className = "main__night-day";
  decorBox.append(nightDay);
  let toggle = document.createElement("div");
  toggle.className = "main__night-day_toggle";
  nightDay.append(toggle);

  let infoLang = document.createElement("div");
  infoLang.className = "main__info-language";
  infoLang.innerText = 'Тут будет комбинация клавиш для смены языка';
  mainCont.append(infoLang);



  let keyboardText = document.createElement("textarea");
  keyboardText.className = "keyboard__text-area";
  keyboardText.type = "textarea";


  mainCont.append(keyboardText);


  let keyboard = document.createElement("div");
  keyboard.className = "main__keyboard keyboard";
  mainCont.append(keyboard);
  let keyboardWrapper = document.createElement("div");
  keyboardWrapper.className = "keyboard__wrapper";
  keyboard.append(keyboardWrapper);

  let keyboardLights = document.createElement("div");
  keyboardLights.className = "keyboard__lights";
  keyboardWrapper.append(keyboardLights);


  let keyboardButtons = document.createElement("div");
  keyboardButtons.className = "keyboard__keys buttons";
  keyboardWrapper.append(keyboardButtons);

  let row1 = document.createElement("div");
  row1.className = "row";
  keyboardButtons.append(row1);
  row1.insertAdjacentHTML('beforeend', `<div class="keys">\`</div >
  <div class="keys">1</div>
  <div class="keys">2</div>
  <div class="keys">3</div>
  <div class="keys">4</div>
  <div class="keys">5</div>
  <div class="keys">6</div>
  <div class="keys">7</div>
  <div class="keys">8</div>
  <div class="keys">9</div>
  <div class="keys">0</div>
  <div class="keys">-</div>
  <div class="keys">=</div>
  <div class="keys backspace_key">Backspace</div>`)
  let row2 = document.createElement("div");
  row2.className = "row";
  keyboardButtons.append(row2);
  row2.insertAdjacentHTML('beforeend', `<div class="keys tab_key">Tab</div>
  <div class="keys">q</div>
  <div class="keys">w</div>
  <div class="keys">e</div>
  <div class="keys">r</div>
  <div class="keys">t</div>
  <div class="keys">y</div>
  <div class="keys">u</div>
  <div class="keys">i</div>
  <div class="keys">o</div>
  <div class="keys">p</div>
  <div class="keys">\[</div>
  <div class="keys">\]</div>
  <div class="keys">\\</div>
  <div class="keys del_key">Del</div>`)
  let row3 = document.createElement("div");
  row3.className = "row";
  keyboardButtons.append(row3);
  row3.insertAdjacentHTML('beforeend', `<div class="keys caps_lock_key">CapsLock</div>
  <div class="keys">a</div>
  <div class="keys">s</div>
  <div class="keys">d</div>
  <div class="keys">f</div>
  <div class="keys">g</div>
  <div class="keys">h</div>
  <div class="keys">j</div>
  <div class="keys">k</div>
  <div class="keys">l</div>
  <div class="keys">\;</div>
  <div class="keys">\'</div>
  <div class="keys enter_key">Enter</div>`)
  let row4 = document.createElement("div");
  row4.className = "row";
  keyboardButtons.append(row4);
  row4.insertAdjacentHTML('beforeend', `<div class="keys shift_key shift_left">Shift</div>
  <div class="keys">z</div>
  <div class="keys">x</div>
  <div class="keys">c</div>
  <div class="keys">v</div>
  <div class="keys">b</div>
  <div class="keys">n</div>
  <div class="keys">m</div>
  <div class="keys">\,</div>
  <div class="keys">\.</div>
  <div class="keys">\/</div>
  <div class="keys">▲</div>
  <div class="keys shift_key shift_right">Shift</div>`)
  let row5 = document.createElement("div");
  row5.className = "row";
  keyboardButtons.append(row5);
  row5.insertAdjacentHTML('beforeend', `<div class="keys ctrl_key ctrl_left">Ctrl</div>
  <div class="keys win_key">Win</div>
  <div class="keys alt_key alt_left">Alt</div>
  <div class="keys space_key"></div>
  <div class="keys alt_key alt_right">Alt</div>
  <div class="keys">◄</div>
  <div class="keys">▼</div>
  <div class="keys">►</div>
  <div class="keys ctrl_key ctrl_right">Ctrl</div>`)


  let footerA = document.createElement("footer");
  footerA.className = "footer";
  wrapper.append(footerA);


  let footerCont = document.createElement("div");
  footerCont.className = "footer__container container";
  footerA.append(footerCont);

  let link = document.createElement("a");
  link.className = "footer__link";
  link.href = 'https://github.com/KaterinaMysl/virtual-keyboard';
  footerCont.append(link);
  let icon = document.createElement("img");
  icon.className = "footer__icon";
  icon.src = './img/github.png';
  icon.alt = "github icon";
  link.append(icon);

  let textLink = document.createElement("div");
  textLink.className = "footer__text-link";
  textLink.innerText = 'virtual-keyboard-code';
  link.append(textLink);

  let name = document.createElement("div");
  name.className = "footer__name";
  name.innerText = 'by Kate Mysliuchyk';
  footerCont.append(name);


}
addBlock('');

