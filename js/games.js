import { UI } from "./ui.js";
import { GameDetails } from "./details.js";

export class Games {
  constructor() {
    this.createGames("mmorpg");
    self = this;
    // console.log(self);
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.addEventListener("click", function (e) {
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        self.createGames(this.id);
      });
    });

    this.ui = new UI();
  }

  async getGamesData(category) {
    const URL = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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

  createGames(category) {
    $(".loadingScreen").fadeIn(100);
    this.getGamesData(category).then((data) => {
      this.ui.displayGames(data);
      $(".loadingScreen").fadeOut(200);
      this.getDetails();
    });
  }

  getDetails() {
    document.querySelectorAll(".card").forEach((game) => {
      game.addEventListener("click", function () {
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".gameDetails").classList.remove("d-none");
        const gameDetails = new GameDetails(this.id);
        gameDetails.getGamesDetails(this.id);
      });
    });
  }
}
