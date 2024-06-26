"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
module.exports = __toCommonJS(app_exports);
var import_express2 = __toESM(require("express"));

// src/routes.ts
var import_express = require("express");

// src/repositories/players-repository.ts
var database = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78
    }
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84
    }
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 85,
      Passing: 92,
      Dribbling: 87,
      Defending: 62,
      Physical: 79
    }
  },
  {
    id: 5,
    name: "Kylian Mbapp\xE9",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 86,
      Passing: 79,
      Dribbling: 91,
      Defending: 39,
      Physical: 76
    }
  },
  {
    id: 6,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78
    }
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84
    }
  },
  {
    id: 9,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 88,
      Shooting: 90,
      Passing: 75,
      Dribbling: 81,
      Defending: 32,
      Physical: 89
    }
  },
  {
    id: 10,
    name: "Neymar Jr.",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 92,
      Shooting: 84,
      Passing: 88,
      Dribbling: 95,
      Defending: 38,
      Physical: 72
    }
  },
  {
    id: 11,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 87,
      Passing: 81,
      Dribbling: 89,
      Defending: 45,
      Physical: 75
    }
  },
  {
    id: 12,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 60,
      Passing: 78,
      Dribbling: 70,
      Defending: 90,
      Physical: 92
    }
  },
  {
    id: 13,
    name: "Sadio Man\xE9",
    club: "Liverpool",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 95,
      Shooting: 85,
      Passing: 78,
      Dribbling: 90,
      Defending: 45,
      Physical: 78
    }
  },
  {
    id: 14,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 84,
      Shooting: 70,
      Passing: 86,
      Dribbling: 82,
      Defending: 85,
      Physical: 77
    }
  },
  {
    id: 15,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 84,
      Shooting: 85,
      Passing: 86,
      Dribbling: 48,
      Defending: 90,
      Physical: 77
    }
  },
  {
    id: 16,
    name: "Frenkie de Jong",
    club: "Barcelona",
    nationality: "Netherlands",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 78,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 80,
      Physical: 82
    }
  },
  {
    id: 17,
    name: "Raheem Sterling",
    club: "Manchester City",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 93,
      Shooting: 82,
      Passing: 79,
      Dribbling: 90,
      Defending: 40,
      Physical: 77
    }
  },
  {
    id: 18,
    name: "Zlatan Ibrahimovi\u0107",
    club: "AC Milan",
    nationality: "Sweden",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 81,
      Shooting: 92,
      Passing: 85,
      Dribbling: 86,
      Defending: 40,
      Physical: 88
    }
  },
  {
    id: 19,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72
    }
  }
];
var findAllPlayers = () => __async(void 0, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(void 0, null, function* () {
  return database.find((player) => player.id === id);
});
var insertPlayer = (player) => __async(void 0, null, function* () {
  database.push(player);
});
var deleteOnePlayer = (id) => __async(void 0, null, function* () {
  const index = database.findIndex((p) => p.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
});
var findAndModifyPlayer = (id, statistics) => __async(void 0, null, function* () {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
  return database[playerIndex];
});

// src/utils/http-helper.ts
var ok = (data) => __async(void 0, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var created = () => __async(void 0, null, function* () {
  return {
    statusCode: 201,
    body: {
      message: "successful"
    }
  };
});
var noContent = () => __async(void 0, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = () => __async(void 0, null, function* () {
  return {
    statusCode: 400,
    body: null
  };
});

// src/services/players-service.ts
var getPlayerService = () => __async(void 0, null, function* () {
  const data = yield findAllPlayers();
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var getPlayerByIdService = (id) => __async(void 0, null, function* () {
  const data = yield findPlayerById(id);
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var createPlayerService = (player) => __async(void 0, null, function* () {
  let response = null;
  if (Object.keys(player).length !== 0) {
    yield insertPlayer(player);
    response = yield created();
  } else {
    response = yield badRequest();
  }
  return response;
});
var deletePlayerService = (id) => __async(void 0, null, function* () {
  let response = null;
  const isDeleted = yield deleteOnePlayer(id);
  if (isDeleted) {
    response = yield ok({ message: "deleted" });
  } else {
    response = yield badRequest();
  }
  return response;
});
var updatePlayerService = (id, statistics) => __async(void 0, null, function* () {
  const data = yield findAndModifyPlayer(id, statistics);
  let response = null;
  if (Object.keys(data).length === 0) {
    response = yield badRequest();
  } else {
    response = yield ok(data);
  }
  return response;
});

// src/controllers/players-controller.ts
var getPlayer = (req, res) => __async(void 0, null, function* () {
  const httpResponse = yield getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getPlayerById = (req, res) => __async(void 0, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var postPlayer = (req, res) => __async(void 0, null, function* () {
  const bodyValue = req.body;
  const httpResponse = yield createPlayerService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
});
var deletePlayer = (req, res) => __async(void 0, null, function* () {
  const id = parseInt(req.params.id);
  const httpResponse = yield deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var updatePlayer = (req, res) => __async(void 0, null, function* () {
  const id = parseInt(req.params.id);
  const bodyValue = req.body;
  const httpResponse = yield updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/repositories/clubs-repository.ts
var import_promises = __toESM(require("fs/promises"));
var findAllClubs = () => __async(void 0, null, function* () {
  const data = yield import_promises.default.readFile("./src/data/clubs.json", "utf-8");
  const clubs = JSON.parse(data);
  return clubs;
});

// src/services/clubs-service.ts
var getClubService = () => __async(void 0, null, function* () {
  const data = yield findAllClubs();
  const response = ok(data);
  return response;
});

// src/controllers/clubs-controller.ts
var getClubs = (req, res) => __async(void 0, null, function* () {
  const response = yield getClubService();
  res.status(response.statusCode).json(response.body);
});

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);
router.get("/players/:id", getPlayerById);
router.get("/clubs", getClubs);
var routes_default = router;

// src/app.ts
var import_cors = __toESM(require("cors"));
function createApp() {
  const app = (0, import_express2.default)();
  app.use(import_express2.default.json());
  app.use("/api", routes_default);
  const corsOptions = {
    origin: ["http://felipao.sistem.com", "http://gov.br"],
    methods: ["GET", "UPDATE"]
  };
  app.use((0, import_cors.default)());
  return app;
}
var app_default = createApp;
