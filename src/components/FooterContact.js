const FooterContact = () => {
  return (
    <footer className="bg-black text-white py-5">
      <h1 className=" text-center text-6xl">Nous contacter</h1>
      <div className="flex flex-row justify-center text-center space-x-96 mt-10">
        <div>
          <h2 className="text-5xl">Téléphone:</h2>
          <p className="text-3xl mt-5">06 18 94 62 07</p>
        </div>
        <div>
          <h2 className="text-5xl">Mail:</h2>
          <p className="text-3xl mt-5">automatismes.berger@hotmail.fr</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
