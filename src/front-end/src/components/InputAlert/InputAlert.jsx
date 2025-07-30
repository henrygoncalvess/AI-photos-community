import styles from "@/components/InputAlert/inputAlert.module.css";

function InputAlert({ inputValue, instructionsMsg, id }) {
  const classValid = `${styles["inputAlert"]} ${styles["valid"]}`;
  const classInvalid = `${styles["inputAlert"]} ${styles["invalid"]}`;

  switch (id) {
    case "username":
      return (
        <>
          <p className={styles["instructions"]}>{instructionsMsg}</p>
          <p className={/.{2}/.test(inputValue) ? classValid : classInvalid}>
            &bull; 2 caracteres
          </p>
        </>
      );

    case "email":
      return (
        <>
          <p className={styles["instructions"]}>{instructionsMsg}</p>
          <p
            className={
              /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
                inputValue
              )
                ? classValid
                : classInvalid
            }
          >
            &bull; Informe um Email válido
          </p>
        </>
      );

    case "password":
      return (
        <>
          <p className={styles["instructions"]}>{instructionsMsg}</p>
          <p
            className={
              /[!@#$%^&*.()]/.test(inputValue) ? classValid : classInvalid
            }
          >
            &bull; 1 caractere especial{" "}
            <b style={{ fontSize: "1.1em" }}>{"!@#$%^&*.()"}</b>
          </p>
          <p className={/[A-Z]/.test(inputValue) ? classValid : classInvalid}>
            &bull; 1 Letra maiúscula A-Z
          </p>
          <p className={/[a-z]/.test(inputValue) ? classValid : classInvalid}>
            &bull; 1 Letra minúscula a-z
          </p>
          <p className={/[0-9]/.test(inputValue) ? classValid : classInvalid}>
            &bull; 1 Número 0-9
          </p>
          <p className={inputValue.length >= 8 ? classValid : classInvalid}>
            &bull; 8 caracteres
          </p>
        </>
      );
  }
}

export default InputAlert;
