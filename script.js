'use strict';
const languageButton = document.getElementById('language');
let language = 'fr';
try { language = localStorage.getItem('antaeus-language') === 'ar' ? 'ar' : 'fr'; } catch {}
function setLanguage(lang) {
 language = lang;
 document.documentElement.lang = lang;
 document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
 document.querySelectorAll('[data-fr][data-ar]').forEach(el => { el.innerHTML = el.dataset[lang]; });
 languageButton.textContent = lang === 'ar' ? 'Français' : 'العربية';
 languageButton.setAttribute('aria-label', lang === 'ar' ? 'Passer en français' : 'الانتقال إلى العربية');
 document.title = lang === 'ar' ? 'طنجة أنتايوس — معاً نُسهم في إشعاع طنجة' : 'Tanger Antaeus — Ensemble, faisons rayonner Tanger';
 document.getElementById('form-status').textContent = '';
 try {localStorage.setItem('antaeus-language',lang);} catch {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'fr' ? 'ar' : 'fr'));
setLanguage(language);
document.getElementById('contact-form').addEventListener('submit', event => {
 event.preventDefault();
 const name = document.getElementById('name').value.trim();
 const message = document.getElementById('message').value.trim();
 if (!name || !message) return;
 const subject = document.getElementById('subject').value + ' — Tanger Antaeus';
 const body = (language === 'ar' ? 'الاسم: ' : 'Nom : ') + name + '\n\n' + message;
 window.location.href = 'mailto:contact@t-antaeus.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
 document.getElementById('form-status').textContent = language === 'ar' ? 'إذا لم يُفتح تطبيق البريد، راسلونا مباشرة على contact@t-antaeus.com.' : 'Si votre messagerie ne s’ouvre pas, écrivez-nous directement à contact@t-antaeus.com.';
});
