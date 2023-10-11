import self from "../img/self.png"
import mock1 from "../img/mock1.png"

export let colors = ["rgb(46, 95, 167)", "rgb(22, 45, 80)"];


export const info = {
    firstName: "Clément",
    lastName: "BIlliot",
    initials: "cb",
    position: "a Data Scientist",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🌎',
            text: 'based in France'
        },
        {
            emoji: "💼",
            text: "Data Scientist at Operanka Associates"
        },
        {
            emoji: "📧",
            text: "clement.billiot@hyrlink.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Moumovs",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/clément-billiot-3084078b",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: [
        "Hello! I'm Clément.",
        "A data scientist becoming a machine learning engineer.",
        "You should hire me!"
    ],
    skills:
        {
            proficientWith: ['python', 'git', 'docker', 'kubernetes', 'AWS'],
            exposedTo: ['GCS', 'blender', 'gimp', 'javascript', 'Agile']
        }
    ,
    hobbies: [
        {
            label: 'Reading',
            emoji: '📘'
        },
        {
            label: 'Cooking',
            emoji: '🍳'
        },
        {
            label: 'Plants',
            emoji: '🪴'
        },
        {
            label: '3D Printing',
            emoji: '🖨️'
        },
        {
            label: 'Mechanical Keyboard',
            emoji: '⌨️'
        },

    ],
    portfolio: [ 
        {
            title: "Portfolio",
            live: "https://me.hyrlink.com", 
            source: "https://github.com/Moumovs/moumovs.github.io", 
            image: mock1
        }
    ]
}