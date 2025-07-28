import styles from "@/components/Input/input.module.css";

function Input({ type, placeholder, textAlign, borderColor }) {
  return (
    <>
      <input
        className={styles["input"]}
        type={type}
        placeholder={placeholder}
        style={{
          textAlign: textAlign,
          borderColor: borderColor ? borderColor : "#e0e0e0",
        }}
      />
    </>
  );
}

export default Input;
