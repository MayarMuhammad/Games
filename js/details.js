import { UI } from "./ui.js";

export class GameDetails {
  constructor(id) {
    this.UI = new UI();

    this.showDetails(id);
    this.closeBtn();
  }

  closeBtn() {
    document.querySelector(".btn-close").addEventListener("click", function () {
      // $(".loadingScreen").fadeIn(100);
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".gameDetails").classList.add("d-none");
      // $(".loadingScreen").fadeOut(200);
    });
  }

  async getGamesDetails(gameID) {
    const URL = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "64bc27ee2dmsh2fa23914979621ap140a87jsnb4a259191426",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const res = await fetch(URL, options);
    if (res.status == 200 && res.ok) {
      const data = await res.json();
      return data;
    }
  }
  showDetails(gameID) {
    $(".loadingScreen").fadeIn(100);
    this.getGamesDetails(gameID).then((data) => {
      this.UI.displayGameDetails(data);
      $(".loadingScreen").fadeOut(200);
    });
  }
}
