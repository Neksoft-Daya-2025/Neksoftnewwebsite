import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
/** Public-page motion. GSAP context owns every tween and trigger for route cleanup. */
export function setupPageScrollMotion(signal:AbortSignal){
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(reduced.matches)return;
 const mobile=window.matchMedia('(max-width:700px)').matches;
 // Keep the long homepage visible without measuring and animating every section on phones.
 if(mobile&&window.location.pathname==='/')return;
 const root=document.getElementById('main-content');if(!root)return;
 const selector=['.reveal','.fisheries-layout>div','.person-card','.contact-form','.section-heading','.heading-row','.detail-intro>div','.capability-list>div','.deliverables-grid>div','.service-capabilities>div','.service-delivery-grid>div','.service-process-grid>article','.service-related-grid>a','.approved-capabilities>article','.approved-service-list>a','.approved-applications','.process-grid>article','.industry-card','.project-card','.portfolio-card','.depth-brief-card','.planning-decisions>div','.faq-item','.about-purpose-grid>article','.about-capability-line>div','.home-trust-bar .container>div'].join(',');
 const candidates=[...root.querySelectorAll<HTMLElement>(selector)].filter(el=>!el.closest('dialog,[hidden],[inert]')&&el.getBoundingClientRect().height>0);
 const eligible=new Set(candidates.filter(el=>el.getBoundingClientRect().height<window.innerHeight*1.6));
 const targets=[...eligible].filter(el=>{let p=el.parentElement;while(p&&p!==root){if(eligible.has(p))return false;p=p.parentElement;}return true;});
 for(const [index,el]of targets.entries()){
  const distance=mobile?16:30;
  const tween=gsap.fromTo(el,{y:distance,autoAlpha:0},{y:0,autoAlpha:1,duration:mobile?.42:.72,ease:'power3.out',paused:true});
  const show=()=>{tween.invalidate();tween.restart();};
  const reset=()=>{if(el.contains(document.activeElement))return;tween.pause(0);};
  ScrollTrigger.create({trigger:el,start:'top 97%',end:'bottom -3%',onEnter:show,onEnterBack:show,onLeave:reset,onLeaveBack:reset});
  el.addEventListener('focusin',()=>tween.progress(1),{signal});
 }
 if(!mobile){for(const image of root.querySelectorAll<HTMLElement>('.industry-image img,.about-image img,.about-people-mosaic img')){
  gsap.fromTo(image,{yPercent:-3},{yPercent:3,ease:'none',scrollTrigger:{trigger:image.parentElement,start:'top bottom',end:'bottom top',scrub:1}});
 }}
 for(const divider of root.querySelectorAll<HTMLElement>('.label-line')){
  gsap.fromTo(divider,{scaleX:0,transformOrigin:'left center'},{scaleX:1,duration:.65,ease:'power2.out',scrollTrigger:{trigger:divider,start:'top 96%',toggleActions:'restart none restart reset'}});
 }
 const footer=document.querySelector('.footer-top');if(footer){gsap.fromTo(footer.children,{y:mobile?12:22,opacity:0},{y:0,opacity:1,duration:.6,stagger:.07,ease:'power2.out',scrollTrigger:{trigger:footer,start:'top 96%',toggleActions:'restart none restart reset'}});}
 const refresh=()=>ScrollTrigger.refresh();
 for(const image of root.querySelectorAll('img'))if(!image.complete)image.addEventListener('load',refresh,{once:true,signal});
 reduced.addEventListener('change',()=>{if(reduced.matches){for(const el of targets)gsap.set(el,{clearProps:'transform,opacity,visibility'});ScrollTrigger.getAll().forEach(trigger=>trigger.disable(false));}},{signal});
}
