(() => {
  const day = document.querySelector('#d3');
  if (!day) return;

  day.querySelector('.dayhead h2').textContent = 'שבת 8.8 — השוק הגדול, Váci, Moon, Párisi והפרלמנט';
  day.querySelector('.dayhead .sub').textContent = 'יום עירוני עשיר: שוק, הליכה יפה, אמנות, קינוח, קוריוז ותצפיות בדנובה';

  const periods = day.querySelectorAll('.period');
  const itinerary = `
    <div class="period"><h3>☕ בוקר — ארוחת בוקר והשוק הגדול</h3><div class="timeline">
      <article class="step"><div class="time">08:45–09:20</div><div><h4>Á la Maison</h4><div class="tags"><span class="tag pink">מומלץ להזמין</span></div><p>ארוחת בוקר חגיגית ב־Szervita tér 3. בשבת המקום פתוח מ־08:00, ולכן 08:45 עובד היטב למסלול.</p></div></article>
      <div class="move"><div class="ic">🚕</div><div><h4>Á la Maison → Great Market Hall</h4><div><b>הכי מדויק לזמן:</b> Bolt, כ־8–12 דקות לפי עומס. <b>ברגל:</b> כ־15–20 דקות דרך מרכז פשט. יוצאים סביב 09:20 כדי להגיע בקירוב ל־09:30.</div></div></div>
      <article class="step"><div class="time">09:30–10:30</div><div><h4>Great Market Hall — השוק הגדול</h4><div class="tags"><span class="tag green">60 דק׳</span><span class="tag">כניסה חינם</span><span class="tag pink">טעימות קטנות</span></div><p>מתחילים בקומת המזון עם פפריקה, סלמי, גבינות, מאפים ופירות; מרימים את הראש לגג הברזל והזכוכית; ועולים לגלריה העליונה למזכרות ולאוכל רחוב. בשבת השוק פתוח 06:00–16:00.</p></div></article>
    </div></div>

    <div class="period"><h3>🚶 מרכז היום — Váci, Moon, Párisi וקיורטוש</h3><div class="timeline">
      <div class="move"><div class="ic">🚶</div><div><h4>השוק → Váci utca</h4><div>היציאה הצפונית של השוק נמצאת ליד תחילת רחוב Váci. המעבר הוא כ־2–3 דקות בלבד.</div></div></div>
      <article class="step"><div class="time">10:30–11:15</div><div><h4>הליכה לאורך Váci utca</h4><div class="tags"><span class="tag">45 דק׳</span><span class="tag green">חנויות ואווירה</span></div><p>הולכים צפונה בקצב נעים, עוצרים בחנות או שתיים וממשיכים לכיוון Piarista köz. לא הופכים את החלק הזה למסע קניות ארוך, כי Westend שמור ליום ראשון.</p></div></article>
      <article class="step"><div class="time">11:15–11:40</div><div><h4>Moon Budapest</h4><div class="tags"><span class="tag">Piarista köz 1</span><span class="tag yellow">25 דק׳</span></div><p>מיצב ירח צף בקוטר 7 מטרים המבוסס על דימויי NASA. זהו מיצב חוץ במעבר קטן בין Váci utca לכיכר Március 15, ולכן אין צורך להקדיש לו שעה שלמה.</p></div></article>
      <div class="move"><div class="ic">🚶</div><div><h4>Moon → Párisi Udvar</h4><div>כ־5–7 דקות הליכה דרך הרחובות הפנימיים של רובע V.</div></div></div>
      <article class="step"><div class="time">11:50–12:20</div><div><h4>Párisi Udvar</h4><div class="tags"><span class="tag">30 דק׳</span></div><p>נכנסים ללובי, מסתכלים על תקרת הזכוכית, הקשתות והעיטורים. אם תרצו ארוחת צהריים אלגנטית, מסעדת Párisi Passage מתחילה ביסטרו ו־à la carte ב־12:00.</p></div></article>
      <div class="move"><div class="ic">🚶</div><div><h4>Párisi Udvar → Molnár’s Kürtőskalács</h4><div>כ־6–8 דקות הליכה אל Váci utca 31.</div></div></div>
      <article class="step"><div class="time">12:30–12:55</div><div><h4>Molnár’s Kürtőskalács</h4><div class="tags"><span class="tag pink">קינוח</span><span class="tag">פתוח 09:00–20:00</span></div><p>קיורטוש טרי לחלוקה. הבחירה שלי: קינמון או אגוזים, בלי מילוי כבד, כדי להשאיר מקום לארוחת צהריים קלה.</p></div></article>
    </div></div>

    <div class="period"><h3>🍽️ צהריים — בחירה לפי מצב הרוח</h3><div class="timeline">
      <article class="step"><div class="time">13:00–14:00</div><div><h4>ארוחת צהריים באזור Váci / Párisi</h4><div class="tags"><span class="tag green">בחירה אחת</span></div><p><b>Párisi Passage:</b> המקום היפה והחווייתי ביותר, עם מטבח הונגרי ובינלאומי בתוך האולם ההיסטורי. <b>Fakanál בשוק:</b> מתאים אם מחליטים לאכול מוקדם עוד בזמן הביקור בשוק. <b>Bangkok Thai ליד השוק:</b> חלופה לא־הונגרית אם רוצים אוכל מוכר וקל יותר. <b>המלצה שלי למסלול:</b> Párisi Passage בסביבות 13:00, כי הוא יושב בדיוק על הציר ודורש אפס נסיעה נוספת.</p></div></article>
      <div class="move"><div class="ic">🚶</div><div><h4>אזור הצהריים → Pop & Roll</h4><div>מ־Párisi Udvar כ־10–12 דקות; מ־Váci utca 31 כ־8–10 דקות. הכתובת: Dorottya utca 6.</div></div></div>
      <article class="step"><div class="time">14:15–14:45</div><div><h4>Pop & Roll Art Toilet</h4><div class="tags"><span class="tag yellow">קוריוז צבעוני</span><span class="tag">30 דק׳</span></div><p>גלריה, חנות ושירותים אמנותיים באותו מתחם. המקום נמצא ליד Madame Tussauds ובמרחק קצר מכיכר Vörösmarty.</p></div></article>
    </div></div>

    <div class="period"><h3>🏛️ אחר הצהריים — הליכה לכיוון הפרלמנט</h3><div class="timeline">
      <article class="step"><div class="time">14:45–16:15</div><div><h4>Pop & Roll → הדנובה → הפרלמנט</h4><div class="tags"><span class="tag green">הליכה נופית</span><span class="tag">כ־2.5 ק״מ עם עצירות</span></div><p>יוצאים דרך Vörösmarty tér אל טיילת הדנובה, ממשיכים צפונה לאורך הנהר ועוצרים לתמונות של גשר השלשלאות, בודה והפרלמנט. הליכה ישירה היא בערך 30–35 דקות, אבל במסלול הזה משאירים 90 דקות לעצירות, צילום וגלידה אם מתחשק.</p></div></article>
      <article class="step"><div class="time">16:15–16:45</div><div><h4>בניין הפרלמנט והכיכר</h4><div class="tags"><span class="tag">ביקור חיצוני</span></div><p>מקיפים את Kossuth Lajos tér ומסתכלים על החזית והכיפה. הסיור הפנימי נשאר ביום ראשון, אם יש כרטיס.</p></div></article>
      <div class="move"><div class="ic">🚇</div><div><h4>הפרלמנט → Emerald Hotel</h4><div>M2 מתחנת Kossuth Lajos tér לתחנת Deák Ferenc tér, ואז כ־8–10 דקות הליכה. תכנון כולל: כ־18–25 דקות.</div></div></div>
      <article class="step"><div class="time">17:10–18:20</div><div><h4>מנוחה במלון</h4><div class="tags"><span class="tag green">מנוחה לפני הערב</span></div><p>מקלחת, טעינת טלפונים וזמן שקט לפני ארוחת הערב.</p></div></article>
    </div></div>

    <div class="period"><h3>🍣 ערב — TOKIO או Textúra</h3><div class="timeline">
      <article class="step"><div class="time">18:45–20:30</div><div><h4>ארוחת ערב</h4><div class="tags"><span class="tag pink">הזמנה מומלצת</span></div><p><b>TOKIO:</b> הבחירה המועדפת לטיול אבא־בת, צעירה יותר, יפנית וממוקמת ליד הדנובה. <b>Textúra:</b> בחירה יוקרתית וניסיונית יותר, עם מטבח הונגרי־בינלאומי מודרני בהובלת צוות של שף בעל כוכב Michelin; פתוחה בשבת, ומומלץ לוודא שהבת מתחברת לסגנון לפני הזמנה.</p></div></article>
      <article class="step"><div class="time">20:30–21:00</div><div><h4>הליכת ערב קצרה</h4><p>אם בחרתם TOKIO, מסיימים ליד הדנובה. אם בחרתם Textúra, חוזרים ברגל דרך אזור הבזיליקה למלון.</p></div></article>
    </div></div>`;

  periods.forEach(p => p.remove());
  const summary = day.querySelector('.summary');
  summary.insertAdjacentHTML('beforebegin', itinerary);
  summary.innerHTML = '<h3>✨ סיכום היום</h3><div class="summary-grid"><div><b>עיקרי היום</b>Á la Maison, השוק הגדול, Váci, Moon, Párisi Udvar, Molnár’s, Pop & Roll, הדנובה והפרלמנט.</div><div><b>קצב והליכה</b>כ־7–9 ק״מ לאורך היום, כמעט הכול בציר רציף מדרום לצפון.</div><div><b>העוגן</b>השוק בבוקר וההליכה הנופית לפרלמנט אחר הצהריים.</div><div><b>מה גמיש</b>אם מתעייפים, חוזרים למלון אחרי Pop & Roll ומוותרים על קטע ההליכה לפרלמנט.</div></div>';

  const card = [...day.querySelectorAll('.curio')].find(c => c.textContent.includes('Main Playground'));
  if (card) {
    card.querySelector('img').src = 'images/great-market-hall.jpg';
    card.querySelector('img').alt = 'Great Market Hall Budapest';
    card.querySelector('.curio-body').innerHTML = '<h4>Great Market Hall — השוק הגדול</h4><p><b>למה הוא מיוחד?</b> זהו השוק המקורה הגדול והוותיק בבודפשט, המשלב אוכל מקומי, אדריכלות מרשימה וחיי יום־יום.</p><p class="history"><b>📚 סיפור היסטורי — 3 משפטים</b><br>השוק נפתח בשנת 1897 כחלק מתוכנית עירונית לשפר את בטיחות המזון ואת מערך האספקה לבודפשט. האדריכל Samu Pecz תכנן אולם נאו־גותי עצום עם שלד ברזל וגג צבעוני מאריחי Zsolnay, ולכן הוא נראה כמעט כמו תחנת רכבת חגיגית. המבנה נפגע במלחמת העולם השנייה, שוקם בהמשך, וכיום הוא מחבר בין מסחר מקומי, אוכל הונגרי ותיירות.</p><p class="seek"><b>🔎 מה לחפש?</b><br>שרשראות פפריקה, סלמי, דבש וחמוצים בקומת הקרקע; שלד הברזל והגג הצבעוני מעל; ועבודות יד בגלריה העליונה.</p><p class="question"><b>💬 שאלה לאבא ולבת</b><br>אם הייתם מרכיבים סל טעימות שמייצג את הונגריה בשלושה פריטים בלבד — מה הייתם בוחרים?</p><div class="credit">התמונה בכרטיסייה נוצרה באמצעות Microsoft Copilot ונשמרה מקומית בחבילת האתר.</div>';
  }

  const food = document.querySelector('#food .food-grid');
  if (food) {
    const old = [...food.querySelectorAll('.foodcard')].find(x => x.textContent.includes('שבת צהריים'));
    if (old) old.innerHTML = '<h4>שבת צהריים</h4><div class="where">Váci / Párisi Udvar</div><p><b>מועדף:</b> Párisi Passage ב־13:00 לחוויה אלגנטית בתוך המבנה. <b>מוקדם ומהיר:</b> Fakanál בתוך השוק. <b>חלופה אסייתית:</b> Bangkok Thai ליד השוק.</p>';
    const evening = [...food.querySelectorAll('.foodcard')].find(x => x.textContent.includes('שבת ערב'));
    if (evening) evening.innerHTML = '<h4>שבת ערב</h4><div class="where">מרכז פשט</div><p><b>TOKIO:</b> הבחירה הזורמת והצעירה יותר. <b>Textúra:</b> בחירה קולינרית יוקרתית וניסיונית יותר; להזמין מראש.</p>';
  }
})();
