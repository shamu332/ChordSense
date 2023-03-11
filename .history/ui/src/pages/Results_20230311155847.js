import Header from "../Header";

function Results() {
  const statement = `Scanning of IP: ${ipAddress} took ${waitTime} seconds`;
  return (
    <>
      <Header />
      <p>Welcome</p>
    </>
  );
}

export default Results;
