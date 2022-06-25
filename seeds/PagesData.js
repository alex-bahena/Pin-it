const { Pages } = require('../models');

const pagesData = [
    {
        name: 'Amazon',
        url: 'https://amazon.com.mx/',
        category_id: '4',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/ceff70b83750f7f725afea17e338f4e2_1606224512.png',
    },
    {
        name: 'Gmail',
        url: 'https://mail.google.com/mail/u/0/?tab=wm#inbox',
        category_id: '1',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/896dadd7f62a3a4d8fe8b9ef4d292c9c_9953834607.png',
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        category_id: '3',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/d4dfe2317e1a9558fb42f59bb9e42fac_4620162588.png',
    },
    {
        name: 'Google-drive',
        url: 'https://drive.google.com/drive/u/0/my-drive',
        category_id: '5',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/46f8ac70cc34b36077649fb996c5a69e_9010560935.png',
    },
    {
        name: 'Facebook',
        url: 'https://es-la.facebook.com/',
        category_id: '2',
        img: 'https://icon-library.com/images/facebook-app-icon-transparent/facebook-app-icon-transparent-21.jpg',
    },
    {
        name: 'Instragram',
        url: 'https://www.instagram.com/',
        category_id: '2',
        img: '	https://vectruploadedfiles.s3.amazonaws.com/f57e53b456ae1319ced5537a9bfde9c1_8127326415.png',
    },
    {
        name: 'Mercado-libre',
        url: 'https://www.mercadolibre.com.mx/',
        category_id: '4',
        img: 'https://http2.mlstatic.com/D_NQ_NP932034-MLA41139200997_032020-F.jpg',
    },
    {
        name: 'Google-translate',
        url: 'https://translate.google.com.mx/?hl=es',
        category_id: '5',
        img: 'https://icon-library.com/images/icon-translate/icon-translate-6.jpg',
    },
    {
        name: 'Whatsapp',
        url: 'https://web.whatsapp.com/',
        category_id: '2',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/1433767d2d77e47656487eb7fb762355_3018242704.png',
    },
    {
        name: 'Outlook',
        url: 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1655256679&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3df7724669-9a5f-df25-f8eb-a128210865c5&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015',
        category_id: '1',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/6aa550d5c26f6112ac3f652d2940df72_2109901683.png',
    },
    {
        name: 'Github',
        url: 'https://icon-library.com/images/github-icon-png/github-icon-png-5.jpg',
        category_id: '5',
        img: 'https://www.svgrepo.com/show/303615/github-icon-1-logo.svg',
    },
    {
        name: 'Udemy',
        url: 'https://www.udemy.com/home/my-courses/learning/',
        category_id: '5',
        img: 'https://voidrealms.com/wp-content/uploads/2021/12/nxZY4zVv.png',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin',
        category_id: '1',
        img: 'https://vectruploadedfiles.s3.amazonaws.com/dfca08c8bbbb1946d1a4d2d5dad1b38f_8442238456.png',
    }
];


const seedPages = () => Pages.bulkCreate(pagesData);

module.exports = seedPages;