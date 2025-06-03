export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://danielmlc.top',
    title: 'Danielmlc',
    logo: {
        src: '/favicon.ico',
    },
    subtitle: 'daniel的博客',
    description: '记录工作、生活、学习，分享技术、生活、感悟，有感而发，一起交流！',
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '项目',
            href: '/projects'
        },
        {
            text: '博客',
            href: '/blog'
        },
        {
            text: '分类',
            href: '/tags'
        }
    ],
    footerNavLinks: [
         {
            text: '关于我',
            href: '/about'
        },
        {
            text: '联系',
            href: '/contact'
        },
        {
            text: '团队',
            href: '/terms'
        }
    ],
    socialLinks: [
       {
            text: 'github',
            href: 'https://github.com/danielmlc'
        },
        {
            text: 'bilibili',
            href: 'https://space.bilibili.com/374721744/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **danielmlc**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '/hero.png',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
