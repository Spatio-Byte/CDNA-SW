import './App.css'

function Card({ title, content }) {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{content}</p>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section-by2">
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">{title}</h2>
      <div className="cards p-8 flex justify-center">
        {children}
      </div>
    </section>
  );
}



export default function CDNAHomePage() {
  return (
    <main className="min-h-screen text-black">
      {/* Barre de navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold CDNA">CDNA</h1>
            <img 
              src="/2.png" 
              alt="logo cdna" 
              className="h-10 w-auto ml-2 rounded-full"
            />
          </div>

          <ul className="flex space-x-6 text-black font-medium">
            <li><a href="#presentation" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">Présentation</a></li>
            <li><a href="#services" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">Nos services</a></li>
            <li><a href="#contact" className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">Contact</a></li>
          </ul>
        </div>
      </nav>

      
      {/* Contenu principales avec sections */}
      <div className="content ">
        <section id="presentation" className="">
          <h1 className="text-4xl font-bold text-center mt-20 mb-10">Bienvenue chez CDNA</h1>
          <h2 className='text-3xl font-bold text-center mt-20 mb-10'>Qui sommes nous ?</h2>
          <div className='cards p-8 flex row stretch justify-center'>
            <Card title="Notre But" content="Nous sommes une entreprise spécialisée dans la création de sites web et d'environnement numérique sur mesure, dédiée à fournir des solutions numériques innovantes et sur mesure pour nos clients."/>
            <Card title="Notre équipe" content="Notre équipe est composée de professionnels passionnés et expérimentés, prêts à relever tous les défis numériques pour offrir des résultats exceptionnels." /> 
            <Card title="Notre mission" content="Notre mission est de transformer les idées en expériences numériques exceptionnelles, en mettant l'accent sur la qualité, l'innovation et la satisfaction client."/>
          </div>
        </section>
        <Section id="services" title="Nos Services">
          <Card title="Création de sites web" content="Nous concevons des sites web sur mesure, adaptés aux besoins spécifiques de nos clients, en utilisant les dernières technologies et tendances du design." />
          <Card title="Environnement numérique" content="Nous créons des environnements numériques complets, incluant des applications web, des plateformes e-commerce et des solutions de gestion de contenu." />
          <Card title="Support et maintenance" content="Nous offrons un support technique continu et des services de maintenance pour garantir le bon fonctionnement de vos solutions numériques." />
        </Section>
        <Section id="contact" title="Contactez-nous">
          <Card title="Nous contacter" content="Pour toute question ou demande de devis, n'hésitez pas à nous contacter via notre intranet. Nous sommes là pour vous aider à concrétiser vos projets numériques." />
          <Card title="Suivez-nous" content="Restez connecté avec nous sur notre intranet : https://discord.gg/zuE3BvTP "/>
          <Card title="Rejoignez-nous" content="Si vous êtes passionné par le développement web et souhaitez rejoindre notre équipe, consultez nos offres d'emploi sur notre site web." />
          <Card title="Service Support" content="Notre service support technique est disponible 24h/7"/>
        </Section>
      </div>

      <div className='footer-cpr'>
        <p className='text-center text-gray-500'>© 2025 CDNA. Tous droits réservés.</p>
        <p className='text-center text-gray-500'>Ce site est à but de rp seulement, l'entreprise présenté est fictive :)</p>
        <p className='text-center text-gray-500'>Conçu avec passion par l'équipe CDNA en react.</p>
        <p className='text-center text-gray-500'>Contact : <a href="mailto:spatio.dev@gmail.com?subject=Demande%20de%20contact&body=Bonjour%20je%20vous%20contacte%20pour%20%3A">spatio.dev@gmail.com</a></p>
      </div>
    </main>
  )};