import icon from "/img/icon-list.svg";
import illustration from "/img/illustration-sign-up-desktop.svg";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSucess("");
    if (!isValidEmail(email)) {
      setError("valid email required");
    } else {
      setError("");
      setSucess("good");
      console.log("Subscribed", email);
    }
  }

  return (
    <>
      {/* Conteneur principal en pleine hauteur de l'écran avec fond bleu */}
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#36384E" }}>

        {/* Boîte centrale blanche contenant le contenu et l’image, avec padding, bord arrondi et ombre */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full flex flex-col md:flex-row gap-10">

          {/* Partie gauche : le texte et le formulaire */}
          <div className="flex-1 space-y-4">
            {/* Titre principal */}
            <h1 className="text-3xl font-bold text-gray-800">Stay updated</h1>

            {/* Paragraphe d’introduction */}
            <p className="text-gray-600">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            {/* Liste des avantages (avec icônes) */}
            <ul className="space-y-2">
              {/* Élément 1 */}
              <li className="flex items-start gap-2">
                <img src={icon} alt="check" />
                <span>Product discovery and building what matters</span>
              </li>
              {/* Élément 2 */}
              <li className="flex items-start gap-2">
                <img src={icon} alt="check" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              {/* Élément 3 */}
              <li className="flex items-start gap-2">
                <img src={icon} alt="check" />
                <span>And much more!</span>
              </li>
            </ul>

            {/* Formulaire d'inscription */}
            <div className="mt-4 space-y-2">
              {/* Champ email */}
              <form onSubmit={handleSubmit} className="space-y-2 mt-4">
                <label className="block text-sm font-medium text-gray-800">
                  Email address
                </label>
                <input
                  type="text"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${error 
                  ? "border-red-500 bg-red-100 text-red-700 placeholder-red-400 focus:ring-red-400" 
                  : "border-gray-300"
                }`}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                {sucess && <p className="text-green-500 text-sm mt-1">{sucess}</p>}

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-semibold py-2 rounded-md hover:bg-white hover:text-gray-800 hover:border-2 hover:border-gray-800 transition"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>

          {/* Partie droite : illustration affichée uniquement à partir de l’écran md (tablette et plus) */}
          <div className="flex-1 hidden md:block">
            <img
              src={illustration}
              alt="illustration"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
