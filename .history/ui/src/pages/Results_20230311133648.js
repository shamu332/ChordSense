import Header from "../Header";

function Results() {
  const data = localStorage.getItem("results");
  localStorage.clear(); //clean the localstorage
  const waitTime = JSON.parse(data).wait_time;
  const ipAddress = JSON.parse(data).ip_address;
  const openedPorts = JSON.parse(data).ports_opened;
  const ports = [];

  openedPorts.forEach((port) => {
    ports.push(
      <p
        onClick={() =>
          window.open(`https://www.google.com/search?q=port+${port}`)
        }
        style={{
          border: "solid 3px #4D545E",
          textAlign: "center",
          width: "100%",
          height: "4vh",
          fontSize: "190%",
        }}
      >
        {port}
      </p>
    );
  });

  const statement = `Scanning of IP: ${ipAddress} took ${waitTime} seconds`;
  return (
    <>
      <Header />
      <p style={{ textAlign: "center", fontSize: "140%" }}>{statement}</p>
      <p>*Click on some of the ports to find out more about them</p>
      <div>{ports}</div>
    </>
  );
}

export default Results;
