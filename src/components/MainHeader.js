const divStyle1 = {
  backgroundPosition: "50%",
  backgroundImage:
    "url(  https://automatisme-pics.s3.eu-west-3.amazonaws.com/photo-portail-automatique.jpg  )",
  height: "350px",
};

const divStyle2 = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const MainHeader = () => {
  return (
    <header>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={divStyle1}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={divStyle2}
        >
          <img
            src="https://automatisme-pics.s3.eu-west-3.amazonaws.com/Logo-CAME.png"
            alt="Logo Came"
            className="absolute pb-5 mt-1 ml-1 h-1/6 w-1/12"
          />
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-6 text-5xl font-bold">BERGER AUTOMATISMES</h1>
              <h3 className="mb-8 text-3xl font-bold">
                Installateur expert CAME
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
