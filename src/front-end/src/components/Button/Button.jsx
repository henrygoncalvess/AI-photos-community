import styles from "@/components/Button/button.module.css";

function Button({ type, children, additionalStyles }) {
  const optionalStyles = additionalStyles;

  return (
    <>
      <button style={optionalStyles} className={styles["button"]} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
