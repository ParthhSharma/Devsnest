document.addEventListener('DOMContentLoaded', ()=>{
    function fetchData() {
        fetch('https://animechan.vercel.app/api/available/anime')
        .then(resp => resp.json())
        .then(newdata => shuffle(newdata))
        .then(data => renderAnime(data))
      }
      function shuffle(array) {
            var currentIndex = array.length,  randomIndex;
            while (0 !== currentIndex) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }
      function renderAnime(data) {
          for (const q of data) {
            const UL = document.querySelector('#list');
            const Li = document.createElement('li');
            const block = document.createElement('block');
            const h2 = document.createElement('h2');
            const br = document.createElement('br');
            Li.className = 'card';          
            block.className = 'block'; 
            h2.className = 'mb-0'; 
            h2.style = "display:flex; justify-content:center; margin-top:35px"                 
            Li.dataset.id = q.id;
            h2.innerHTML = q;
            block.append(h2,br);
            Li.append(block);
            UL.append(Li);
          }
       }
       fetchData();
    })