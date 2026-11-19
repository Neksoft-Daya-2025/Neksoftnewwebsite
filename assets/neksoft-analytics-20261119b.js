/* Optional analytics. Inquiry details never enter the data layer. */
(() => {
  'use strict';
  const ID='G-4X8SMFJH89', KEY='neksoft_analytics_consent';
  let consent=false, loaded=false, lastPath='', panel;
  const seen=new Set();
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  const gtag=window.gtag;
  gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  const locationValue=()=>location.origin+location.pathname;
  function event(name,params={}) {
    if(!consent) return;
    gtag('event',name,{send_to:ID,page_location:locationValue(),page_referrer:document.referrer?new URL(document.referrer).origin:'',...params});
  }
  function pageview(){if(consent&&lastPath!==location.pathname){lastPath=location.pathname;event('page_view',{page_title:document.title});}}
  function allow(){
    consent=true;window['ga-disable-'+ID]=false;
    gtag('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    if(!loaded){
      loaded=true;
      window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
      const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtm.js?id=GTM-TM4KTVQS';
      script.onload=()=>{gtag('config',ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,page_location:locationValue(),page_referrer:document.referrer?new URL(document.referrer).origin:''});pageview();};
      document.head.appendChild(script);
    }else pageview();
  }
  function choose(granted){try{localStorage.setItem(KEY,granted?'granted':'denied');}catch{} panel.hidden=true;
    if(granted)allow();else{
      consent=false;lastPath='';window['ga-disable-'+ID]=true;
      gtag('consent','update',{analytics_storage:'denied'});
      for(const item of document.cookie.split(';')){const name=item.split('=')[0].trim();if(/^_ga($|_)/.test(name)){for(const domain of ['',location.hostname,'.neksoftconsultancy.com'])document.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');}}
    }
  }
  const style=document.createElement('style');style.textContent='#neksoft-consent{position:fixed;bottom:16px;left:16px;right:16px;max-width:620px;z-index:99999;padding:18px;background:#fff;color:#142338;border:1px solid #bec8d6;box-shadow:0 4px 24px #0003;font:14px/1.6 system-ui}#neksoft-consent[hidden]{display:none}#neksoft-consent button,#neksoft-privacy{cursor:pointer;padding:9px 13px;border:1px solid #3455a0;background:#fff;color:#142338;margin:8px 8px 0 0;font:inherit}#neksoft-consent button:first-of-type{background:#2456cf;color:#fff}#neksoft-privacy{position:fixed;bottom:5px;right:8px;z-index:99998;font:11px system-ui;padding:5px}';document.head.appendChild(style);
  panel=document.createElement('section');panel.id='neksoft-consent';panel.setAttribute('aria-label','Analytics preferences');
  const text=document.createElement('p');text.textContent='May we use optional analytics cookies to understand page visits and successful inquiries? Advertising tracking is disabled. You can change your choice using Analytics preferences.';panel.appendChild(text);
  for(const [label,value] of [['Allow analytics',true],['Reject analytics',false]]){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=()=>choose(value);panel.appendChild(b);}
  document.body.appendChild(panel);
  const preferences=document.createElement('button');preferences.id='neksoft-privacy';preferences.type='button';preferences.textContent='Analytics preferences';preferences.onclick=()=>{panel.hidden=false;panel.querySelector('button').focus();};document.body.appendChild(preferences);
  let saved;try{saved=localStorage.getItem(KEY);}catch{} panel.hidden=!!saved;if(saved==='granted')allow();
  for(const method of ['pushState','replaceState']){const original=history[method];history[method]=function(...args){const result=original.apply(this,args);setTimeout(pageview,0);return result;};}window.addEventListener('popstate',()=>setTimeout(pageview,0));
  document.addEventListener('click',e=>{const link=e.target.closest?.('a[href]');if(!link)return;const href=link.getAttribute('href');const method=/^mailto:/i.test(href)?'email':/^tel:/i.test(href)?'phone':/^https:\/\/(wa.me|api.whatsapp.com)\//i.test(href)?'whatsapp':null;if(method)event('contact_click',{contact_method:method});});
  const originalFetch=window.fetch;
  window.fetch=async function(...args){const response=await originalFetch.apply(this,args);const url=new URL(typeof args[0]==='string'?args[0]:args[0].url,location.href);
    if(consent&&url.origin===location.origin&&url.pathname==='/api/contact'&&response.status===201){response.clone().json().then(data=>{if(data.id&&!seen.has(data.id)){seen.add(data.id);event('generate_lead',{lead_source:'website'});}}).catch(()=>{});}return response;};
})();
