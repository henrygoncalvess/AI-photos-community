import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function UpdatedAt() {
  const { isLoading, data } = useSWR(
    `${import.meta.env.VITE_BACK_END_ROUTE}/api/v1/status`,
    fetchAPI,
    { refreshInterval: 5000 }
  );

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-br");
  }

  return (
    <>
      <div>
        <b>Última atualização:</b> {updatedAtText}
      </div>
    </>
  );
}

function Database() {
  const { isLoading, data } = useSWR(
    `${import.meta.env.VITE_BACK_END_ROUTE}/api/v1/status`,
    fetchAPI,
    { refreshInterval: 5000 }
  );

  const styles = { marginLeft: "20px" };

  let databaseText = "Carregando...";

  if (!isLoading && data) {
    databaseText = (
      <>
        <p style={styles}>
          <b>Versão:</b> {data.dependencies.database.version}
        </p>
        <p style={styles}>
          <b>Conexões máximas:</b> {data.dependencies.database.max_connections}
        </p>
        <p style={styles}>
          <b>Conexões usadas:</b>{" "}
          {data.dependencies.database.opened_connections}
        </p>
      </>
    );
  }

  return (
    <>
      <div style={styles}>
        <b>Banco de Dados:</b> {databaseText}
      </div>
    </>
  );
}

function Status() {
  return (
    <>
      <UpdatedAt />
      <b>Dependências:</b>
      <Database />
    </>
  );
}

export default Status;
