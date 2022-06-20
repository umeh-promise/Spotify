const competitions = [
  {
    count: 10,
    filters: {
      areas: [2077],
      plan: 'TIER_ONE',
    },
    id: 2016,
    area: {
      id: 2072,
      name: 'England',
      countryCode: 'ENG',
      ensignUrl: 'https://crests.football-data.org/770.svg',
    },
    name: 'Championship',
    code: 'ELC',
    emblemUrl: 'https://crests.football-data.org/ELC.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 735,
      startDate: '2021-08-07',
      endDate: '2022-05-09',
      currentMatchday: 46,
      winner: null,
    },
    numberOfAvailableSeasons: 5,
    lastUpdated: '2022-03-20T09:31:30Z',
  },
  {
    id: 2021,
    area: {
      id: 2072,
      name: 'England',
      countryCode: 'ENG',
      ensignUrl: 'https://crests.football-data.org/770.svg',
    },
    name: 'Premier League',
    code: 'PL',
    emblemUrl: 'https://crests.football-data.org/PL.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 1490,
      startDate: '2022-08-05',
      endDate: '2023-05-28',
      currentMatchday: 1,
      winner: null,
    },
    numberOfAvailableSeasons: 124,
    lastUpdated: '2022-03-20T08:58:54Z',
  },
  {
    id: 2001,
    area: {
      id: 2077,
      name: 'Europe',
      countryCode: 'EUR',
      ensignUrl: 'https://crests.football-data.org/EUR.svg',
    },
    name: 'UEFA Champions League',
    code: 'CL',
    emblemUrl: 'https://crests.football-data.org/CL.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 1491,
      startDate: '2022-06-21',
      endDate: '2023-07-01',
      currentMatchday: null,
      winner: null,
    },
    numberOfAvailableSeasons: 43,
    lastUpdated: '2022-03-20T09:20:44Z',
  },
  {
    id: 2018,
    area: {
      id: 2077,
      name: 'Europe',
      countryCode: 'EUR',
      ensignUrl: 'https://crests.football-data.org/EUR.svg',
    },
    name: 'European Championship',
    code: 'EC',
    emblemUrl: 'https://crests.football-data.org/EUR.svg',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 507,
      startDate: '2021-06-11',
      endDate: '2021-07-11',
      currentMatchday: 7,
      winner: null,
    },
    numberOfAvailableSeasons: 16,
    lastUpdated: '2021-07-20T18:34:04Z',
  },
  {
    id: 2015,
    area: {
      id: 2081,
      name: 'France',
      countryCode: 'FRA',
      ensignUrl: 'https://crests.football-data.org/773.svg',
    },
    name: 'Ligue 1',
    code: 'FL1',
    emblemUrl: 'https://crests.football-data.org/FL1.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 746,
      startDate: '2021-08-06',
      endDate: '2022-05-21',
      currentMatchday: 38,
      winner: null,
    },
    numberOfAvailableSeasons: 78,
    lastUpdated: '2022-03-20T09:30:02Z',
  },
  {
    id: 2002,
    area: {
      id: 2088,
      name: 'Germany',
      countryCode: 'DEU',
      ensignUrl: 'https://crests.football-data.org/759.svg',
    },
    name: 'Bundesliga',
    code: 'BL1',
    emblemUrl: 'https://crests.football-data.org/BL1.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 1495,
      startDate: '2022-08-05',
      endDate: '2023-05-27',
      currentMatchday: 1,
      winner: null,
    },
    numberOfAvailableSeasons: 60,
    lastUpdated: '2022-03-20T08:52:53Z',
  },
  {
    id: 2019,
    area: {
      id: 2114,
      name: 'Italy',
      countryCode: 'ITA',
      ensignUrl: 'https://crests.football-data.org/784.svg',
    },
    name: 'Serie A',
    code: 'SA',
    emblemUrl: 'https://crests.football-data.org/SA.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 757,
      startDate: '2021-08-21',
      endDate: '2022-05-22',
      currentMatchday: 38,
      winner: null,
    },
    numberOfAvailableSeasons: 90,
    lastUpdated: '2022-03-20T09:16:43Z',
  },
  {
    id: 2003,
    area: {
      id: 2163,
      name: 'Netherlands',
      countryCode: 'NLD',
      ensignUrl: 'https://crests.football-data.org/8601.svg',
    },
    name: 'Eredivisie',
    code: 'DED',
    emblemUrl: 'https://crests.football-data.org/ED.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 1494,
      startDate: '2022-08-05',
      endDate: '2023-05-28',
      currentMatchday: 1,
      winner: null,
    },
    numberOfAvailableSeasons: 67,
    lastUpdated: '2022-03-20T09:19:27Z',
  },
  {
    id: 2017,
    area: {
      id: 2187,
      name: 'Portugal',
      countryCode: 'PRT',
      ensignUrl: 'https://crests.football-data.org/765.svg',
    },
    name: 'Primeira Liga',
    code: 'PPL',
    emblemUrl: 'https://crests.football-data.org/PPL.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 755,
      startDate: '2021-08-06',
      endDate: '2022-05-15',
      currentMatchday: 34,
      winner: null,
    },
    numberOfAvailableSeasons: 73,
    lastUpdated: '2022-03-20T09:34:09Z',
  },
  {
    id: 2014,
    area: {
      id: 2224,
      name: 'Spain',
      countryCode: 'ESP',
      ensignUrl: 'https://crests.football-data.org/760.svg',
    },
    name: 'Primera Division',
    code: 'PD',
    emblemUrl: 'https://crests.football-data.org/PD.png',
    plan: 'TIER_ONE',
    currentSeason: {
      id: 380,
      startDate: '2021-08-13',
      endDate: '2022-05-22',
      currentMatchday: 38,
      winner: null,
    },
    numberOfAvailableSeasons: 91,
    lastUpdated: '2022-03-20T09:20:08Z',
  },
];

const englandStandings = [
  {
    filters: {},
    competition: {
      id: 2016,
      area: {
        id: 2072,
        name: 'England',
      },
      name: 'Championship',
      code: 'ELC',
      plan: 'TIER_ONE',
      lastUpdated: '2022-03-20T09:31:30Z',
    },
    season: {
      id: 735,
      startDate: '2021-08-07',
      endDate: '2022-05-09',
      currentMatchday: 46,
      winner: null,
    },
    standings: [
      {
        stage: 'REGULAR_SEASON',
        type: 'TOTAL',
        group: null,
        table: [
          {
            position: 1,
            team: {
              id: 63,
              name: 'Fulham FC',
              crestUrl: 'https://crests.football-data.org/63.svg',
            },
            playedGames: 46,
            form: null,
            won: 27,
            draw: 9,
            lost: 10,
            points: 90,
            goalsFor: 106,
            goalsAgainst: 43,
            goalDifference: 63,
          },
          {
            position: 2,
            team: {
              id: 1044,
              name: 'AFC Bournemouth',
              crestUrl: 'https://crests.football-data.org/1044.png',
            },
            playedGames: 46,
            form: null,
            won: 25,
            draw: 13,
            lost: 8,
            points: 88,
            goalsFor: 74,
            goalsAgainst: 39,
            goalDifference: 35,
          },
          {
            position: 3,
            team: {
              id: 394,
              name: 'Huddersfield Town AFC',
              crestUrl: 'https://crests.football-data.org/394.png',
            },
            playedGames: 46,
            form: null,
            won: 23,
            draw: 13,
            lost: 10,
            points: 82,
            goalsFor: 64,
            goalsAgainst: 47,
            goalDifference: 17,
          },
          {
            position: 4,
            team: {
              id: 351,
              name: 'Nottingham Forest FC',
              crestUrl: 'https://crests.football-data.org/351.svg',
            },
            playedGames: 46,
            form: null,
            won: 23,
            draw: 11,
            lost: 12,
            points: 80,
            goalsFor: 73,
            goalsAgainst: 40,
            goalDifference: 33,
          },
          {
            position: 5,
            team: {
              id: 356,
              name: 'Sheffield United FC',
              crestUrl: 'https://crests.football-data.org/356.svg',
            },
            playedGames: 46,
            form: null,
            won: 21,
            draw: 12,
            lost: 13,
            points: 75,
            goalsFor: 63,
            goalsAgainst: 45,
            goalDifference: 18,
          },
          {
            position: 6,
            team: {
              id: 389,
              name: 'Luton Town FC',
              crestUrl: 'https://crests.football-data.org/389.png',
            },
            playedGames: 46,
            form: null,
            won: 21,
            draw: 12,
            lost: 13,
            points: 75,
            goalsFor: 63,
            goalsAgainst: 55,
            goalDifference: 8,
          },
          {
            position: 7,
            team: {
              id: 343,
              name: 'Middlesbrough FC',
              crestUrl: 'https://crests.football-data.org/343.png',
            },
            playedGames: 46,
            form: null,
            won: 20,
            draw: 10,
            lost: 16,
            points: 70,
            goalsFor: 59,
            goalsAgainst: 50,
            goalDifference: 9,
          },
          {
            position: 8,
            team: {
              id: 59,
              name: 'Blackburn Rovers FC',
              crestUrl: 'https://crests.football-data.org/59.png',
            },
            playedGames: 46,
            form: null,
            won: 19,
            draw: 12,
            lost: 15,
            points: 69,
            goalsFor: 59,
            goalsAgainst: 50,
            goalDifference: 9,
          },
          {
            position: 9,
            team: {
              id: 384,
              name: 'Millwall FC',
              crestUrl: 'https://crests.football-data.org/384.png',
            },
            playedGames: 46,
            form: null,
            won: 18,
            draw: 15,
            lost: 13,
            points: 69,
            goalsFor: 53,
            goalsAgainst: 45,
            goalDifference: 8,
          },
          {
            position: 10,
            team: {
              id: 74,
              name: 'West Bromwich Albion FC',
              crestUrl: 'https://crests.football-data.org/74.png',
            },
            playedGames: 46,
            form: null,
            won: 18,
            draw: 13,
            lost: 15,
            points: 67,
            goalsFor: 52,
            goalsAgainst: 45,
            goalDifference: 7,
          },
          {
            position: 11,
            team: {
              id: 69,
              name: 'Queens Park Rangers FC',
              crestUrl: 'https://crests.football-data.org/69.png',
            },
            playedGames: 46,
            form: null,
            won: 19,
            draw: 9,
            lost: 18,
            points: 66,
            goalsFor: 60,
            goalsAgainst: 59,
            goalDifference: 1,
          },
          {
            position: 12,
            team: {
              id: 1076,
              name: 'Coventry City FC',
              crestUrl: 'https://crests.football-data.org/1076.png',
            },
            playedGames: 46,
            form: null,
            won: 17,
            draw: 13,
            lost: 16,
            points: 64,
            goalsFor: 60,
            goalsAgainst: 59,
            goalDifference: 1,
          },
          {
            position: 13,
            team: {
              id: 1081,
              name: 'Preston North End FC',
              crestUrl: 'https://crests.football-data.org/1081.png',
            },
            playedGames: 46,
            form: null,
            won: 16,
            draw: 16,
            lost: 14,
            points: 64,
            goalsFor: 52,
            goalsAgainst: 56,
            goalDifference: -4,
          },
          {
            position: 14,
            team: {
              id: 70,
              name: 'Stoke City FC',
              crestUrl: 'https://crests.football-data.org/70.png',
            },
            playedGames: 46,
            form: null,
            won: 17,
            draw: 11,
            lost: 18,
            points: 62,
            goalsFor: 57,
            goalsAgainst: 52,
            goalDifference: 5,
          },
          {
            position: 15,
            team: {
              id: 72,
              name: 'Swansea City AFC',
              crestUrl: 'https://crests.football-data.org/72.png',
            },
            playedGames: 46,
            form: null,
            won: 16,
            draw: 13,
            lost: 17,
            points: 61,
            goalsFor: 58,
            goalsAgainst: 68,
            goalDifference: -10,
          },
          {
            position: 16,
            team: {
              id: 336,
              name: 'Blackpool FC',
              crestUrl: 'https://crests.football-data.org/336.png',
            },
            playedGames: 46,
            form: null,
            won: 16,
            draw: 12,
            lost: 18,
            points: 60,
            goalsFor: 54,
            goalsAgainst: 58,
            goalDifference: -4,
          },
          {
            position: 17,
            team: {
              id: 387,
              name: 'Bristol City FC',
              crestUrl: 'https://crests.football-data.org/387.svg',
            },
            playedGames: 46,
            form: null,
            won: 15,
            draw: 10,
            lost: 21,
            points: 55,
            goalsFor: 62,
            goalsAgainst: 77,
            goalDifference: -15,
          },
          {
            position: 18,
            team: {
              id: 715,
              name: 'Cardiff City FC',
              crestUrl: 'https://crests.football-data.org/715.png',
            },
            playedGames: 46,
            form: null,
            won: 15,
            draw: 8,
            lost: 23,
            points: 53,
            goalsFor: 50,
            goalsAgainst: 68,
            goalDifference: -18,
          },
          {
            position: 19,
            team: {
              id: 322,
              name: 'Hull City AFC',
              crestUrl: 'https://crests.football-data.org/322.png',
            },
            playedGames: 46,
            form: null,
            won: 14,
            draw: 9,
            lost: 23,
            points: 51,
            goalsFor: 41,
            goalsAgainst: 54,
            goalDifference: -13,
          },
          {
            position: 20,
            team: {
              id: 332,
              name: 'Birmingham City FC',
              crestUrl: 'https://crests.football-data.org/332.png',
            },
            playedGames: 46,
            form: null,
            won: 11,
            draw: 14,
            lost: 21,
            points: 47,
            goalsFor: 50,
            goalsAgainst: 75,
            goalDifference: -25,
          },
          {
            position: 21,
            team: {
              id: 355,
              name: 'Reading FC',
              crestUrl: 'https://crests.football-data.org/355.svg',
            },
            playedGames: 46,
            form: null,
            won: 13,
            draw: 8,
            lost: 25,
            points: 41,
            goalsFor: 54,
            goalsAgainst: 87,
            goalDifference: -33,
          },
          {
            position: 22,
            team: {
              id: 1077,
              name: 'Peterborough United FC',
              crestUrl: 'https://crests.football-data.org/1077.png',
            },
            playedGames: 46,
            form: null,
            won: 9,
            draw: 10,
            lost: 27,
            points: 37,
            goalsFor: 43,
            goalsAgainst: 87,
            goalDifference: -44,
          },
          {
            position: 23,
            team: {
              id: 342,
              name: 'Derby County FC',
              crestUrl: 'https://crests.football-data.org/342.svg',
            },
            playedGames: 46,
            form: null,
            won: 14,
            draw: 13,
            lost: 19,
            points: 34,
            goalsFor: 45,
            goalsAgainst: 53,
            goalDifference: -8,
          },
          {
            position: 24,
            team: {
              id: 357,
              name: 'Barnsley FC',
              crestUrl: 'https://crests.football-data.org/357.png',
            },
            playedGames: 46,
            form: null,
            won: 6,
            draw: 12,
            lost: 28,
            points: 30,
            goalsFor: 33,
            goalsAgainst: 73,
            goalDifference: -40,
          },
        ],
      },
    ],
  },
];

const englandMatches = [
  {
    count: 12,
    filters: {
      matchday: '46',
    },
    competition: {
      id: 2016,
      area: {
        id: 2072,
        name: 'England',
      },
      name: 'Championship',
      code: 'ELC',
      plan: 'TIER_ONE',
      lastUpdated: '2022-03-20T09:31:30Z',
    },
    matches: [
      {
        id: 327681,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'AWAY_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 0,
            awayTeam: 1,
          },
          halfTime: {
            homeTeam: 0,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 72,
          name: 'Swansea City AFC',
        },
        awayTeam: {
          id: 69,
          name: 'Queens Park Rangers FC',
        },
        referees: [],
      },
      {
        id: 327682,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'AWAY_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 0,
            awayTeam: 1,
          },
          halfTime: {
            homeTeam: 0,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 342,
          name: 'Derby County FC',
        },
        awayTeam: {
          id: 715,
          name: 'Cardiff City FC',
        },
        referees: [],
      },
      {
        id: 327683,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 4,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 2,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 74,
          name: 'West Bromwich Albion FC',
        },
        awayTeam: {
          id: 357,
          name: 'Barnsley FC',
        },
        referees: [],
      },
      {
        id: 327684,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'DRAW',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 1,
            awayTeam: 1,
          },
          halfTime: {
            homeTeam: 1,
            awayTeam: 1,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 70,
          name: 'Stoke City FC',
        },
        awayTeam: {
          id: 1076,
          name: 'Coventry City FC',
        },
        referees: [],
      },
      {
        id: 327685,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 4,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 3,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 356,
          name: 'Sheffield United FC',
        },
        awayTeam: {
          id: 63,
          name: 'Fulham FC',
        },
        referees: [],
      },
      {
        id: 327686,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 4,
            awayTeam: 1,
          },
          halfTime: {
            homeTeam: 2,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 1081,
          name: 'Preston North End FC',
        },
        awayTeam: {
          id: 343,
          name: 'Middlesbrough FC',
        },
        referees: [],
      },
      {
        id: 327687,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 5,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 1,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 1077,
          name: 'Peterborough United FC',
        },
        awayTeam: {
          id: 336,
          name: 'Blackpool FC',
        },
        referees: [],
      },
      {
        id: 327688,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 1,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 1,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 389,
          name: 'Luton Town FC',
        },
        awayTeam: {
          id: 355,
          name: 'Reading FC',
        },
        referees: [],
      },
      {
        id: 327689,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'DRAW',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 1,
            awayTeam: 1,
          },
          halfTime: {
            homeTeam: 0,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 322,
          name: 'Hull City AFC',
        },
        awayTeam: {
          id: 351,
          name: 'Nottingham Forest FC',
        },
        referees: [],
      },
      {
        id: 327690,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 2,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 2,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 394,
          name: 'Huddersfield Town AFC',
        },
        awayTeam: {
          id: 387,
          name: 'Bristol City FC',
        },
        referees: [],
      },
      {
        id: 327691,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'HOME_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 1,
            awayTeam: 0,
          },
          halfTime: {
            homeTeam: 0,
            awayTeam: 0,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 1044,
          name: 'AFC Bournemouth',
        },
        awayTeam: {
          id: 384,
          name: 'Millwall FC',
        },
        referees: [],
      },
      {
        id: 327692,
        season: {
          id: 735,
          startDate: '2021-08-07',
          endDate: '2022-05-09',
          currentMatchday: 46,
        },
        utcDate: '2022-05-07T11:30:00Z',
        status: 'FINISHED',
        matchday: 46,
        stage: 'REGULAR_SEASON',
        group: null,
        lastUpdated: '2022-06-18T16:20:17Z',
        odds: {
          msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
        },
        score: {
          winner: 'AWAY_TEAM',
          duration: 'REGULAR',
          fullTime: {
            homeTeam: 1,
            awayTeam: 2,
          },
          halfTime: {
            homeTeam: 0,
            awayTeam: 2,
          },
          extraTime: {
            homeTeam: null,
            awayTeam: null,
          },
          penalties: {
            homeTeam: null,
            awayTeam: null,
          },
        },
        homeTeam: {
          id: 332,
          name: 'Birmingham City FC',
        },
        awayTeam: {
          id: 59,
          name: 'Blackburn Rovers FC',
        },
        referees: [],
      },
    ],
  },
];

export { competitions, englandStandings, englandMatches };
