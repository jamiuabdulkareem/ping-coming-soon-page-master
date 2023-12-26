function App() {
  return (
    <div className="w-1/2  m-auto text-center pt-10">
      <div className="flex items-center justify-center">
        <img src="./images/logo.svg" />
      </div>
      <h1 className="text-3xl text-grey-100 font-light mt-5 mb-2">
        We are launching <span className="text-grey-200 font-bold">soon!</span>
      </h1>
      <p className="text-sm mb-4">Subscribe and get notified</p>
      <form>
        <input
          type="text"
          placeholder="Your email address..."
          className="border-secondary-100 focus:outline-none border-2 py-2 px-4 rounded-full mb-20 focus:ring-secondary-100 ring-1 mr-3"
        />
        <button>Notify Me</button>
      </form>
      <div>
        <img src="./images/illustration-dashboard.png" />
      </div>
      
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20">
      <p className="text-grey-100 text-sm">&copy; Copyright Ping. All rights reserved.</p>
      <p className="text-sm">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jamiu Abdulkareem</a>.
      </p>
    </footer>
  );
}

export default App;
