const ENTRIES = [
    {
        dates: '5/2020 - 10/2023',
        location: 'Nashville, TN',
        name: 'High Tide Technologies',
        position: 'Senior Software Engineer',
        tech: [ 
            { icon: 'javascript', name: 'JavaScript', link: 'javascript.com' },
            { icon: 'typescript', name: 'TypeScript', link: 'typescriptlang.org' },
            { icon: 'svelte', name: 'Svelte JS', link: 'svelte.dev' },
            { icon: 'ember', name: 'Ember JS', link: 'emberjs.com' },
            { icon: 'html5', name: 'HTML5', link: 'developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
            { icon: 'css3', name: 'CSS3', link: 'developer.mozilla.org/en-US/docs/Web/CSS' },
            { icon: 'storybook', name: 'Storybook', link: 'storybook.js.org' },
            { icon: 'rails', name: 'Ruby on Rails', link: 'rubyonrails.org' },
            { icon: 'graphql', name: 'GraphQL', link: 'graphql.org' },
            { icon: 'mysql', name: 'MySQL', link: 'mysql.com' },
            { icon: 'amazonwebservices', name: 'AWS', link: 'aws.amazon.com' },
            { icon: 'github', name: 'Github', link: 'github.com' },
            { icon: 'jira', name: 'Jira', link: 'atlassian.com/software/jira' },
            { icon: 'figma', name: 'Figma', link: 'figma.com' }
        ]
    },
    {
        dates: '5/2018 - 8/2019',
        location: 'San Francisco, CA',
        name: 'CodeREV & Education Unlimited',
        position: 'Director & Web Instructor',
        tech: [
            { icon: 'javascript', name: 'JavaScript', link: 'javascript.com' },
            { icon: 'html5', name: 'HTML5', link: 'developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
            { icon: 'css3', name: 'CSS3', link: 'developer.mozilla.org/en-US/docs/Web/CSS' },
            { icon: 'jquery', name: 'jQuery', link: 'jquery.com' },
            { icon: 'java', name: 'Java', link: 'java.com' },
            { icon: 'lua', name: 'Lua', link: 'lua.org' },
            { icon: 'github', name: 'Github', link: 'github.com' },
            { icon: 'git', name: 'Git', link: 'git-scm.com' }
        ],
    },
    {
        dates: '10/2018 - 4/2019',
        location: 'San Francisco, CA',
        name: 'Afterpay Touch US',
        position: 'Software Engineer',
        tech: [ 
            { icon: 'javascript', name: 'JavaScript', link: 'javascript.com' },
            { icon: 'typescript', name: 'TypeScript', link: 'typescriptlang.org' },
            { icon: 'react', name: 'React JS', link: 'react.dev' },
            { icon: 'redux', name: 'Redux', link: 'redux.js.org' },
            { icon: 'html5', name: 'HTML5', link: 'developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
            { icon: 'css3', name: 'CSS3', link: 'developer.mozilla.org/en-US/docs/Web/CSS' },
            { icon: 'jquery', name: 'jQuery', link: 'jquery.com' },
            { icon: 'nodejs', name: 'NodeJS', link: 'nodejs.org/en' },
            { icon: 'mysql', name: 'MySQL', link: 'mysql.com' },
            { icon: 'github', name: 'Github', link: 'github.com' },
            { icon: 'wordpress', name: 'Wordpress', link: 'wordpress.com' },
            { icon: 'woocommerce', name: 'WooCommerce', link: 'wordpress.com' }
        ],
    },
    {
        dates: '11/2017 – 2/2018',
        location: 'San Francisco, CA',
        name: 'Castlight Health',
        position: 'Implementation Support Engineer',
        tech: [ 
            { icon: 'nodejs', name: 'NodeJS', link: 'nodejs.org/en' },
            { icon: 'rails', name: 'Ruby on Rails', link: 'rubyonrails.org' },
            { icon: 'postgresql', name: 'PostgreSQL', link: 'postgresql.org' },
            { icon: 'jira', name: 'Jira', link: 'atlassian.com/software/jira' }
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