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
    name?: string;
    avatar?: Image;
    bio?: string;
    weatherCity?: string;
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
    newsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://danielmlc.top',
    title: '神的孩子在跳舞',
    logo: {
        src: '/favicon.svg',
    },
    subtitle: 'daniel的博客',
    description: '记录工作、生活、学习，分享技术、生活、感悟，有感而发，一起交流！',
    headerNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '文章',
            href: '/blog'
        },
        {
            text: '资讯',
            href: '/news'
        },
        {
            text: '项目',
            href: '/projects'
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
            text: 'RSS 订阅',
            href: '/rss.xml'
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
        name: 'danielmlc的博客',
        avatar: {
            src: '/hero.png',
            alt: 'danielmlc 的头像'
        },
        bio: '一个热爱技术与生活的开发者，记录工作、学习与日常的点滴。',
        weatherCity: '西安'
    },
    subscribe: {
        title: '订阅博客更新',
        text: '第一时间获取我的最新文章与动态，通过邮箱推送。',
        formUrl: '#'
    },
    postsPerPage: 8,
    newsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
