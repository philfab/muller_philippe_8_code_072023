import styles from "./HostInfo.module.css";

function HostInfo({host}) {
    const [firstName, lastName] = host.name.split(" ");

    const handleError = (e) => {
        e.target.style.display = "none";
      };
      
  return (
    <aside className={styles.hostInfo}>
      <div className={styles.hostName}>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img
        className={styles.picture}
        src={host.picture}
        alt=""
        onError={handleError}  // Appelle handleError en cas d'erreur de chargement de l'image
      />
    </aside>
  );
}

export default HostInfo;
