import styles from "../styles/about.module.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const AboutPage = () => {
  const DEFAULT_VALUE = `
  <ul>
  <li className={styles.listClass}><br>
     <h2>Appricot Software Agency</h2><br>
     <h4>Frontend Developer</h4><br>
     <p>22 Mart 2022 - Devam Ediyor</p><br>
 </li><br>
 <li className={styles.listClass}><br>
 <h2>AgeSoft Software | Yeni Nesil E-Ticaret Sistemleri</h2><br>
 <h4>Frontend Developer</h4><br>
 <p>12 Kasım 2021 - 22 Mart 2022</p><br>
</li><br>
 <li className={styles.listClass}><br>
     <h2>Age Ajans 360 Derece E-Ticaret Yönetimi</h2><br>
     <h4>Frontend Developer</h4><br>
     <p>20 Mart 2021 - 12 Kasım 2021</p><br>
 </li><br>
 <li className={styles.listClass}><br>
     <h2>bilethub | bilet devrinin en keyifli hali</h2><br>
     <h4>UX Designer</h4><br>
     <p>12 Kasım 2019 - Devam Ediyor</p><br>
 </li><br>
 <li className={styles.listClass}><br>
     <h2>izmir fırça </h2><br>
     <h4>Sosyal Medya Yöneticisi</h4><br>
     <p>12 Aralık 2018 - 16 Mart 2019 </p><br>
 </li><br>
</ul>`;

  return (
    <>
      <h3>Kısaca ben</h3>
      <p>
        21 Nisan 1998 doğumlu, aslen Afyonkarahisarlı fakat son 2 senedir
        İzmir'de hem okuyup hem çalışan. Özünde grafiker olarak başlayıp
        yazılımcı olma macerası sürdüren, aklında bir sürü plan olup sonsuza dek
        kendini geliştirmeye çalışan, uçuk kaçık fikirleri olsa da henüz
        gerçekleştiremeyen fakat gerçekleştirmek için elinden geleni yapan
        kişi:)
      </p>

      <h3 className={styles.hightlight}>
        Nerelerde Çalıştım veya Çalışıyorum?
      </h3>

      <Editor
        height="90vh"
        width="100%"
        defaultLanguage="html"
        model="null"
        options={{
          wordWrap: true,
        }}
        defaultValue={DEFAULT_VALUE}
      />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Hakkımda" },
  };
}

export default AboutPage;
