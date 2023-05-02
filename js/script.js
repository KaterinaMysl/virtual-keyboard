const bodyA = document.querySelector('body');
const addBlock = function () {
  bodyA.className = 'body';
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  bodyA.prepend(wrapper);

  const headerA = document.createElement('header');
  headerA.className = 'header';
  wrapper.prepend(headerA);
  const headerCont = document.createElement('div');
  headerCont.className = 'header__container container';
  headerA.append(headerCont);

  const title = document.createElement('h1');
  title.className = 'title';
  title.innerText = 'Virtual Keyboard';
  headerCont.prepend(title);


  const mainA = document.createElement('main');
  mainA.className = 'main';
  wrapper.append(mainA);

  const mainCont = document.createElement('div');
  mainCont.className = 'main__container container';
  mainA.append(mainCont);
  const decorBox = document.createElement('div');
  decorBox.className = 'main__decor-box';
  mainCont.append(decorBox);

  const colorsBox = document.createElement('div');
  colorsBox.className = 'main__colors-box';
  decorBox.append(colorsBox);
  const decorText = document.createElement('div');
  decorText.className = 'main__text-color';
  colorsBox.append(decorText);
  decorText.insertAdjacentHTML('beforeend', `
  <span>Ц</span>
  <span>в</span>
  <span>е</span>
  <span>т</span>

  <span>н</span>
  <span>а</span>
  <span>с</span>
  <span>т</span>
  <span>р</span>
  <span>о</span>
  <span>е</span>
  <span>н</span>
  <span>и</span>
  <span>я</span>
  `);
  const colors = document.createElement('div');
  colors.className = 'main__colors';
  colorsBox.append(colors);
  const colorsInput = document.createElement('input');
  colorsInput.className = 'main__colors-input';
  colorsInput.type = 'color';
  colorsInput.value = '#ada1a1';
  colors.append(colorsInput);

  const nightDay = document.createElement('div');
  nightDay.className = 'main__night-day';
  decorBox.append(nightDay);
  const toggle = document.createElement('div');
  toggle.className = 'main__night-day_toggle';
  nightDay.append(toggle);

  const infoLang = document.createElement('div');
  infoLang.className = 'main__info-language';
  infoLang.innerText = 'Смена языка Ctrl + Alt или кнопка:';
  mainCont.append(infoLang);
  const langButton = document.createElement('button');
  langButton.className = 'main__lang-button';
  langButton.type = 'button';
  langButton.innerText = 'en';
  infoLang.append(langButton);

  const keyboard = document.createElement('div');
  keyboard.className = 'main__keyboard keyboard';
  mainCont.append(keyboard);
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard__wrapper';
  keyboard.append(keyboardWrapper);

  const keyboardText = document.createElement('textarea');
  keyboardText.className = 'keyboard__text-area';
  keyboardText.type = 'textarea';
  keyboardWrapper.append(keyboardText);

  const keyboardLights = document.createElement('div');
  keyboardLights.className = 'keyboard__lights';
  keyboardWrapper.append(keyboardLights);


  const keyboardButtons = document.createElement('div');
  keyboardButtons.className = 'keyboard__keys';
  keyboardWrapper.append(keyboardButtons);

  const row1 = document.createElement('div');
  row1.className = 'keyboard__row';
  keyboardButtons.append(row1);
  row1.insertAdjacentHTML('beforeend', `

    <div class='keyboard__key key Backquote'>
    <div class='rs hidden'>
      <div class='caseDown'>ё</div>
      <div class='caseUp hidden'>Ё</div>
      <div class='caps hidden'>Ё</div>
      <div class='shiftCaps hidden'>ё</div>
    </div>
    <div class='en'>
      <div class='caseDown'>\`</div>
      <div class='caseUp hidden'>~</div>
      <div class='caps hidden'>\`</div>
      <div class='shiftCaps hidden'>~</div>
    </div>
  </div>

    <div class='keyboard__key key Digit1'>
    <div class='rs hidden'>
      <div class='caseDown'>1</div>
      <div class='caseUp hidden'>!</div>
      <div class='caps hidden'>1</div>
      <div class='shiftCaps hidden'>!</div>
    </div>
    <div class='en'>
      <div class='caseDown'>1</div>
      <div class='caseUp hidden'>!</div>
      <div class='caps hidden'>1</div>
      <div class='shiftCaps hidden'>!</div>
    </div>
  </div>


  <div class='keyboard__key key Digit2'>
    <div class='rs hidden'>
      <div class='caseDown'>2</div>
      <div class='caseUp hidden'>'</div>
      <div class='caps hidden'>2</div>
      <div class='shiftCaps hidden'>'</div>
    </div>
    <div class='en'>
      <div class='caseDown'>2</div>
      <div class='caseUp hidden'>@</div>
      <div class='caps hidden'>2</div>
      <div class='shiftCaps hidden'>@</div>
    </div>
  </div>


  <div class='keyboard__key key Digit3'>
    <div class='rs hidden'>
      <div class='caseDown'>3</div>
      <div class='caseUp hidden'>№</div>
      <div class='caps hidden'>3</div>
      <div class='shiftCaps hidden'>№</div>
    </div>
    <div class='en'>
      <div class='caseDown'>3</div>
      <div class='caseUp hidden'>#</div>
      <div class='caps hidden'>3</div>
      <div class='shiftCaps hidden'>#</div>
    </div>
  </div>


  <div class='keyboard__key key Digit4'>
    <div class='rs hidden'>
      <div class='caseDown'>4</div>
      <div class='caseUp hidden'>;</div>
      <div class='caps hidden'>4</div>
      <div class='shiftCaps hidden'>;</div>
    </div>
    <div class='en'>
      <div class='caseDown'>4</div>
      <div class='caseUp hidden'>$</div>
      <div class='caps hidden'>4</div>
      <div class='shiftCaps hidden'>$</div>
    </div>
  </div>


  <div class='keyboard__key key Digit5'>
    <div class='rs hidden'>
      <div class='caseDown'>5</div>
      <div class='caseUp hidden'>%</div>
      <div class='caps hidden'>5</div>
      <div class='shiftCaps hidden'>%</div>
    </div>
    <div class='en'>
      <div class='caseDown'>5</div>
      <div class='caseUp hidden'>%</div>
      <div class='caps hidden'>5</div>
      <div class='shiftCaps hidden'>%</div>
    </div>
  </div>


  <div class='keyboard__key key Digit6'>
    <div class='rs hidden'>
      <div class='caseDown'>6</div>
      <div class='caseUp hidden'>:</div>
      <div class='caps hidden'>6</div>
      <div class='shiftCaps hidden'>:</div>
    </div>
    <div class='en'>
      <div class='caseDown'>6</div>
      <div class='caseUp hidden'>^</div>
      <div class='caps hidden'>6</div>
      <div class='shiftCaps hidden'>^</div>
    </div>
  </div>

  <div class='keyboard__key key Digit7'>
    <div class='rs hidden'>
      <div class='caseDown'>7</div>
      <div class='caseUp hidden'>?</div>
      <div class='caps hidden'>7</div>
      <div class='shiftCaps hidden'>?</div>
    </div>
    <div class='en'>
      <div class='caseDown'>7</div>
      <div class='caseUp hidden'>&amp;</div>
      <div class='caps hidden'>7</div>
      <div class='shiftCaps hidden'>&amp;</div>
    </div>
  </div>


  <div class='keyboard__key key Digit8'>
    <div class='rs hidden'>
      <div class='caseDown'>8</div>
      <div class='caseUp hidden'>*</div>
      <div class='caps hidden'>8</div>
      <div class='shiftCaps hidden'>*</div>
    </div>
    <div class='en'>
      <div class='caseDown'>8</div>
      <div class='caseUp hidden'>*</div>
      <div class='caps hidden'>8</div>
      <div class='shiftCaps hidden'>*</div>
    </div>
  </div>


  <div class='keyboard__key key Digit9'>
    <div class='rs hidden'>
      <div class='caseDown'>9</div>
      <div class='caseUp hidden'>(</div>
      <div class='caps hidden'>9</div>
      <div class='shiftCaps hidden'>(</div>
    </div>
    <div class='en'>
      <div class='caseDown'>9</div>
      <div class='caseUp hidden'>(</div>
      <div class='caps hidden'>9</div>
      <div class='shiftCaps hidden'>(</div>
    </div>
  </div>


  <div class='keyboard__key key Digit0'>
    <div class='rs hidden'>
      <div class='caseDown'>0</div>
      <div class='caseUp hidden'>)</div>
      <div class='caps hidden'>0</div>
      <div class='shiftCaps hidden'>)</div>
    </div>
    <div class='en'>
      <div class='caseDown'>0</div>
      <div class='caseUp hidden'>)</div>
      <div class='caps hidden'>0</div>
      <div class='shiftCaps hidden'>)</div>
    </div>
  </div>


  <div class='keyboard__key key Minus'>
    <div class='rs hidden'>
      <div class='caseDown'>-</div>
      <div class='caseUp hidden'>_</div>

      <div class='caps hidden'>-</div>
      <div class='shiftCaps hidden'>_</div>
    </div>
    <div class='en'>
      <div class='caseDown'>-</div>
      <div class='caseUp hidden'>_</div>
      <div class='caps hidden'>-</div>
      <div class='shiftCaps hidden'>_</div>
    </div>
  </div>


  <div class='keyboard__key key Equal'>
    <div class='rs hidden'>
      <div class='caseDown'>=</div>
      <div class='caseUp hidden'>+</div>
      <div class='caps hidden'>=</div>
      <div class='shiftCaps hidden'>+</div>
    </div>
    <div class='en'>
      <div class='caseDown'>=</div>
      <div class='caseUp hidden'>+</div>
      <div class='caps hidden'>=</div>
      <div class='shiftCaps hidden'>+</div>
    </div>
  </div>
  <div class='keyboard__key key Backspace backspace_key'>
    <div class='rs hidden'>
      <div class='caseDown'>Backspace</div>
      <div class='caseUp hidden'>Backspace</div>
      <div class='caps hidden'>Backspace</div>
      <div class='shiftCaps hidden'>Backspace</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Backspace</div>
      <div class='caseUp hidden'>Backspace</div>
      <div class='caps hidden'>Backspace</div>
      <div class='shiftCaps hidden'>Backspace</div>
    </div>
  </div>


    `);
  const row2 = document.createElement('div');
  row2.className = 'keyboard__row';
  keyboardButtons.append(row2);
  row2.insertAdjacentHTML('beforeend', `
    <div class='keyboard__key key Tab tab_key'>
    <div class='rs hidden'>
      <div class='caseDown'>Tab</div>
      <div class='caseUp hidden'>Tab</div>
      <div class='caps hidden'>Tab</div>
      <div class='shiftCaps hidden'>Tab</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Tab</div>
      <div class='caseUp hidden'>Tab</div>
      <div class='caps hidden'>Tab</div>
      <div class='shiftCaps hidden'>Tab</div>
    </div>
  </div>
  <div class='keyboard__key key KeyQ'>
    <div class='rs hidden'>
      <div class='caseDown'>й</div>
      <div class='caseUp hidden'>Й</div>
      <div class='caps hidden'>Й</div>
      <div class='shiftCaps hidden'>й</div>
    </div>
    <div class='en'>
      <div class='caseDown'>q</div>
      <div class='caseUp hidden'>Q</div>
      <div class='caps hidden'>Q</div>
      <div class='shiftCaps hidden'>q</div>
    </div>
  </div>
  <div class='keyboard__key key KeyW'>
    <div class='rs hidden'>
      <div class='caseDown'>ц</div>
      <div class='caseUp hidden'>Ц</div>
      <div class='caps hidden'>Ц</div>
      <div class='shiftCaps hidden'>ц</div>
    </div>
    <div class='en'>
      <div class='caseDown'>w</div>
      <div class='caseUp hidden'>W</div>
      <div class='caps hidden'>W</div>
      <div class='shiftCaps hidden'>w</div>
    </div>
  </div>
  <div class='keyboard__key key KeyE'>
    <div class='rs hidden'>
      <div class='caseDown'>у</div>
      <div class='caseUp hidden'>У</div>
      <div class='caps hidden'>У</div>
      <div class='shiftCaps hidden'>у</div>
    </div>
    <div class='en'>
      <div class='caseDown'>e</div>
      <div class='caseUp hidden'>E</div>
      <div class='caps hidden'>E</div>
      <div class='shiftCaps hidden'>e</div>
    </div>
  </div>
  <div class='keyboard__key key KeyR'>
    <div class='rs hidden'>
      <div class='caseDown'>к</div>
      <div class='caseUp hidden'>К</div>
      <div class='caps hidden'>К</div>
      <div class='shiftCaps hidden'>к</div>
    </div>
    <div class='en'>
      <div class='caseDown'>r</div>
      <div class='caseUp hidden'>R</div>
      <div class='caps hidden'>R</div>
      <div class='shiftCaps hidden'>r</div>
    </div>
  </div>
  <div class='keyboard__key key KeyT'>
    <div class='rs hidden'>
      <div class='caseDown'>е</div>
      <div class='caseUp hidden'>Е</div>
      <div class='caps hidden'>Е</div>
      <div class='shiftCaps hidden'>е</div>
    </div>
    <div class='en'>
      <div class='caseDown'>t</div>
      <div class='caseUp hidden'>T</div>
      <div class='caps hidden'>T</div>
      <div class='shiftCaps hidden'>t</div>
    </div>
  </div>
  <div class='keyboard__key key KeyY'>
    <div class='rs hidden'>
      <div class='caseDown'>н</div>
      <div class='caseUp hidden'>Н</div>
      <div class='caps hidden'>Н</div>
      <div class='shiftCaps hidden'>н</div>
    </div>
    <div class='en'>
      <div class='caseDown'>y</div>
      <div class='caseUp hidden'>Y</div>
      <div class='caps hidden'>Y</div>
      <div class='shiftCaps hidden'>y</div>
    </div>
  </div>
  <div class='keyboard__key key KeyU'>
    <div class='rs hidden'>
      <div class='caseDown'>г</div>
      <div class='caseUp hidden'>Г</div>
      <div class='caps hidden'>Г</div>
      <div class='shiftCaps hidden'>г</div>
    </div>
    <div class='en'>
      <div class='caseDown'>u</div>
      <div class='caseUp hidden'>U</div>
      <div class='caps hidden'>U</div>
      <div class='shiftCaps hidden'>u</div>
    </div>
  </div>
  <div class='keyboard__key key KeyI'>
    <div class='rs hidden'>
      <div class='caseDown'>ш</div>
      <div class='caseUp hidden'>Ш</div>
      <div class='caps hidden'>Ш</div>
      <div class='shiftCaps hidden'>ш</div>
    </div>
    <div class='en'>
      <div class='caseDown'>i</div>
      <div class='caseUp hidden'>I</div>
      <div class='caps hidden'>I</div>
      <div class='shiftCaps hidden'>i</div>
    </div>
  </div>
  <div class='keyboard__key key KeyO'>
    <div class='rs hidden'>
      <div class='caseDown'>щ</div>
      <div class='caseUp hidden'>Щ</div>
      <div class='caps hidden'>Щ</div>
      <div class='shiftCaps hidden'>щ</div>
    </div>
    <div class='en'>
      <div class='caseDown'>o</div>
      <div class='caseUp hidden'>O</div>
      <div class='caps hidden'>O</div>
      <div class='shiftCaps hidden'>o</div>
    </div>
  </div>
  <div class='keyboard__key key KeyP'>
    <div class='rs hidden'>
      <div class='caseDown'>з</div>
      <div class='caseUp hidden'>З</div>
      <div class='caps hidden'>З</div>
      <div class='shiftCaps hidden'>з</div>
    </div>
    <div class='en'>
      <div class='caseDown'>p</div>
      <div class='caseUp hidden'>P</div>
      <div class='caps hidden'>P</div>
      <div class='shiftCaps hidden'>p</div>
    </div>
  </div>
  <div class='keyboard__key key BracketLeft'>
    <div class='rs hidden'>
      <div class='caseDown'>х</div>
      <div class='caseUp hidden'>Х</div>
      <div class='caps hidden'>Х</div>
      <div class='shiftCaps hidden'>х</div>
    </div>
    <div class='en'>
      <div class='caseDown'>[</div>
      <div class='caseUp hidden'>{</div>
      <div class='caps hidden'>[</div>
      <div class='shiftCaps hidden'>{</div>
    </div>
  </div>
  <div class='keyboard__key key BracketRight'>
    <div class='rs hidden'>
      <div class='caseDown'>ъ</div>
      <div class='caseUp hidden'>Ъ</div>
      <div class='caps hidden'>Ъ</div>
      <div class='shiftCaps hidden'>ъ</div>
    </div>
    <div class='en'>
      <div class='caseDown'>]</div>
      <div class='caseUp hidden'>}</div>
      <div class='caps hidden'>]</div>
      <div class='shiftCaps hidden'>}</div>
    </div>
  </div>
  <div class='keyboard__key key Backslash'>
    <div class='rs hidden'>
      <div class='caseDown'>\\</div>
      <div class='caseUp hidden'>\/</div>
      <div class='caps hidden'>\/</div>
      <div class='shiftCaps hidden'>\/</div>
    </div>
    <div class='en'>
      <div class='caseDown'>\\</div>
      <div class='caseUp hidden'>|</div>
      <div class='caps hidden'>\</div>
      <div class='shiftCaps hidden'>|</div>
    </div>
  </div>
  <div class='keyboard__key key Delete del_key'>
    <div class='rs hidden'>
      <div class='caseDown'>Del</div>
      <div class='caseUp hidden'>Del</div>
      <div class='caps hidden'>Del</div>
      <div class='shiftCaps hidden'>Del</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Del</div>
      <div class='caseUp hidden'>Del</div>
      <div class='caps hidden'>Del</div>
      <div class='shiftCaps hidden'>Del</div>
    </div>
  </div>

    `);
  const row3 = document.createElement('div');
  row3.className = 'keyboard__row';
  keyboardButtons.append(row3);
  row3.insertAdjacentHTML('beforeend', `
    <div class='keyboard__key key CapsLock caps_lock_key'>
    <div class='rs hidden'>
      <div class='caseDown'>CapsLock</div>
      <div class='caseUp hidden'>CapsLock</div>
      <div class='caps hidden'>CapsLock</div>
      <div class='shiftCaps hidden'>CapsLock</div>
    </div>
    <div class='en'>
      <div class='caseDown'>CapsLock</div>
      <div class='caseUp hidden'>CapsLock</div>
      <div class='caps hidden'>CapsLock</div>
      <div class='shiftCaps hidden'>CapsLock</div>
    </div>
  </div>
  <div class='keyboard__key key KeyA'>
    <div class='rs hidden'>
      <div class='caseDown'>ф</div>
      <div class='caseUp hidden'>Ф</div>
      <div class='caps hidden'>Ф</div>
      <div class='shiftCaps hidden'>ф</div>
    </div>
    <div class='en'>
      <div class='caseDown'>a</div>
      <div class='caseUp hidden'>A</div>
      <div class='caps hidden'>A</div>
      <div class='shiftCaps hidden'>a</div>
    </div>
  </div>
  <div class='keyboard__key key KeyS'>
    <div class='rs hidden'>
      <div class='caseDown'>ы</div>
      <div class='caseUp hidden'>Ы</div>
      <div class='caps hidden'>Ы</div>
      <div class='shiftCaps hidden'>ы</div>
    </div>
    <div class='en'>
      <div class='caseDown'>s</div>
      <div class='caseUp hidden'>S</div>
      <div class='caps hidden'>S</div>
      <div class='shiftCaps hidden'>s</div>
    </div>
  </div>
  <div class='keyboard__key key KeyD'>
    <div class='rs hidden'>
      <div class='caseDown'>в</div>
      <div class='caseUp hidden'>В</div>
      <div class='caps hidden'>В</div>
      <div class='shiftCaps hidden'>в</div>
    </div>
    <div class='en'>
      <div class='caseDown'>d</div>
      <div class='caseUp hidden'>D</div>
      <div class='caps hidden'>D</div>
      <div class='shiftCaps hidden'>d</div>
    </div>
  </div>
  <div class='keyboard__key key KeyF'>
    <div class='rs hidden'>
      <div class='caseDown'>а</div>
      <div class='caseUp hidden'>А</div>
      <div class='caps hidden'>А</div>
      <div class='shiftCaps hidden'>а</div>
    </div>
    <div class='en'>
      <div class='caseDown'>f</div>
      <div class='caseUp hidden'>F</div>
      <div class='caps hidden'>F</div>
      <div class='shiftCaps hidden'>f</div>
    </div>
  </div>
  <div class='keyboard__key key KeyG'>
    <div class='rs hidden'>
      <div class='caseDown'>п</div>
      <div class='caseUp hidden'>П</div>
      <div class='caps hidden'>П</div>
      <div class='shiftCaps hidden'>п</div>
    </div>
    <div class='en'>
      <div class='caseDown'>g</div>
      <div class='caseUp hidden'>G</div>
      <div class='caps hidden'>G</div>
      <div class='shiftCaps hidden'>g</div>
    </div>
  </div>
  <div class='keyboard__key key KeyH'>
    <div class='rs hidden'>
      <div class='caseDown'>р</div>
      <div class='caseUp hidden'>Р</div>
      <div class='caps hidden'>Р</div>
      <div class='shiftCaps hidden'>р</div>
    </div>
    <div class='en'>
      <div class='caseDown'>h</div>
      <div class='caseUp hidden'>H</div>
      <div class='caps hidden'>H</div>
      <div class='shiftCaps hidden'>h</div>
    </div>
  </div>
  <div class='keyboard__key key KeyJ'>
    <div class='rs hidden'>
      <div class='caseDown'>о</div>
      <div class='caseUp hidden'>О</div>
      <div class='caps hidden'>О</div>
      <div class='shiftCaps hidden'>о</div>
    </div>
    <div class='en'>
      <div class='caseDown'>j</div>
      <div class='caseUp hidden'>J</div>
      <div class='caps hidden'>J</div>
      <div class='shiftCaps hidden'>j</div>
    </div>
  </div>
  <div class='keyboard__key key KeyK'>
    <div class='rs hidden'>
      <div class='caseDown'>л</div>
      <div class='caseUp hidden'>Л</div>
      <div class='caps hidden'>Л</div>
      <div class='shiftCaps hidden'>л</div>
    </div>
    <div class='en'>
      <div class='caseDown'>k</div>
      <div class='caseUp hidden'>K</div>
      <div class='caps hidden'>K</div>
      <div class='shiftCaps hidden'>k</div>
    </div>
  </div>
  <div class='keyboard__key key KeyL'>
    <div class='rs hidden'>
      <div class='caseDown'>д</div>
      <div class='caseUp hidden'>Д</div>
      <div class='caps hidden'>Д</div>
      <div class='shiftCaps hidden'>д</div>
    </div>
    <div class='en'>
      <div class='caseDown'>l</div>
      <div class='caseUp hidden'>L</div>
      <div class='caps hidden'>L</div>
      <div class='shiftCaps hidden'>l</div>
    </div>
  </div>
  <div class='keyboard__key key Semicolon'>
    <div class='rs hidden'>
      <div class='caseDown'>ж</div>
      <div class='caseUp hidden'>Ж</div>
      <div class='caps hidden'>Ж</div>
      <div class='shiftCaps hidden'>ж</div>
    </div>
    <div class='en'>
      <div class='caseDown'>;</div>
      <div class='caseUp hidden'>:</div>
      <div class='caps hidden'>;</div>
      <div class='shiftCaps hidden'>:</div>
    </div>
  </div>
  <div class='keyboard__key key Quote'>
    <div class='rs hidden'>
      <div class='caseDown'>э</div>
      <div class='caseUp hidden'>Э</div>
      <div class='caps hidden'>Э</div>
      <div class='shiftCaps hidden'>э</div>
    </div>
    <div class='en'>
      <div class='caseDown'>'</div>
      <div class='caseUp hidden'>'</div>
      <div class='caps hidden'>'</div>
      <div class='shiftCaps hidden'>'</div>
    </div>
  </div>
  <div class='keyboard__key key Enter enter_key'>
    <div class='rs hidden'>
      <div class='caseDown'>Enter</div>
      <div class='caseUp hidden'>Enter</div>
      <div class='caps hidden'>Enter</div>
      <div class='shiftCaps hidden'>Enter</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Enter</div>
      <div class='caseUp hidden'>Enter</div>
      <div class='caps hidden'>Enter</div>
      <div class='shiftCaps hidden'>Enter</div>
    </div>
  </div>

    `);
  const row4 = document.createElement('div');
  row4.className = 'keyboard__row';
  keyboardButtons.append(row4);
  row4.insertAdjacentHTML('beforeend', `

    <div class='keyboard__key key ShiftLeft shift_key shift_left'>
    <div class='rs hidden'>
      <div class='caseDown'>Shift</div>
      <div class='caseUp hidden'>Shift</div>
      <div class='caps hidden'>Shift</div>
      <div class='shiftCaps hidden'>Shift</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Shift</div>
      <div class='caseUp hidden'>Shift</div>
      <div class='caps hidden'>Shift</div>
      <div class='shiftCaps hidden'>Shift</div>
    </div>
  </div>
  <div class='keyboard__key key KeyZ'>
    <div class='rs hidden'>
      <div class='caseDown'>я</div>
      <div class='caseUp hidden'>Я</div>
      <div class='caps hidden'>Я</div>
      <div class='shiftCaps hidden'>я</div>
    </div>
    <div class='en'>
      <div class='caseDown'>z</div>
      <div class='caseUp hidden'>Z</div>
      <div class='caps hidden'>Z</div>
      <div class='shiftCaps hidden'>z</div>
    </div>
  </div>
  <div class='keyboard__key key KeyX'>
    <div class='rs hidden'>
      <div class='caseDown'>ч</div>
      <div class='caseUp hidden'>Ч</div>
      <div class='caps hidden'>Ч</div>
      <div class='shiftCaps hidden'>ч</div>
    </div>
    <div class='en'>
      <div class='caseDown'>x</div>
      <div class='caseUp hidden'>X</div>
      <div class='caps hidden'>X</div>
      <div class='shiftCaps hidden'>x</div>
    </div>
  </div>
  <div class='keyboard__key key KeyC'>
    <div class='rs hidden'>
      <div class='caseDown'>с</div>
      <div class='caseUp hidden'>С</div>
      <div class='caps hidden'>С</div>
      <div class='shiftCaps hidden'>с</div>
    </div>
    <div class='en'>
      <div class='caseDown'>c</div>
      <div class='caseUp hidden'>C</div>
      <div class='caps hidden'>C</div>
      <div class='shiftCaps hidden'>c</div>
    </div>
  </div>
  <div class='keyboard__key key KeyV'>
    <div class='rs hidden'>
      <div class='caseDown'>м</div>
      <div class='caseUp hidden'>М</div>
      <div class='caps hidden'>М</div>
      <div class='shiftCaps hidden'>м</div>
    </div>
    <div class='en'>
      <div class='caseDown'>v</div>
      <div class='caseUp hidden'>V</div>
      <div class='caps hidden'>V</div>
      <div class='shiftCaps hidden'>v</div>
    </div>
  </div>
  <div class='keyboard__key key KeyB'>
    <div class='rs hidden'>
      <div class='caseDown'>и</div>
      <div class='caseUp hidden'>И</div>
      <div class='caps hidden'>И</div>
      <div class='shiftCaps hidden'>и</div>
    </div>
    <div class='en'>
      <div class='caseDown'>b</div>
      <div class='caseUp hidden'>B</div>
      <div class='caps hidden'>B</div>
      <div class='shiftCaps hidden'>b</div>
    </div>
  </div>
  <div class='keyboard__key key KeyN'>
    <div class='rs hidden'>
      <div class='caseDown'>т</div>
      <div class='caseUp hidden'>Т</div>
      <div class='caps hidden'>Т</div>
      <div class='shiftCaps hidden'>т</div>
    </div>
    <div class='en'>
      <div class='caseDown'>n</div>
      <div class='caseUp hidden'>N</div>
      <div class='caps hidden'>N</div>
      <div class='shiftCaps hidden'>n</div>
    </div>
  </div>
  <div class='keyboard__key key KeyM'>
    <div class='rs hidden'>
      <div class='caseDown'>ь</div>
      <div class='caseUp hidden'>Ь</div>
      <div class='caps hidden'>Ь</div>
      <div class='shiftCaps hidden'>ь</div>
    </div>
    <div class='en'>
      <div class='caseDown'>m</div>
      <div class='caseUp hidden'>M</div>
      <div class='caps hidden'>M</div>
      <div class='shiftCaps hidden'>m</div>
    </div>
  </div>
  <div class='keyboard__key key Comma'>
    <div class='rs hidden'>
      <div class='caseDown'>б</div>
      <div class='caseUp hidden'>Б</div>
      <div class='caps hidden'>Б</div>
      <div class='shiftCaps hidden'>б</div>
    </div>
    <div class='en'>
      <div class='caseDown'>,</div>
      <div class='caseUp hidden'>&lt;</div>
      <div class='caps hidden'>,</div>
      <div class='shiftCaps hidden'>&lt;</div>
    </div>
  </div>
  <div class='keyboard__key key Period'>
    <div class='rs hidden'>
      <div class='caseDown'>ю</div>
      <div class='caseUp hidden'>Ю</div>
      <div class='caps hidden'>Ю</div>
      <div class='shiftCaps hidden'>ю</div>
    </div>
    <div class='en'>
      <div class='caseDown'>.</div>
      <div class='caseUp hidden'>&gt;</div>
      <div class='caps hidden'>.</div>
      <div class='shiftCaps hidden'>&gt;</div>
    </div>
  </div>
  <div class='keyboard__key key Slash'>
    <div class='rs hidden'>
      <div class='caseDown'>.</div>
      <div class='caseUp hidden'>,</div>
      <div class='caps hidden'>.</div>
      <div class='shiftCaps hidden'>,</div>
    </div>
    <div class='en'>
      <div class='caseDown'>/</div>
      <div class='caseUp hidden'>?</div>
      <div class='caps hidden'>/</div>
      <div class='shiftCaps hidden'>?</div>
    </div>
  </div>
  <div class='keyboard__key key ArrowUp'>
    <div class='rs hidden'>
      <div class='caseDown'>&#9650;</div>
      <div class='caseUp hidden'>&#9650;</div>
      <div class='caps hidden'>&#9650;</div>
      <div class='shiftCaps hidden'>&#9650;</div>
    </div>
    <div class='en'>
      <div class='caseDown'>&#9650;</div>
      <div class='caseUp hidden'>&#9650;</div>
      <div class='caps hidden'>&#9650;</div>
      <div class='shiftCaps hidden'>&#9650;</div>
    </div>
  </div>
  <div class='keyboard__key key ShiftRight shift_key shift_right'>
    <div class='rs hidden'>
      <div class='caseDown'>Shift</div>
      <div class='caseUp hidden'>Shift</div>
      <div class='caps hidden'>Shift</div>
      <div class='shiftCaps hidden'>Shift</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Shift</div>
      <div class='caseUp hidden'>Shift</div>
      <div class='caps hidden'>Shift</div>
      <div class='shiftCaps hidden'>Shift</div>
    </div>
  </div>
    `);
  const row5 = document.createElement('div');
  row5.className = 'keyboard__row';
  keyboardButtons.append(row5);
  row5.insertAdjacentHTML('beforeend', `


    <div class='keyboard__key key ControlLeft ctrl_key ctrl_left'>
    <div class='rs hidden'>
      <div class='caseDown'>Ctrl</div>
      <div class='caseUp hidden'>Ctrl</div>
      <div class='caps hidden'>Ctrl</div>
      <div class='shiftCaps hidden'>Ctrl</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Ctrl</div>
      <div class='caseUp hidden'>Ctrl</div>
      <div class='caps hidden'>Ctrl</div>
      <div class='shiftCaps hidden'>Ctrl</div>
    </div>
  </div>
  <div class='keyboard__key key MetaLeft win_key'>
    <div class='rs hidden'>
      <div class='caseDown'>Win</div>
      <div class='caseUp hidden'>Win</div>
      <div class='caps hidden'>Win</div>
      <div class='shiftCaps hidden'>Win</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Win</div>
      <div class='caseUp hidden'>Win</div>
      <div class='caps hidden'>Win</div>
      <div class='shiftCaps hidden'>Win</div>
    </div>
  </div>
  <div class='keyboard__key key AltLeft alt_key altLeft'>
    <div class='rs hidden'>
      <div class='caseDown'>Alt</div>
      <div class='caseUp hidden'>Alt</div>
      <div class='caps hidden'>Alt</div>
      <div class='shiftCaps hidden'>Alt</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Alt</div>
      <div class='caseUp hidden'>Alt</div>
      <div class='caps hidden'>Alt</div>
      <div class='shiftCaps hidden'>Alt</div>
    </div>
  </div>
  <div class='keyboard__key key Space space_key'>
    <div class='rs hidden'>
      <div class='caseDown'> </div>
      <div class='caseUp hidden'> </div>
      <div class='caps hidden'> </div>
      <div class='shiftCaps hidden'>
      </div>
    </div>
    <div class='en'>
      <div class='caseDown'> </div>
      <div class='caseUp hidden'> </div>
      <div class='caps hidden'> </div>
      <div class='shiftCaps hidden'> </div>
    </div>
  </div>
  <div class='keyboard__key key AltRight alt_key altRight'>
    <div class='rs hidden'>
      <div class='caseDown'>Alt</div>
      <div class='caseUp hidden'>Alt</div>
      <div class='caps hidden'>Alt</div>
      <div class='shiftCaps hidden'>Alt</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Alt</div>
      <div class='caseUp hidden'>Alt</div>
      <div class='caps hidden'>Alt</div>
      <div class='shiftCaps hidden'>Alt</div>
    </div>
  </div>
  <div class='keyboard__key key ArrowLeft'>
    <div class='rs hidden'>
      <div class='caseDown'>◄</div>
      <div class='caseUp hidden'>◄</div>
      <div class='caps hidden'>◄</div>
      <div class='shiftCaps hidden'>◄</div>
    </div>
    <div class='en'>
      <div class='caseDown'>◄</div>
      <div class='caseUp hidden'>◄</div>
      <div class='caps hidden'>◄</div>
      <div class='shiftCaps hidden'>◄</div>
    </div>
  </div>
  <div class='keyboard__key key ArrowDown'>
    <div class='rs hidden'>
      <div class='caseDown'>▼</div>
      <div class='caseUp hidden'>▼</div>
      <div class='caps hidden'>▼</div>
      <div class='shiftCaps hidden'>▼</div>
    </div>
    <div class='en'>
      <div class='caseDown'>▼</div>
      <div class='caseUp hidden'>▼</div>
      <div class='caps hidden'>▼</div>
      <div class='shiftCaps hidden'>▼</div>
    </div>
  </div>
  <div class='keyboard__key key ArrowRight'>
    <div class='rs hidden'>
      <div class='caseDown'>►</div>
      <div class='caseUp hidden'>►</div>
      <div class='caps hidden'>►</div>
      <div class='shiftCaps hidden'>►</div>
    </div>
    <div class='en'>
      <div class='caseDown'>►</div>
      <div class='caseUp hidden'>►</div>
      <div class='caps hidden'>►</div>
      <div class='shiftCaps hidden'>►</div>
    </div>
  </div>
  <div class='keyboard__key key ControlRight ctrl_key ctrl_right'>
    <div class='rs hidden'>
      <div class='caseDown'>Ctrl</div>
      <div class='caseUp hidden'>Ctrl</div>
      <div class='caps hidden'>Ctrl</div>
      <div class='shiftCaps hidden'>Ctrl</div>
    </div>
    <div class='en'>
      <div class='caseDown'>Ctrl</div>
      <div class='caseUp hidden'>Ctrl</div>
      <div class='caps hidden'>Ctrl</div>
      <div class='shiftCaps hidden'>Ctrl</div>
    </div>
  </div>

    `);

  const sistem = document.createElement('div');
  sistem.className = 'main__info-sistem';
  sistem.innerText = 'Клавиатура создана в операционной системе Windows';
  mainCont.append(sistem);


  const footerA = document.createElement('footer');
  footerA.className = 'footer';
  wrapper.append(footerA);


  const footerCont = document.createElement('div');
  footerCont.className = 'footer__container container';
  footerA.append(footerCont);

  const link = document.createElement('a');
  link.className = 'footer__link';
  link.href = 'https://github.com/KaterinaMysl/virtual-keyboard';
  footerCont.append(link);
  const iconD = document.createElement('img');
  iconD.className = 'footer__icon-d';
  iconD.src = './img/github.png';
  iconD.alt = 'github icon';
  link.append(iconD);
  const iconN = document.createElement('img');
  iconN.className = 'footer__icon-n';
  iconN.src = './img/github-night.png';
  iconN.alt = 'github icon';
  link.append(iconN);

  const textLink = document.createElement('div');
  textLink.className = 'footer__text-link';
  textLink.innerText = 'virtual-keyboard-code';
  link.append(textLink);

  const name = document.createElement('div');
  name.className = 'footer__name';
  name.innerText = 'by Kate Mysliuchyk';
  footerCont.append(name);
};
addBlock('');





const keys = document.querySelectorAll('.keyboard__key');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLockKey = document.querySelector('.caps_lock_key');
const ctrlRight = document.querySelector('.ctrl_right');
const ctrlLeft = document.querySelector('.ctrl_left');
const altRight = document.querySelector('.altRight');
const altLeft = document.querySelector('.altLeft');
const tab = document.querySelector('.tab_key');
const deleteKey = document.querySelector('.del_key');
const arrowUp = document.querySelector('.ArrowUp');
const arrowLeft = document.querySelector('.ArrowLeft');
const arrowDown = document.querySelector('.ArrowDown');
const arrowRight = document.querySelector('.ArrowRight');
const win = document.querySelector('.win_key');
const langButton = document.querySelector('.main__lang-button');
const textInput = document.querySelector('.keyboard__text-area');
const colorsInput = document.querySelector('.main__colors-input');
const keyboardLights = document.querySelector('.keyboard__lights');
const toggle = document.querySelector('.main__night-day_toggle');
const rs = document.querySelector('.rs');
const en = document.querySelector('.en');
const textColor = document.querySelector('.main__text-color');
const backq = document.querySelector('.Backquote');
const dig1 = document.querySelector('.Digit1');
const dig2 = document.querySelector('.Digit2');
const dig3 = document.querySelector('.Digit3');
const dig4 = document.querySelector('.Digit4');
const dig5 = document.querySelector('.Digit5');
const dig6 = document.querySelector('.Digit6');
const dig7 = document.querySelector('.Digit7');
const dig8 = document.querySelector('.Digit8');
const dig9 = document.querySelector('.Digit9');
const dig0 = document.querySelector('.Digit0');
const minus = document.querySelector('.Minus');
const equal = document.querySelector('.Equal');
const backspace = document.querySelector('.Backspace');
const bracketLeft = document.querySelector('.BracketLeft');
const bracketRight = document.querySelector('.BracketRight');
const backslash = document.querySelector('.Backslash');
const semicolon = document.querySelector('.Semicolon');
const quote = document.querySelector('.Quote');
const enter = document.querySelector('.Enter');
const comma = document.querySelector('.Comma');
const period = document.querySelector('.Period');
const slash = document.querySelector('.Slash');



class KeyboardDecor {
  constructor() {
    this.changeColor = document.querySelector('.main__colors-box');
    this.colorsInput = document.querySelector('.main__colors-input');
    this.keyboardLights = document.querySelector('.keyboard__lights');
  }
}
const keyboardDecor = new KeyboardDecor();

class NightMode {
  constructor() {
    this.toggle = document.querySelector('.main__night-day_toggle');
    this.bodyA = document.querySelector('body');
    this.wrapper = document.querySelector('.wrapper');
    this.title = document.querySelector('.title');
    this.infoLang = document.querySelector('.main__info-language');
    this.nightDay = document.querySelector('.main__night-day');
    this.keyboardWrapper = document.querySelector('.keyboard__wrapper');
    this.textInput = document.querySelector('.keyboard__text-area');
    this.changeColor = keyboardDecor.changeColor;
    this.colorsInput = keyboardDecor.colorsInput;
    this.keyboardLights = keyboardDecor.keyboardLights;
    this.footer = document.querySelector('.footer');
    this.iconD = document.querySelector('.footer__icon-d');
    this.iconN = document.querySelector('.footer__icon-n');
    this.textColor = document.querySelector('.main__text-color');
    this.keys = document.querySelectorAll('.keyboard__key');
  }

  toggleNightMode() {
    this.toggle.classList.toggle('active');
    this.bodyA.classList.toggle('active');
    this.wrapper.classList.toggle('active');
    this.title.classList.toggle('active');
    this.infoLang.classList.toggle('active');
    this.nightDay.classList.toggle('active');
    this.keyboardWrapper.classList.toggle('active');
    this.textInput.classList.toggle('active');
    this.changeColor.classList.toggle('active');
    this.footer.classList.toggle('active');
    this.iconD.classList.toggle('active');
    this.iconN.classList.toggle('active');
    this.textColor.classList.toggle('active');
    for (const key of this.keys) {
      key.classList.toggle('keys_night');
    }
  }
  setupEventListeners() {
    this.nightDay.addEventListener('click', () => this.toggleNightMode());
  }
}

const nightMode = new NightMode();
nightMode.setupEventListeners();

const onColorsInputChange = () => {
  for (const key of keys) {
    key.style.color = colorsInput.value;
  }
  keyboardLights.style.background = colorsInput.value;
  toggle.style.background = colorsInput.value;
  langButton.style.background = colorsInput.value;
};

colorsInput.addEventListener('input', onColorsInputChange);


let ctrlPressed4 = false;
let savedKeys = {};

window.addEventListener('keydown', function (e) {


  for (let i = 0; i < keys.length; i += 1) {
    const arr = keys[i].getAttribute('class').split(' ')[2];

    const keyClass = arr;


    if (e.code === keyClass && e.code !== 'AltLeft' && e.code !== 'AltRight' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight' && e.code !== 'Backspace' && e.code !== 'Delete' && e.code !== 'Enter' && e.code !== 'Tab' && e.code !== 'MetaLeft' && e.code !== 'CapsLock' && e.code !== 'ArrowUp' && e.code !== 'ArrowLeft' && e.code !== 'ArrowDown' && e.code !== 'ArrowRight' && e.code !== 'Space' && e.code !== 'ControlLeft' && e.code !== 'ControlRight') {
      const lnrs = keys[i].querySelector('.rs');
      const lnen = keys[i].querySelector('.en');
      const caprs = keys[i].querySelector('.rs .caps');
      const capen = keys[i].querySelector('.en .caps');
      const uprs = keys[i].querySelector('.rs .caseUp');
      const upen = keys[i].querySelector('.en .caseUp');
      const shrs = keys[i].querySelector('.rs .shiftCaps');
      const shen = keys[i].querySelector('.en .shiftCaps');
      const drs = keys[i].querySelector('.rs .caseDown');
      const den = keys[i].querySelector('.en .caseDown');

      if (!lnrs.classList.contains('hidden') && lnrs && shrs.classList.contains('hidden') && uprs.classList.contains('hidden') && caprs.classList.contains('hidden') && !drs.classList.contains('hidden')) {

        e.preventDefault();
        const value = lnrs.querySelector('.caseDown').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      }
      else if (!lnen.classList.contains('hidden') && lnen && shen.classList.contains('hidden') && upen.classList.contains('hidden') && capen.classList.contains('hidden') && !den.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnen.querySelector('.caseDown').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnrs.classList.contains('hidden') && lnrs && shrs.classList.contains('hidden') && uprs.classList.contains('hidden') && !caprs.classList.contains('hidden') && drs.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnrs.querySelector('.caps').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnen.classList.contains('hidden') && lnen && shen.classList.contains('hidden') && upen.classList.contains('hidden') && !capen.classList.contains('hidden') && den.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnen.querySelector('.caps').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnen.classList.contains('hidden') && lnrs && shen.classList.contains('hidden') && !upen.classList.contains('hidden') && capen.classList.contains('hidden') && den.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnen.querySelector('.caseUp').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnrs.classList.contains('hidden') && lnen && shrs.classList.contains('hidden') && !uprs.classList.contains('hidden') && caprs.classList.contains('hidden') && drs.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnrs.querySelector('.caseUp').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnen.classList.contains('hidden') && lnrs && !shen.classList.contains('hidden') && upen.classList.contains('hidden') && capen.classList.contains('hidden') && den.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnen.querySelector('.shiftCaps').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      } else if (!lnrs.classList.contains('hidden') && lnen && !shrs.classList.contains('hidden') && uprs.classList.contains('hidden') && caprs.classList.contains('hidden') && drs.classList.contains('hidden')) {
        e.preventDefault();
        const value = lnrs.querySelector('.shiftCaps').textContent;
        const cursorPos = textInput.selectionStart;
        const textBeforeCursor = textInput.value.substring(0, cursorPos);
        const textAfterCursor = textInput.value.substring(cursorPos);
        textInput.value = textBeforeCursor + value + textAfterCursor;
        textInput.selectionStart = cursorPos + value.length;
        textInput.selectionEnd = cursorPos + value.length;
      }


      keys[i].classList.add('active');
    }

    if (e.code === 'Space') {
      spaceKey.classList.add('active');
    }
    if (e.code === 'Backquote') {
      backq.classList.add('active');
    }
    if (e.code === 'Digit1') {
      dig1.classList.add('active');
    }
    if (e.code === 'Digit2') {
      dig2.classList.add('active');
    }
    if (e.code === 'Digit3') {
      dig3.classList.add('active');
    }
    if (e.code === 'Digit4') {
      dig4.classList.add('active');
    }
    if (e.code === 'Digit5') {
      dig5.classList.add('active');
    }
    if (e.code === 'Digit6') {
      dig6.classList.add('active');
    }
    if (e.code === 'Digit7') {
      dig7.classList.add('active');
    }
    if (e.code === 'Digit8') {
      dig8.classList.add('active');
    }
    if (e.code === 'Digit9') {
      dig9.classList.add('active');
    }
    if (e.code === 'Digit0') {
      dig0.classList.add('active');
    }
    if (e.code === 'Minus') {
      minus.classList.add('active');
    }
    if (e.code === 'Equal') {
      equal.classList.add('active');
    }
    if (e.code === 'BracketLeft') {
      bracketLeft.classList.add('active');
    }
    if (e.code === 'BracketRight') {
      bracketRight.classList.add('active');
    }
    if (e.code === 'Backslash') {
      backslash.classList.add('active');
    }
    if (e.code === 'Semicolon') {
      semicolon.classList.add('active');
    }
    if (e.code === 'Quote') {
      quote.classList.add('active');
    }
    if (e.code === 'Enter') {
      enter.classList.add('active');
    }
    if (e.code === 'Comma') {
      comma.classList.add('active');
    }
    if (e.code === 'Period') {
      period.classList.add('active');
    }
    if (e.code === 'Slash') {
      slash.classList.add('active');
    }
    if (e.code === 'ShiftLeft' && e.location === 1) {

      shiftLeft.classList.add('active');
    }
    if (e.code === 'ShiftRight' && e.location === 2) {
      shiftRight.classList.add('active');
    }
    if (e.code === 'CapsLock') {
      capsLockKey.classList.add('active');
    }

    if (e.code === 'AltLeft' && e.location === 1) {
      altLeft.classList.add('active');
    }
    if (e.code === 'AltRight' && e.location === 2) {
      altRight.classList.add('active');

    }
    if (e.code === 'Tab') {
      tab.classList.add('active');
    }
    if (e.code === 'Delete') {
      deleteKey.classList.add('active');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.add('active');
    }
    if (e.code === 'MetaLeft') {
      win.classList.add('active');
    }
    if (e.code === 'Backspace') {
      backspace.classList.add('active');
    }
  }
});



window.addEventListener('keyup', function (e) {
  if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
    ctrlPressed4 = false;
    savedKeys = {};

    if (e.code === 'ControlLeft') {
      ctrlLeft.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      ctrlRight.classList.remove('active');
    }
    return;
  }



  for (let i = 0; i < keys.length; i += 1) {
    const keyClass = keys[i].getAttribute('class').split(' ').find(c => c.startsWith('Key'));

    if (e.code === keyClass && !['AltLeft', 'AltRight', 'ShiftRight', 'ShiftLeft'].includes(e.code)) {
      keys[i].classList.remove('active');
    }
  }
});




window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    const arr = keys[i].getAttribute('class').split(' ')[2];
    const keyClass = arr;

    if (e.code === keyClass && e.code !== 'AltLeft' && e.code !== 'AltRight' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight' && e.code !== 'Backspace' && e.code !== 'Delete' && e.code !== 'Enter' && e.code !== 'Tab' && e.code !== 'MetaLeft' && e.code !== 'CapsLock' && e.code !== 'ArrowUp' && e.code !== 'ArrowLeft' && e.code !== 'ArrowDown' && e.code !== 'ArrowRight') {
      keys[i].classList.remove('active');
      keys[i].classList.add('remove');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code === 'Backquote') {
      backq.classList.remove('active');
      backq.classList.remove('remove');
    }
    if (e.code === 'Digit1') {
      dig1.classList.remove('active');
    }
    if (e.code === 'Digit2') {
      dig2.classList.remove('active');
    }
    if (e.code === 'Digit3') {
      dig3.classList.remove('active');
    }
    if (e.code === 'Digit4') {
      dig4.classList.remove('active');
    }
    if (e.code === 'Digit5') {
      dig5.classList.remove('active');
    }
    if (e.code === 'Digit6') {
      dig6.classList.remove('active');
    }
    if (e.code === 'Digit7') {
      dig7.classList.remove('active');
    }
    if (e.code === 'Digit8') {
      dig8.classList.remove('active');
    }
    if (e.code === 'Digit9') {
      dig9.classList.remove('active');
    }
    if (e.code === 'Digit0') {
      dig0.classList.remove('active');
    }
    if (e.code === 'Minus') {
      minus.classList.remove('active');
    }
    if (e.code === 'Equal') {
      equal.classList.remove('active');
    }
    if (e.code === 'BracketLeft') {
      bracketLeft.classList.remove('active');
    }
    if (e.code === 'BracketRight') {
      bracketRight.classList.remove('active');
    }
    if (e.code === 'Backslash') {
      backslash.classList.remove('active');
    }
    if (e.code === 'Semicolon') {
      semicolon.classList.remove('active');
    }
    if (e.code === 'Quote') {
      quote.classList.remove('active');
    }
    if (e.code === 'Enter') {
      enter.classList.remove('active');
    }
    if (e.code === 'Comma') {
      comma.classList.remove('active');
    }
    if (e.code === 'Period') {
      period.classList.remove('active');
    }
    if (e.code === 'Slash') {
      slash.classList.remove('active');
    }
    if (e.code === 'ShiftLeft' && e.location === 1) {
      shiftLeft.classList.remove('active');
      shiftLeft.classList.remove('remove');
    }
    if (e.code === 'ShiftRight' && e.location === 2) {
      shiftRight.classList.remove('active');
      shiftRight.classList.remove('remove');
    }
    if (e.code === 'CapsLock') {
      capsLockKey.classList.remove('active');
      capsLockKey.classList.remove('remove');
    }


    if (e.code === 'AltLeft' && e.location === 1) {
      altLeft.classList.remove('active');
      altLeft.classList.remove('remove');
    }
    if (e.code === 'AltRight' && e.location === 2) {
      altRight.classList.remove('active');
      altRight.classList.remove('remove');
    }
    if (e.code === 'Tab') {
      tab.classList.remove('active');
      tab.classList.remove('remove');
    }
    if (e.code === 'Delete') {
      deleteKey.classList.remove('active');
      deleteKey.classList.remove('remove');
    }
    if (e.code === 'ArrowUp') {
      arrowUp.classList.remove('active');
      arrowUp.classList.remove('remove');
    }
    if (e.code === 'ArrowLeft') {
      arrowLeft.classList.remove('active');
      arrowLeft.classList.remove('remove');
    }
    if (e.code === 'ArrowDown') {
      arrowDown.classList.remove('active');
      arrowDown.classList.remove('remove');
    }
    if (e.code === 'ArrowRight') {
      arrowRight.classList.remove('active');
      arrowRight.classList.remove('remove');
    }
    if (e.code === 'MetaLeft') {
      win.classList.remove('active');
      win.classList.remove('remove');

    }
    if (e.code === 'Backspace') {
      backspace.classList.remove('active');
    }
    setTimeout(() => {
      keys[i].classList.remove('remove');
    }, 200);
  }
});


function addTabIndentation(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = textInput.selectionStart;
    const end = textInput.selectionEnd;
    const value = textInput.value;

    textInput.value = value.substring(0, start) + '\t' + value.substring(end);

    textInput.selectionStart = textInput.selectionEnd = start + 1;
  }
}
document.addEventListener('keydown', addTabIndentation);



let capsLockOn = false;

capsLockKey.addEventListener('click', () => {
  capsLockOn = !capsLockOn;

  const capsElements = document.querySelectorAll('.caps');
  capsElements.forEach((element) => {
    if (capsLockOn) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });

  const caseDownElements = document.querySelectorAll('.caseDown');
  caseDownElements.forEach((element) => {
    if (capsLockOn) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  });
});

capsLockKey.addEventListener('click', (event) => {
  event.preventDefault();
});


document.addEventListener('keydown', function (e) {
  if (e.code === 'CapsLock') {
    capsLockOn = !capsLockOn;

    const capsElements = document.querySelectorAll('.caps');
    capsElements.forEach(function (element) {
      if (capsLockOn && element.classList.contains('hidden')) {

      } else {
        element.classList.add('hidden');
      }

    });
    const caseDownElements = document.querySelectorAll('.caseDown');
    caseDownElements.forEach(function (element) {
      if (!capsLockOn && !element.classList.contains('hidden')) {
        element.classList.add('hidden');
      } else {
        element.classList.add('hidden');
      }

    });
    const caseUpElements = document.querySelectorAll('.caseUp');
    caseUpElements.forEach(function (element) {
      if (capsLockOn) {
        element.classList.add('hidden');
      } else {

      }
    });
    const shiftCapsElements = document.querySelectorAll('.shiftCaps');
    shiftCapsElements.forEach(function (element) {
      if (capsLockOn) {
        element.classList.add('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  }
});




keys.forEach(key => {

  document.addEventListener('keydown', event => {


    if (event.shiftKey) {

      const caseUp = key.querySelectorAll('.caseUp');
      const shiftCaps = key.querySelectorAll('.shiftCaps');
      const caseDown = key.querySelectorAll('.caseDown');
      const caps = key.querySelectorAll('.caps');


      if (!event.getModifierState('CapsLock')) {
        caseUp.forEach(function (element) {
          if (!event.getModifierState('CapsLock')) {

            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        });
        caseDown.forEach(function (element) {
          if (!event.getModifierState('CapsLock')) {

            element.classList.add('hidden');
          } else {
            element.classList.remove('hidden');
          }
        });
      }
      if (event.getModifierState('CapsLock')) {
        shiftCaps.forEach(function (element) {
          if (event.getModifierState('CapsLock')) {

            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        });
        caps.forEach(function (element) {
          if (event.getModifierState('CapsLock')) {

            element.classList.add('hidden');
          } else {
            element.classList.remove('hidden');
          }
        });
      }
    }
  });

  window.addEventListener('keyup', event => {

    if (!event.shiftKey) {
      const caseUp = key.querySelectorAll('.caseUp');
      const shiftCaps = key.querySelectorAll('.shiftCaps');
      const caseDown = key.querySelectorAll('.caseDown');
      const caps = key.querySelectorAll('.caps');



      if (!event.getModifierState('CapsLock')) {
        caseUp.forEach(function (element) {
          if (!event.getModifierState('CapsLock')) {

            element.classList.add('hidden');
          } else {
            element.classList.remove('hidden');
          }
        });
        caseDown.forEach(function (element) {
          if (!event.getModifierState('CapsLock')) {

            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        });
      }
      if (event.getModifierState('CapsLock')) {
        shiftCaps.forEach(function (element) {
          if (event.getModifierState('CapsLock')) {

            element.classList.add('hidden');
          } else {
            element.classList.remove('hidden');
          }
        });
        caps.forEach(function (element) {
          if (event.getModifierState('CapsLock')) {

            element.classList.remove('hidden');
          } else {
            element.classList.add('hidden');
          }
        });
      }
    }
  });
});



let shiftOn = false;

shiftLeft.addEventListener('mousedown', function () {
  shiftOn = !shiftOn;

  keys.forEach((key) => {
    const en = key.querySelector('.en');
    const rs = key.querySelector('.rs');

    const caseDownEn = en.querySelector('.caseDown');
    const caseUpEn = en.querySelector('.caseUp');
    const capsEn = en.querySelector('.caps');
    const shiftCapsEn = en.querySelector('.shiftCaps');

    const caseDownRs = rs.querySelector('.caseDown');
    const caseUpRs = rs.querySelector('.caseUp');
    const capsRs = rs.querySelector('.caps');
    const shiftCapsRs = rs.querySelector('.shiftCaps');

    if (!capsEn.classList.contains('hidden') && !capsRs.classList.contains('hidden')) {
      if (shiftOn) {
        capsEn.classList.add('hidden');
        shiftCapsEn.classList.remove('hidden');
        capsRs.classList.add('hidden');
        shiftCapsRs.classList.remove('hidden');
      }
    } else if (capsEn.classList.contains('hidden') && capsRs.classList.contains('hidden')) {
      if (shiftOn) {
        caseDownEn.classList.add('hidden');
        caseUpEn.classList.remove('hidden');
        caseDownRs.classList.add('hidden');
        caseUpRs.classList.remove('hidden');
      } console.log(!shiftOn)
    } else if (!capsEn.classList.contains('hidden') && !capsRs.classList.contains('hidden')) {
      if (!shiftOn) {
        caseDownEn.classList.add('hidden');
        caseUpEn.classList.remove('hidden');
        caseDownRs.classList.add('hidden');
        caseUpRs.classList.remove('hidden');
      }

    }

  });
});

shiftLeft.addEventListener('mouseup', function () {
  keys.forEach((key) => {
    const en = key.querySelector('.en');
    const rs = key.querySelector('.rs');

    const caseDownEn = en.querySelector('.caseDown');
    const caseUpEn = en.querySelector('.caseUp');
    const capsEn = en.querySelector('.caps');
    const shiftCapsEn = en.querySelector('.shiftCaps');

    const caseDownRs = rs.querySelector('.caseDown');
    const caseUpRs = rs.querySelector('.caseUp');
    const capsRs = rs.querySelector('.caps');
    const shiftCapsRs = rs.querySelector('.shiftCaps');

    if (!shiftCapsEn.classList.contains('hidden') && !shiftCapsRs.classList.contains('hidden')) {
      capsEn.classList.remove('hidden');
      shiftCapsEn.classList.add('hidden');
      capsRs.classList.remove('hidden');
      shiftCapsRs.classList.add('hidden');
    } else {
      caseDownEn.classList.remove('hidden');
      caseUpEn.classList.add('hidden');
      caseDownRs.classList.remove('hidden');
      caseUpRs.classList.add('hidden');
    }
  });

  shiftOn = false;
});



let currentLanguage = localStorage.getItem('language') || 'rs';


function toggleLanguage() {
  keys.forEach(function (key) {
    const en = key.querySelector('.en');
    const rs = key.querySelector('.rs');
    en.classList.toggle('hidden');
    rs.classList.toggle('hidden');
  });


  currentLanguage = currentLanguage === 'en' ? 'rs' : 'en';
  localStorage.setItem('language', currentLanguage);

  const languageToggleBtnText = document.querySelector('.main__lang-button');

  if (currentLanguage === 'en') {
    languageToggleBtnText.textContent = 'en';
  } else {
    languageToggleBtnText.textContent = 'ru';
  }
}



let altPressed = false;
let ctrlPressed = false;
document.addEventListener('keydown', function (event) {
  if (event.code === 'AltRight') {
    altRight.classList.add('active');
  } else if (event.code === 'AltLeft') {
    altLeft.classList.add('active');
  }

  if (event.code === 'ControlRight' || event.code === 'ControlLeft') {
    ctrlPressed = true;
  }
  if (event.code === 'AltRight' || event.code === 'AltLeft') {
    altPressed = true;


  }
  if (ctrlPressed && altPressed) {
    toggleLanguage();
  }

});



document.addEventListener('keyup', function (event) {
  if (event.code === 'AltRight') {
    altRight.classList.remove('active');
  } else if (event.code === 'AltLeft') {
    altLeft.classList.remove('active');
  }

  if (event.code === 'ControlRight' || event.code === 'ControlLeft') {
    ctrlPressed = false;
  }
  if (event.code === 'AltRight' || event.code === 'AltLeft') {
    altPressed = false;

  }
});

function toggleLanguage1(key) {
  const en = key.querySelector('.en');
  const rs = key.querySelector('.rs');
  if (currentLanguage === 'rs') {
    en.classList.add('hidden');
    rs.classList.remove('hidden');
  }
}
keys.forEach(toggleLanguage1);

function saveLanguageToLocalStorage() {
  localStorage.setItem('language', currentLanguage);
}
window.addEventListener('beforeunload', saveLanguageToLocalStorage);

function toggleLanguageClick() {
  toggleLanguage();
}
const languageToggleBtnText = document.querySelector('.main__lang-button');
languageToggleBtnText.addEventListener('click', toggleLanguageClick);

if (currentLanguage === 'en') {
  languageToggleBtnText.textContent = 'en';
} else {
  languageToggleBtnText.textContent = 'ru';
}


textInput.focus();

document.addEventListener('click', (e) => {
  if (!textInput.contains(e.target)) {
    textInput.focus();
  }
});




function pressKey(e) {

  const keyText = e.target.innerText;
  const cursorPos = textInput.selectionStart;

  switch (keyText) {
    case 'Backspace': {
      textInput.value = textInput.value.slice(0, cursorPos - 1) + textInput.value.slice(cursorPos);
      textInput.selectionStart = cursorPos - 1;
      textInput.selectionEnd = cursorPos - 1;
      break;
    }
    case 'Del': {
      textInput.value = textInput.value.slice(0, cursorPos) + textInput.value.slice(cursorPos + 1);
      textInput.selectionStart = cursorPos;
      textInput.selectionEnd = cursorPos;
      break;
    }
    case 'Enter': {
      textInput.value = `${textInput.value.slice(0, cursorPos)}\n${textInput.value.slice(cursorPos)}`;
      textInput.selectionStart = cursorPos + 1;
      textInput.selectionEnd = cursorPos + 1;
      break;
    }
    case '▼': {
      const currentLine = textInput.value.lastIndexOf('\n', cursorPos - 1) + 1;
      const nextLine = textInput.value.indexOf('\n', cursorPos);
      const diff = cursorPos - currentLine;
      const newCursorPos = nextLine !== -1 ? nextLine + 1 + diff : textInput.value.length;
      textInput.setSelectionRange(newCursorPos, newCursorPos);
      break;
    }
    case '▲': {
      const currentLine2 = textInput.value.lastIndexOf('\n', cursorPos);
      const prevLine = textInput.value.lastIndexOf('\n', currentLine2 - 1) + 1;
      const diff2 = cursorPos - currentLine2 - 1;
      const newCursorPos2 = currentLine2 !== -1 ? prevLine + diff2 : 0;
      textInput.setSelectionRange(newCursorPos2, newCursorPos2);
      break;
    }
    case '◄': {
      textInput.selectionStart = cursorPos - 1;
      textInput.selectionEnd = cursorPos - 1;
      break;
    }
    case '►': {
      textInput.selectionStart = cursorPos + 1;
      textInput.selectionEnd = cursorPos + 1;
      break;
    }
    case 'CapsLock':

      break;
    case 'Shift':

      break;
    case 'Ctrl':

      break;
    case 'Win':

      break;
    case 'Alt':

      break;
    case 'Tab': {
      e.preventDefault();
      textInput.value = textInput.value.slice(0, cursorPos) + '\t' + textInput.value.slice(cursorPos);
      textInput.selectionStart = cursorPos + 1;
      textInput.selectionEnd = cursorPos + 1;
      break;
    }
    case '': {
      const before = textInput.value.slice(0, cursorPos);
      const after = textInput.value.slice(cursorPos);
      textInput.value = `${before} ${after}`;
      textInput.selectionStart = cursorPos + 1;
      textInput.selectionEnd = cursorPos + 1;
      break;
    }
    default:
      textInput.value += keyText;
      break;
  }
}


keys.forEach((key) => key.addEventListener('click', pressKey));

function addSpace() {
  const cursorPos = textInput.selectionStart;
  const { value } = textInput;
  textInput.value = `${value.slice(0, cursorPos)} + ' ' + ${value.slice(cursorPos)}`;
  textInput.selectionStart = cursorPos + 1;
  textInput.selectionEnd = cursorPos + 1;
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    e.preventDefault();
    addSpace();
  }
});
