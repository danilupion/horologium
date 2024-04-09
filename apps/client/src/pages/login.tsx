export default function Login() {
  return (
    <>
      <h1>Horologium Client Login</h1>
    </>
  );
}

export async function getServerSideProps() {
  const test = Date.now() % 2 === 0 ? [1, 2, 3] : [1, 2, 3, 4];
  return {
    props: {
      test,
    },
  };
}
