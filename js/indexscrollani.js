/*my edits*/
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlowconst = document.querySelectorAll('.spanSlow');
const spansFastconst = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlowconst.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFastconst.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}

function handleWindowResize() {
  width = window.innerWidth;
}                                     
                                        
/*my edits*/// JavaScript Document