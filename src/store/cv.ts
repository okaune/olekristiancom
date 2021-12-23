export interface cv {
    education: {
        title: string;
        description: string;
        location: string;
        period: string;
    }[];
    experience: {
        title: string;
        location: string;
        description: string;
        period: string;
    }[];
    involvement: {
        title: string;
        period: string;
    }[];
    technologies: string[];
    languages: string[];
}

export default {
    education: [
        {
            title: 'Norges Teknisk-Naturvitenskapelige Universitet',
            description: 'Datateknologi, Master',
            location: 'Trondheim',
            period: '2018-2020',
        },
        {
            title: 'Norges Teknisk-Naturvitenskapelige Universitet',
            description: 'Dataingeniør, Bachelor',
            location: 'Trondheim',
            period: '2015-2018',
        },
        {
            title: 'Romerike Folkehøgskole',
            description: 'Lysdesign',
            location: 'Jessheim',
            period: '2014-2015',
        },
        {
            title: 'Nadderud videregående skole',
            description: 'Realfag',
            location: 'Bekkestua',
            period: '2011-2014',
        },
    ],
    experience: [
        {
            title: 'Konsulent',
            location: 'Kantega',
            description: 'Tech lead hos Kantega Single Sign-on.',
            period: '2018-nå',
        },
        {
            title: 'Webutvikler',
            location: 'Ludens Reklamebyrå',
            description:
                'Sommerjobb hver sommer fra 2012 til og med 2018, i tillegg til deltid i perioden september 2012 - desember 2013. Arbeidsoppgaver gikk i utvikling av nettsider for kunder, ved hjelp teknologiene PHP, JavaScript (ES2015), CSS (SCSS), HTML5 mm.',
            period: '2012-2018',
        },
        {
            title: 'Lysdesigner',
            location: 'Asker Kulturhus',
            description:
                'Lyssetting av nattevandring under Asker Kulturfestival. Her var det opprigg og nedrigg av lyssetting av flere kulturelle innslag - fra kor og dans til musikere og diktlesere langs en løype rundt Semsvann.',
            period: 'Mai 2015',
        },
        {
            title: 'Ekstrahjelp salg',
            location: 'Volvat Medisinske Senter',
            description:
                'Utarbeidet salgspresentasjon for bruk til innsalg av bedriftstjenester. Krav om at presentasjonen skulle kunne brukes til alle typer innsalg, og det ble løst ved å legge inn lenker i presentasjonen så man kunne gå grundigere inn på temaer som var mest relevante for den enkelte bedrift.',
            period: 'Sommer 2009',
        },
    ],
    involvement: [
        {
            title:
                'Promoteringsansvarlig (Styreverv) i Sukkerhuset Kjeller & Scene',
            period: '2015-2017, 2019-2020',
        },
        {
            title: 'Promoteringsansvarlig (Styreverv) i TIHLDE Linjeforening',
            period: '2017',
        },
        {
            title: 'Promotering- og webansvarlig for Nadderudrevyen',
            period: '2013-2014',
        },
    ],
    technologies: [
        'Java',
        'CSS/SCSS',
        'JavaScript',
        'React',
        'NodeJS',
        'Redux',
        'HTML',
        'WordPress/PHP',
        'C++*',
        'Python*',
        'Photoshop/Illustrator',
        'Versjonskontroll (Git)',
        'Responsivt Design',
        'Agile Metoder',
        'Mob-programmering',
        'Velocity',
        'Atlassian Jira',
        'Atlassian Confluence',
        'Atlassian Bitbucket'
    ],
    languages: ['Norsk (Bokmål)', 'Engelsk'],
};
