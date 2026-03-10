// champions Data
const champions = [
    // champions data
    {
        name: "Ahri",
        splash: "https://i.postimg.cc/kGSzRqBV/Ahri.webp",
        skills: [
            { key: "Q", name: "Orbe da Ilusão", cooldown: 7, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriQ.png" },
            { key: "W", name: "Fogo de Raposa", cooldown: 9, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriW.png" },
            { key: "E", name: "Encanto", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriE.png" },
            { key: "R", name: "Ímpeto Espiritual", cooldown: 130, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriR.png" }
        ]
    },
    {
        name: "Akali",
        splash: "https://i.postimg.cc/rm37pKFX/Akali.webp",
        skills: [
            { key: "Q", name: "Golpe dos cinco pontos", cooldown: 1.5, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliQ.png" },
            { key: "W", name: "Cortina de Fumaça", cooldown: 20, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliW.png" },
            { key: "E", name: "Ataque da Sombra", cooldown: 16, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliE.png" },
            { key: "R", name: "execução perfeita", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliR.png" }
        ]
    },
    {
        name: "Zed",
        splash: "https://i.postimg.cc/mDX65hF1/ZED.webp",
        skills: [
            { key: "Q", name: "Shuriken laminado", cooldown: 6, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedQ.png" },
            { key: "W", name: "Sombra Viva", cooldown: 20, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedW.png" },
            { key: "E", name: "Corte sombrio", cooldown: 5, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedE.png" },
            { key: "R", name: "Marca da Morte", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedR.png" }
        ]
    },
    {
        name: "Lux",
        splash: "https://i.postimg.cc/PqM71SX4/Lux.webp",
        skills: [
            { key: "Q", name: "Ligação da luz", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxLightBinding.png" },
            { key: "W", name: "Barreira prismática", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxPrismaticWave.png" },
            { key: "E", name: "Singularidade lucente", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxLightStrikeKugel.png" },
            { key: "R", name: "Centelha final", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxR.png" }
        ]
    },
    {
        name: "Akshan",
        splash: "https://i.postimg.cc/MKhgwc3y/Akshan.webp",
        skills: [
            { key: "Q", name: "Bumerangue vingativo", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanQ.png" },
            { key: "W", name: "Rebeldia", cooldown: 18, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanW.png" },
            { key: "E", name: "Impulso heórico", cooldown: 18, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanE.png" },
            { key: "R", name: "punição", cooldown: 100, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanR.png" }
        ]
    },
    {
        name: "Anivia",
        splash: "https://i.postimg.cc/1zSTgkQX/Anivia.webp",
        skills: [
            { key: "Q", name: "Lampejo gelado", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/FlashFrost.png" },
            { key: "W", name: "Cristalizar", cooldown: 17, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/Crystallize.png" },
            { key: "E", name: "Congelamento", cooldown: 4, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/Frostbite.png" },
            { key: "R", name: "Tempestade glacial", cooldown: 4, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/GlacialStorm.png" }
        ]
    },
    {
        name: "Aurora",
        splash: "https://i.postimg.cc/rmFPj5zL/Aurora.webp",
        skills: [
            { key: "Q", name: "Feitiço dúplice", cooldown: 9, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraQ.png" },
            { key: "W", name: "Através do véu", cooldown: 22, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraW.png" },
            { key: "E", name: "Estranheza", cooldown: 15, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraE.png" },
            { key: "R", name: "Entre mundos", cooldown: 140, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraR.png" }
        ]
    },
    {
        name: "Katarina",
        splash: "https://i.postimg.cc/Qd1wdXvv/Kat.webp",
        skills: [
            { key: "Q", name: "lâmina saltitante", cooldown: 11, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaQ.png" },
            { key: "W", name: "preparação", cooldown: 15, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaW.png" },
            { key: "E", name: "shunpo", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaEWrapper.png" },
            { key: "R", name: "lótus da morte", cooldown: 75, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaR.png" }
        ]
    },
    {
        name: "Orianna",
        splash: "https://i.postimg.cc/bv0tF5Vy/Orianna.jpg",
        skills: [
            { key: "Q", name: "Atacar", cooldown: 6, img: "https://ddragon.leagueoflegends.com/cdn/15.19.1/img/spell/OrianaIzunaCommand.png" },
            { key: "W", name: "Pulsar", cooldown: 7, img: "https://ddragon.leagueoflegends.com/cdn/15.19.1/img/spell/OrianaDissonanceCommand.png" },
            { key: "E", name: "Defender", cooldown: 9, img: "https://ddragon.leagueoflegends.com/cdn/15.19.1/img/spell/OrianaRedactCommand.png" },
            { key: "R", name: "Onda de choque", cooldown: 110, img: "https://ddragon.leagueoflegends.com/cdn/15.19.1/img/spell/OrianaDetonateCommand.png" }
        ]
    },
    {
        name: "Syndra",
        splash: "https://i.postimg.cc/8zFkFZwL/Syndra.jpg",
        skills: [
            { key: "Q", name: "Bola de fogo", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/SyndraQ.png" },
            { key: "W", name: "Círculo de energia", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/SyndraW.png" },
            { key: "E", name: "Crescimento de espinhos", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/SyndraE.png" },
            { key: "R", name: "Maldição do caos", cooldown: 90, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/SyndraR.png" }
        ]
    },
    {
        name: "Viktor",
        splash: "https://i.postimg.cc/3xZs8m2P/Viktor.webp",
        skills: [
            { key: "Q", name: "Fogo de artifício", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ViktorQ.png" },
            { key: "W", name: "Círculo de energia", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ViktorW.png" },
            { key: "E", name: "Crescimento de espinhos", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ViktorE.png" },
            { key: "R", name: "Maldição do caos", cooldown: 90, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ViktorR.png" }
        ]
    },
    {
        name: "Veigar",
        splash: "https://i.postimg.cc/QxVB8Z1t/veigar.jpg",
        skills: [
            { key: "Q", name: "Balão de poder", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/VeigarBalefulStrike.png" },
            { key: "W", name: "nome da habilidade desconecido", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/VeigarDarkMatter.png" },
            { key: "E", name: "nome da habilidade desconecido", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/VeigarEventHorizon.png" },
            { key: "R", name: "nome da habilidade desconecido", cooldown: 90, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/VeigarPrimordialBurst.png" }
        ]
    },
    {
        name: "Ziggs",
        splash: "https://i.postimg.cc/3xZs8m2P/Ziggs.webp",
        skills: [
            { key: "Q", name: "Bomba de mão", cooldown: 6, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZiggsQ.png" },
            { key: "W", name: "Bomba de pilha", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZiggsW.png" },
            { key: "E", name: "Bomba de salto", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZiggsE.png" },
            { key: "R", name: "Bomba mega explosiva", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZiggsR.png" }
        ]
    },
    {
        name:"Brand",
        splash: "https://i.postimg.cc/3xZs8m2P/Brand.webp",
        skills: [
            { key: "Q", name: "Bola de fogo", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/BrandQ.png" },
            { key: "W", name: "Círculo de energia", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/BrandW.png" },
            { key: "E", name: "Crescimento de espinhos", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/BrandE.png" },
            { key: "R", name: "Maldição do caos", cooldown: 90, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/BrandR.png" }
        ],
    },
    {
        name:"Annie",
        splash: "https://i.postimg.cc/3xZs8m2P/Annie.jpg",
        skills: [
            { key: "Q", name: "Bola de fogo", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AnnieQ.png" },
            { key: "W", name: "Círculo de energia", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AnnieW.png" },
            { key: "E", name: "Crescimento de espinhos", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AnnieE.png" },
            { key: "R", name: "Maldição do caos", cooldown: 90, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AnnieR.png" }
        ],
    }
];
