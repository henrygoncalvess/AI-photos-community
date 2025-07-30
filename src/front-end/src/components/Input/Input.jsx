import styles from "@/components/Input/input.module.css";
import InputAlert from "@/components/InputAlert/InputAlert";
import { useState } from "react";

function Input({ type, placeholder, textAlign, borderColor, id }) {
  const [inputValue, setinputValue] = useState("");

  return (
    <>
      {id == "request" ? (
        <input
          className={styles["input"]}
          type={type}
          style={{
            textAlign: textAlign,
            borderColor: borderColor ? borderColor : "#e0e0e0",
          }}
          placeholder={placeholder}
          onChange={(event) => setinputValue(event.target.value)}
          value={inputValue}
        />
      ) : (
        <div className={styles["input-section"]}>
          <p className={styles["legend"]}>{placeholder}</p>
          <input
            className={styles["input"]}
            type={type}
            style={{
              textAlign: textAlign,
              borderColor: borderColor ? borderColor : "#e0e0e0",
            }}
            onChange={(event) => setinputValue(event.target.value)}
            value={inputValue}
          />
        </div>
      )}

      {id == "username" &&
        typeof inputValue === "string" &&
        inputValue.length > 0 && (
          <div className="alertSection">
            <InputAlert
              id={id}
              inputValue={inputValue}
              instructionsMsg={"ATENÇÃO! O Apelido deve conter no mínimo:"}
            />
          </div>
        )}
      {id == "email" &&
        typeof inputValue === "string" &&
        inputValue.length > 0 && (
          <div className="alertSection">
            <InputAlert
              id={id}
              inputValue={inputValue}
              instructionsMsg={"ATENÇÃO!"}
            />
          </div>
        )}
      {id == "password" &&
        typeof inputValue === "string" &&
        inputValue.length > 0 && (
          <div className="alertSection">
            <InputAlert
              id={id}
              inputValue={inputValue}
              instructionsMsg={"ATENÇÃO! A senha deve conter no mínimo:"}
            />
          </div>
        )}
    </>
  );
}

export default Input;
