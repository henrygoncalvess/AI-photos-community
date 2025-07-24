import styles from "@/components/PageMsgError/pagemsgerror.module.css";
import Footer from "@/components/Footer/Footer";

function PageMsgError({ iconName, h1Msg, children }) {
  return (
    <>
      <div className="error-body">
        <div className={styles["container"]}>
          <h1 className={styles["h1-container"]}>
            <span className={`material-symbols-outlined ${styles["icon"]}`}>
              {iconName}
            </span>{" "}
            {h1Msg}
          </h1>
          {children}
        </div>
        <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
      </div>
    </>
  );
}

export default PageMsgError;
