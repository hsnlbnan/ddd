import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

const ProjectsPage = () => {
  return (
    <>
      <h5>Daha yolun başında sayılırım.</h5>
      <br />
      <h6>
        bulunduğum şirkette ideasoft, ticimax, t-soft, qukasoft, agesoft,
        shopify gibi e-ticaret sitelerinin tema özelleştirilmelerinde ve anahtar
        teslim dediğimiz tema yapım işlerinde görev alıyorum.
      </h6>
      <br />
      <h6>
        genel olarak bu gün içerisinde ve günaşırı bu işlerle uğraştığım için
        genel olarak bilgim o yönde fakat frontend dünyası her geçen gün
        yenilenirken, kendimi bu okyanusta yüzmeye hazırlıyorum.
      </h6>
      <br />
      <h6>
        projelerde hep "onu da yapalım mı?, bunu böyle yapsak mı ki?" diyen
        Juniorlardan biriyim.
      </h6>
      <br />
      <h6>
        yapalım dersen belki yapmam uzun sürer ama bir yolunu bulup yapmaya
        çabalarım.
      </h6>
      <br />
      <h4>
        <span className={styles.hightlight}>geleceğe not: </span>belki şu an
        hazır balıkları pişirip servis ediyorum fakat oltayı yaptığım günlerde
        gelecek:)
      </h4>
      <br />
      <div className={styles.container}>
        <span className={styles.cta}>
          <h5>HTML5:</h5>
          <ProgressBar completed={80} bgColor="#e44d27" width="50%" />
        </span>
        <span className={styles.cta}>
          <h5>CSS3:</h5>
          <ProgressBar completed={91} bgColor="#2e45dc" width="50%" />
        </span>
        <span className={styles.cta}>
          <h5>JavaScript:</h5>
          <ProgressBar completed={43} bgColor="#ffca29" width="50%" />
        </span>
        <span className={styles.cta}>
          <h5>jQuery:</h5>
          <ProgressBar completed={37} bgColor="#2d66a7" width="50%" />
        </span>
        <span className={styles.cta}>
          <h5>React:</h5>
          <ProgressBar completed={60} bgColor="#09b2c9" width="50%" />
        </span>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Neler yapabilirim?" },
  };
}

export default ProjectsPage;
