const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

/* För att kunna utnyttja target på childnodes så sätter vi eventlistenern på parentnoden about. Då sitter alltså currentTarget på elementet som lyssnar efter eventet medans target returnerar det klickade elementet. Kallas event-bubbling.
 */
about.addEventListener('click', (e) => {
  // console.log(e.target); returnerar t.ex <p>... om man klickar på texten
  //console.log(e.target.dataset.id); returnerar history, visions, goals som data-id är satta på knapparna. Om jag klickar nån annanstans returneras undefined

  //Nu kollar jag om dataset.id existerar där jag klickar. alltså ...OM id finns...då=...
  //Ta bort active klassen från alla knappar
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      console.log('e.target');
      btn.classList.remove('active');
      e.target.classList.add('active'); //Lägg active till den klickade knappen
    });
    //Ta även bort active från alla artiklar
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    //Hämta artiklarnas id (från ovanståend variabel id)
    const element = document.getElementById(id);
    element.classList.add('active'); //Lägg active till den klickade knappens artikel
  }
});
