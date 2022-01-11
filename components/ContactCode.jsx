import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'husnu.site',
    href: 'https://husnu.site',
  },
  {
    social: 'email',
    link: 'hsnlbnan@gmail.com',
    href: 'mailto:hsnlbnan@gmail.com',
  },
  {
    social: 'github',
    link: 'hsnlbnan',
    href: 'https://github.com/hsnlbnan',
  },
  {
    social: 'linkedin',
    link: 'husnulubnan',
    href: 'https://www.linkedin.com/in/hüsnü-lübnan/',
  },
  {
    social: 'twitter',
    link: 'hsnlbnan',
    href: 'https://www.twitter.com/hsnlbnan',
  },
  {
    social: 'instagram',
    link: 'hsnlbnan',
    href: 'https://www.instagram.com/hsnlbnan',
  },

  {
    social: 'whatsapp',
    link: '05532200016',
    href: 'htts://wa.me/905532200016',
  },
  {
    social: 'codepen',
    link: 'hsnlbnan',
    href: 'https://codepen.io/hsnlbnan',
  },
 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>#socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
