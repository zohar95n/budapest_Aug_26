(() => {
  const norm = s => (s || '').replace(/\s+/g,' ').trim().toLowerCase();
  const has = (el, text) => norm(el?.textContent).includes(norm(text));

  // 1) Replace the Saturday playground itinerary stop with the Great Market Hall.
  const headings = [...document.querySelectorAll('h3,h4')];
  const playgroundStepHeading = headings.find(h => has(h,'Main Playground in Városliget') && h.closest('.step'));
  if (playgroundStepHeading) {
    const step = playgroundStepHeading.closest('.step');
    const time = step.querySelector('.time');
    if (time) time.textContent = '10:00–11:20';
    playgroundStepHeading.textContent = 'Great Market Hall — Nagyvásárcsarnok';
    const p = step.querySelector('p');
    if (p) p.innerHTML = '<b>מה עושים:</b> עוברים בקומת המזון בין פפריקה, נקניקים, גבינות, מאפים ופירות; עולים לגלריה למזכרות ולאוכל רחוב; ומסיימים בנשנוש או בארוחת צהריים מוקדמת. ביקור של 70–80 דקות מתאים בדיוק לפני המעבר ל־Városliget.';
    const tags = step.querySelector('.tags');
    if (tags) tags.innerHTML = '<span class="tag green">70–80 דק׳</span><span class="tag">כניסה חינם</span><span class="tag pink">טעימות וצהריים</span>';
  }

  // 2) Replace the route immediately before/after the playground stop.
  document.querySelectorAll('.move').forEach(m => {
    const t = norm(m.textContent);
    if (t.includes('városliget') && (t.includes('deák') || t.includes('m1'))) {
      m.innerHTML = '<div class="ic">🚋</div><div><h4>מרכז העיר → השוק הגדול</h4><div>מ־Deák Ferenc tér: חשמלית 47 או 49 עד Fővám tér, ואז דקה–שתיים ברגל. תכנון מדלת לדלת: כ־18–25 דקות. חלופה: M3 ל־Kálvin tér ומשם כ־8–10 דקות הליכה.</div></div>';
    }
    if (t.includes('גן המשחקים') && t.includes('vajdahunyad')) {
      m.innerHTML = '<div class="ic">🚇</div><div><h4>השוק הגדול → Városliget</h4><div>חשמלית 47/49 מ־Fővám tér ל־Deák Ferenc tér, החלפה ל־M1 לכיוון Mexikói út וירידה ב־Hősök tere. משם כ־8–12 דקות הליכה ל־Vajdahunyad Castle. תכנון כולל: כ־30–40 דקות.</div></div>';
    }
  });

  // 3) Adjust subsequent Saturday times while preserving the detailed itinerary.
  const changes = {
    'Vajdahunyad Castle והאגם':'12:05–12:50',
    'ארוחה קלה בפארק':'13:00–13:40',
    'House of Music Hungary':'14:00–15:25'
  };
  Object.entries(changes).forEach(([title,newTime]) => {
    const h = headings.find(x => has(x,title) && x.closest('.step'));
    const tm = h?.closest('.step')?.querySelector('.time');
    if (tm) tm.textContent = newTime;
  });

  // 4) Replace the playground discovery card with a richer market card.
  const playgroundCardHeading = headings.find(h => has(h,'Main Playground in Városliget') && h.closest('.curio'));
  if (playgroundCardHeading) {
    const card = playgroundCardHeading.closest('.curio');
    const image = card.querySelector('img');
    if (image) {
      image.src = 'https://www.budapestinfo.hu/storage/media-library/9823/DJI_0077_1400x933.jpg';
      image.alt = 'Great Market Hall Budapest';
    }
    playgroundCardHeading.textContent = 'Great Market Hall — השוק הגדול';
    const body = card.querySelector('.curio-body');
    if (body) body.innerHTML = `
      <h4>Great Market Hall — השוק הגדול</h4>
      <p><b>למה הוא מיוחד?</b> זהו השוק המקורה הגדול והוותיק בבודפשט, המשלב אוכל מקומי, אדריכלות מרשימה וחיי יום־יום של העיר.</p>
      <p class="history"><b>📚 סיפור היסטורי — 3 משפטים</b><br>השוק נפתח בשנת 1897 כחלק מתוכנית עירונית לשפר את בטיחות המזון ואת האופן שבו מזון הופץ לתושבי בודפשט. האדריכל Samu Pecz תכנן אולם נאו־גותי עצום עם שלד ברזל וגג צבעוני מאריחי Zsolnay, כך שהמבנה נראה כמעט כמו תחנת רכבת חגיגית. הבניין נפגע במלחמת העולם השנייה, שוקם בשנות ה־90, וכיום הוא מחבר בין מסחר מקומי, אוכל הונגרי ותיירות.</p>
      <p class="seek"><b>🔎 מה לחפש?</b><br>בקומת הקרקע חפשו שרשראות פפריקה, סלמי, דבש וחמוצים; הרימו את הראש כדי לראות את שלד הברזל וגג האריחים; ובקומה העליונה השוו בין עבודות היד לדוכני המזכרות.</p>
      <p class="question"><b>💬 שאלה לאבא ולבת</b><br>אם הייתם מרכיבים סל טעימות שמייצג את הונגריה בשלושה פריטים בלבד — מה הייתם בוחרים?</p>
      <div class="credit">צילום השוק נטען מאתר התיירות של בודפשט; המידע ההיסטורי מבוסס על מקורות השוק והתיירות העירוניים.</div>`;
  }

  // 5) Add location-based food recommendations beneath Saturday.
  const saturday = document.querySelector('#d3');
  if (saturday && !document.querySelector('#market-food')) {
    const box = document.createElement('section');
    box.id = 'market-food'; box.className = 'panel';
    box.innerHTML = `
      <h3>🍽️ מה אוכלים ליד השוק בשעת הביקור</h3>
      <div class="food-grid">
        <div class="foodcard"><h4>Fakanál Étterem</h4><div class="where">בתוך השוק</div><p><b>הבחירה הפרקטית ביותר:</b> אוכל הונגרי בלי לבזבז זמן מעבר. מתאים אם רוצים גולאש או מנה מקומית לפני היציאה לפארק.</p></div>
        <div class="foodcard"><h4>Krumplis Lángos</h4><div class="where">כ־0.2 ק״מ מהשוק</div><p><b>הבחירה הכיפית:</b> לאנגוש חם כנשנוש או ארוחת צהריים קלה. מומלץ לחלוק מנה כדי לא להכביד לפני המשך היום.</p></div>
        <div class="foodcard"><h4>Market 1897</h4><div class="where">כ־0.1 מייל מהשוק</div><p><b>הבחירה לישיבה:</b> אם רוצים שולחן ושירות רגוע יותר. יש להקדיש יותר זמן מאשר לדוכן בתוך השוק.</p></div>
        <div class="foodcard"><h4>Bangkok Thai</h4><div class="where">כ־0.1 ק״מ מהשוק</div><p><b>הבחירה הלא־הונגרית:</b> קרוב מאוד ומתאים אם הבת מעדיפה אוכל אסייתי על פני אוכל מקומי כבד.</p></div>
      </div>
      <p class="sub"><b>ההמלצה שלי:</b> בסביבות 11:00 לאכול טעימה קטנה בשוק או לאנגוש, ואז להשאיר את הארוחה הקלה בפארק כאופציה בלבד. כך לא מבזבזים זמן על שתי ארוחות צהריים.</p>`;
    const summary = saturday.querySelector('.summary');
    if (summary) summary.insertAdjacentElement('afterend',box); else saturday.appendChild(box);
  }

  // 6) Update Saturday summary.
  const sat = document.querySelector('#d3');
  if (sat) {
    const s = sat.querySelector('.summary');
    if (s) s.innerHTML = '<h3>✨ סיכום היום</h3><div class="summary-grid"><div><b>עיקרי היום</b>השוק הגדול, Vajdahunyad Castle, House of Music, Moon ו־TOKIO.</div><div><b>קצב והליכה</b>יום מגוון עם שני אזורים; השוק מחליף את גן המשחקים ומוסיף אוכל ותרבות מקומית.</div><div><b>העוגן</b>השוק בבוקר ו־Moon בערב.</div><div><b>מה גמיש</b>אם אוכלים היטב בשוק, הופכים את ארוחת הפארק לקפה או גלידה בלבד.</div></div>';
  }
})();
