const initialState = {
  education: [
    {
      title: 'Norges Teknisk-Naturvitenskapelige Universitet',
      description: 'Datateknologi, Master',
      location: 'Trondheim',
      period: '2018-nå'
    },
    {
      title: 'Norges Teknisk-Naturvitenskapelige Universitet',
      description: 'Dataingeniør, Bachelor',
      location: 'Trondheim',
      period: '2015-2018'
    },
    {
      title: 'Romerike Folkehøgskole',
      description: 'Lysdesign',
      location: 'Jessheim',
      period: '2014-2015'
    },
    {
      title: 'Nadderud videregående skole',
      description: 'Realfag',
      location: 'Bekkestua',
      period: '2011-2014'
    }
  ],
  experience: [
    {
      title: 'Konsulent',
      location: 'Kantega',
      description: 'Full-stack utvikler på Kantega Singe Sign-on.',
      period: '2018-nå'
    },
    {
      title: 'Webutvikler',
      location: 'Ludens Reklamebyrå',
      description: 'Sommerjobb hver sommer fra 2012 til og med 2018, i tillegg til deltid i perioden september 2012 - desember 2013. Arbeidsoppgaver gikk i utvikling av nettsider for kunder, ved hjelp teknologiene PHP, JavaScript (ES2015), CSS (SCSS), HTML5 mm.',
      period: '2012-2018'
    },
    {
      title: 'Lysdesigner',
      location: 'Asker Kulturhus',
      description: 'Lyssetting av nattevandring under Asker Kulturfestival. Her var det opprigg og nedrigg av lyssetting av flere kulturelle innslag - fra kor og dans til musikere og diktlesere langs en løype rundt Semsvann.',
      period: 'Mai 2015'
    },
    {
      title: 'Ekstrahjelp salg',
      location: 'Volvat Medisinske Senter',
      description: 'Utarbeidet salgspresentasjon for bruk til innsalg av bedriftstjenester. Krav om at presentasjonen skulle kunne brukes til alle typer innsalg, og det ble løst ved å legge inn lenker i presentasjonen så man kunne gå grundigere inn på temaer som var mest relevante for den enkelte bedrift.',
      period: 'Sommer 2009'
    }
  ],
  involvement: [
    {
      title: 'Promoteringsansvarlig (Styreverv) i TIHLDE Linjeforening',
      period: '2017'
    },
    {
      title: 'Promoteringsansvarlig (Styreverv) i Sukkerhuset Kjeller & Scene',
      period: '2015-2017'
    },
    {
      title: 'Promotering- og webansvarlig for Nadderudrevyen',
      period: '2013-2014'
    }
  ],
  technologies: [
    'Java', 'CSS3/SCSS', 'HTML5', 'JavaScript/ES6', 'jQuery', 'WordPress/PHP',
    'React', 'Redux', 'C++*', 'Python*', 'Photoshop/Illustrator',
    'Versjonskontroll (Git)', 'Responsivt Design', 'Agile Metoder', 'Mob-programmering'
  ],
  languages: ['Norsk (Bokmål)', 'Engelsk']
};

const cvReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state
  }
};

export default cvReducer;
