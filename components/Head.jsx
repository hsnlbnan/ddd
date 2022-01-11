import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="23 yaşında Ege Üniversitesi Matematik bölümü okuyan bir gencin yazılım yolculuğu"
      />
      <meta
        name="keywords"
        content="Hüsnü Lübnan, Hüsnü, freelance frontend developer, web developer portfolio, hüsnü lübnan web developer, js developer, ideasoft tema, Hüsnü Lübnan portfolio, agesoft demo, qukasoft tema, ticimax tema, ideasoft özel tasarım"
      />
      <meta property="og:title" content="Hüsnü Lübnan's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://i.imgur.com/zchpjoq.png" />
      <meta property="og:url" content="https://husnu.kim" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Hüsnü Lübnan',
};
