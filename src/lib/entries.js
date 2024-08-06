const ENTRIES = [
    {
        dates: '5/2020 - 10/2023',
        location: 'Nashville, TN',
        name: 'High Tide Technologies',
        position: 'Senior Software Engineer',
        tech: [ 
            { icon: 'javascript', name: 'JavaScript' },
            { icon: 'typescript', name: 'TypeScript' },
            { icon: 'svelte', name: 'Svelte JS' },
            { icon: 'ember', name: 'Ember JS' },
            { icon: 'html5', name: 'HTML5' },
            { icon: 'css3', name: 'CSS3' },
            { icon: 'storybook', name: 'Storybook' },
            { icon: 'rails', name: 'Rails' },
            { icon: 'graphql', name: 'GraphQL' },
            { icon: 'mysql', name: 'MySQL' },
            { icon: 'amazonwebservices', name: 'AWS / Timestream DB' },
            { icon: 'github', name: 'Github' },
            { icon: 'jira', name: 'Jira' },
            { icon: 'figma', name: 'Figma' },
        ]
    },
    {
        dates: '5/2018 - 8/2019',
        location: 'San Francisco, CA',
        name: 'CodeREV & Education Unlimited',
        position: 'Director & Web Instructor',
        tech: [
            { icon: 'javascript', name: 'JavaScript' },
            { icon: 'java', name: 'Java' },
            { icon: 'lua', name: 'Lua' },
            { icon: 'html5', name: 'HTML5' },
            { icon: 'css3', name: 'CSS3' },
            { icon: 'git', name: 'Git' },
            { icon: 'github', name: 'Github' },
            { icon: 'jquery', name: 'jQuery '}
        ],
    },
    {
        dates: '10/2018 - 4/2019',
        location: 'San Francisco, CA',
        name: 'Afterpay Touch US',
        position: 'Software Engineer',
        tech: [
            { icon: 'javascript', name: 'JavaScript' },
            { icon: 'typescript', name: 'TypeScript' },
            { icon: 'react', name: 'React JS' },
            { icon: 'Redux', name: 'Redux' },
            { icon: 'html5', name: 'HTML5' },
            { icon: 'css3', name: 'CSS3' },
            { icon: 'github', name: 'Github' },
            { icon: 'jquery', name: 'jQuery '},
            { icon: 'nodejs', name: 'Node.js' },
            { icon: 'mysql', name: 'MySQL' },
            { icon: 'wordpress', name: 'Wordpress' },
            { icon: 'woocommerce', name: 'WooCommerce' },
        ],
    },
    {
        dates: '11/2017 – 2/2018',
        location: 'San Francisco, CA',
        name: 'Castlight Health',
        position: 'Implementation Support Engineer',
        tech: [
            { icon: 'nodejs', name: 'Node.js' },
            { icon: 'postgresql', name: 'PostgreSQL' },
            { icon: 'jira', name: 'Jira' },
        ],
    },
    {
        dates: '7/2017 – 10/2017',
        location: 'San Francisco, CA',
        name: 'Fitbit',
        position: 'Associate Test Engineer',
    },
]

    // DATA FORMAT (* = optional):
    //  [...
    //  {
    //    icon: String,
    //    dates: String,
    //    location: String,
    //    name: String,
    //    notes: [String],
    //    position: String,
    //    tech: [Object],
    //  },
    //  ...]

export default ENTRIES;