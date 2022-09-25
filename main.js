import { CSS3DObject } from './tbw/libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './tbw/assets/targets/TBW_All2.mind',
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(obj);

    const obj2 = new CSS3DObject(document.querySelector("#ar-div2"));
const cssAnchor2 = mindarThree.addCSSAnchor(1);
cssAnchor2.group.add(obj2);

const obj3 = new CSS3DObject(document.querySelector("#ar-div3"));
const cssAnchor3 = mindarThree.addCSSAnchor(2);
cssAnchor3.group.add(obj3);

const obj4 = new CSS3DObject(document.querySelector("#ar-div4"));
const cssAnchor4 = mindarThree.addCSSAnchor(3);
cssAnchor4.group.add(obj4);

const obj5 = new CSS3DObject(document.querySelector("#ar-div5"));
const cssAnchor5 = mindarThree.addCSSAnchor(4);
cssAnchor5.group.add(obj5);

const obj6 = new CSS3DObject(document.querySelector("#ar-div6"));
const cssAnchor6 = mindarThree.addCSSAnchor(5);
cssAnchor6.group.add(obj6);

const obj7 = new CSS3DObject(document.querySelector("#ar-div7"));
const cssAnchor7 = mindarThree.addCSSAnchor(6);
cssAnchor7.group.add(obj7);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  start();
});
