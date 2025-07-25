import "@/css/global.css";
import styles from "@/components/PageMsgError/pagemsgerror.module.css";
import Footer from "@/components/Footer/Footer";

function PageMsgError({ iconName, titleMsg, children }) {
  return (
    <>
      <div className="error-body">
        <div className={"container"}>
          <div className={styles["content"]}>
            <h1 className={styles["h1-container"]}>
              <span className={`material-symbols-outlined ${styles["icon"]}`}>
                {iconName}
              </span>{" "}
              {titleMsg}
            </h1>
            {children}
          </div>
          <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
        </div>
      </div>
    </>
  );
}

export default PageMsgError;
