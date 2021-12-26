:root {
  --background-color: #fff;
  --main-color: #6002ee;
  --label-color: #0000008a;
  --font-color: #000000de;
  --red: #ed2553;
  --blue: #2196f3;
  --green: #60bc79;
  --gray: #757575;
  --width: 380px;
  --transition-delay: 0.2s;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-image: url(../img/background.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.form {
  width: 100%;
  max-width: var(--width);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: var(--background-color);
  border-radius: 5px;
  padding: 50px 30px;
}

.title {
  position: relative;
  width: 100%;
  line-height: 40px;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--main-color);
}

.title:before {
  content: '';
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -30px;
  background: var(--main-color);
}

.input-container {
  position: relative;
  margin-top: 55px;
}

.input-container label {
  font-size: 0.9rem;
  color: var(--label-color);
}

.input-container input {
  color: var(--font-color);
  width: 100%;
  height: 50px;
  border: none;
  background: transparent;
  outline: none;
  padding: 0.4rem;
}

/*
input 요소가 포거스 상태 또는 valid 상태이면 레이블을 input 요소 위에 위치시키고 크기를 줄인다.
input 요소에 require가 적용되어 있어서 값이 입력되어 있으면 valid 상태가 된다.
input 요소가 포거스 상태가 아닐 때 텍스트가 입력되지 있지 않으면 invalid 상태가 되어 레이블이 제자리로 복귀하고
텍스트가 입력되어 있으면 valid 상태가 되어 레이블이 제자리로 복귀하지 않는다.
*/
.input-container input:focus + label,
.input-container input:valid + label {
  top: -65%;
  font-size: 0.8rem;
}

.input-container input + label {
  position: absolute;
  top: 0;
  left: 0.4rem;
  line-height: 60px;
  cursor: pointer;
  transition: var(--transition-delay) ease;
}

.input-container .bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--label-color);
  width: 100%;
  height: 1px;
}

.input-container .bar:before,
.input-container .bar:after {
  content: '';
  position: absolute;
  background: var(--main-color);
  width: 0;
  height: 2px;
  transition: var(--transition-delay) ease;
}

.input-container .bar:before {
  left: 50%;
}

.input-container .bar:after {
  right: 50%;
}

.input-container input:focus ~ .bar:before,
.input-container input:focus ~ .bar:after {
  width: 50%;
}

.input-container .icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 1rem;
  right: 0.4rem;
  font-size: 1.4rem;
  pointer-events: none;
}

.input-container .icon.icon-success {
  color: var(--blue);
  /* color: var(--green); */
}

.input-container .icon.icon-error {
  color: var(--red);
}

.input-container .error {
  position: absolute;
  top: 120%;
  left: 0.4rem;
  font-size: 0.8rem;
  color: var(--red);
}

.button {
  width: 100%;
  line-height: 64px;
  font-weight: 900;
  font-size: 1.2rem;
  margin: 65px 0 20px;
  border: 3px solid transparent;
  background-color: var(--main-color);
  color: #fff;
  cursor: pointer;
  outline: none;
}

.button:disabled {
  background-color: transparent;
  border: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.2);
}

.hidden {
  display: none !important;
}
