export class UI {
  displayGames(gamesInfo) {
    // console.log(gamesInfo);
    let allGames = "";
    for (let i = 0; i < gamesInfo.length; i++) {
      allGames += `<div class="col-xl-3 col-lg-4 col-md-6 mb-4">
          <div class="card bg-transparent h-100" id="${gamesInfo[i].id}">
              <div class="card-body">
                  <figure><img src="${gamesInfo[i].thumbnail}" class="card-img-top w-100" alt="game image">
                  </figure>
                  <figcaption>
                      <div class="d-flex justify-content-between mb-2">
                          <h3 class="card-title m-0">${gamesInfo[i].title}</h3>
                          <span class="bodySpan py-2 px-3">Free</span>
                      </div>
                      <p class="card-text px-2 text-center">${gamesInfo[i].short_description}</p>
                  </figcaption>
              </div>
              <div class="border-top border-dark d-flex justify-content-between py-2 px-3">
                  <span class="footerSpan p-2">${gamesInfo[i].genre}</span>
                  <span class="footerSpan p-2">${gamesInfo[i].platform}</span>
              </div>
          </div>
      </div>`;
    }
    document.querySelector(".games .row").innerHTML = allGames;
  }

  displayGameDetails(details) {
    // console.log(details);
    let gameDetails = `<div class="img col-md-4"><img src="${details.thumbnail}" alt="game image" class="w-100"></div>
    <div class="text text-white col-md-8">
        <h3>${details.title}</h3>
        <p><label>Category:</label><span class="bg-info ms-2 py-1 px-2 text-black">${details.genre}</span></p>
        <p><label>Platform:</label><span class="bg-info ms-2 px-2 py-1 text-black">${details.platform}</span></p>
        <p><label>Status:</label><span class="bg-info ms-2 px-2 py-1 text-black">${details.status}</span></p>
        <p class="textDetails">${details.description}</p>
        <a type="button" class="btn btn-outline-warning text-white" target="_blank" href="${details.game_url}">Show Game</a>
    </div>`;
    document.querySelector(".gameDetails .row").innerHTML = gameDetails;
  }
}
