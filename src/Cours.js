import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';

import { Accordion, AccordionTab } from 'primereact/accordion';
        
function Cours() {
  return (
    <div className="App">
        <NavBar />
        <Accordion style={{maxWidth: '1200px',margin:'0 auto',marginTop: '10px'}}>
    <AccordionTab header="Java et Java avancé" style={{marginTop: '20px'}}>
        <p className="m-0">
        Acquisition d'une solide compréhension de la programmation Java, y compris les concepts de base du langage, la programmation orientée objet, la manipulation de données, la communication réseau, la gestion des erreurs, la création d'interfaces graphiques et la conception d'applications web interactives avec JSP et Ajax.</p>
    </AccordionTab>
    <AccordionTab header="JEE" style={{marginTop: '20px'}}>
        <p className="m-0">
        Mastering fundamental back-end development concepts using technologies like Spring IoC, JPQL, Spring Security, and Docker for creating robust and secure server-side applications; proficiency in React JS basics for developing interactive and dynamic client-side user interfaces, using Hooks and Axios for state management and API calls; understanding and application of DevOps principles, utilizing tools such as Docker, SonarQube, and GitLab for effective management of an application's lifecycle from development to production, ensuring code quality, continuous integration, and deployment.
        </p>
    </AccordionTab>
    <AccordionTab header="Programmation Mobile" style={{marginTop: '20px'}}>
        <p className="m-0">
        Conception et design d'interfaces utilisateur intuitives pour les applications mobiles en utilisant XML, ViewGroups, et des composants d'interface utilisateur natifs, avec la gestion des interactions utilisateur et la création d'applications multi-interfaces à l'aide de fragments et d'intents. Utilisation d'API natives et de services web, tels que les services de téléphonie, le GPS, la caméra, et la communication HTTP avec les bibliothèques Volley et Retrofit. Gestion efficace de la persistance des données avec SQLite, Content Providers, Room, et préférences partagées, ainsi que la gestion du multi-threading et des tâches en arrière-plan pour améliorer la performance et la réactivité des applications mobiles.</p>
    </AccordionTab>
    <AccordionTab header="Programmation Web" style={{marginTop: '20px'}}>
        <p className="m-0">
        Acquisition of a solid understanding of web programming languages such as HTML, CSS, and JavaScript.
Mastery of the key concepts and development tools for web development, including popular frameworks like Laravel for PHP, enabling the creation of robust and high-performance web applications.
Use of PDO for database management in the context of web development, ensuring security and efficiency of database operations.
Creation of interactive and dynamic websites using web programming languages, frameworks like Laravel, and appropriate tools to develop modern and attractive web applications.
            </p>
    </AccordionTab>
    <AccordionTab header="Programmation Web Avancée" style={{marginTop: '20px'}}>
        <p className="m-0">
        Compréhension avancée des principes et protocoles de sécurité pour les applications web, y compris l'authentification, l'autorisation, la gestion des sessions, la protection contre les attaques CSRF et XSS, et la sécurisation des communications à l'aide de protocoles tels que HTTPS
Maîtrise des principes de l'architecture REST (Representational State Transfer) pour la création d'API (Application Programming Interface) web efficaces, évolutives et sécurisées, avec la compréhension des méthodes HTTP, des formats de données tels que JSON et XML, et des outils pour la documentation et les tests d'API
Maîtrise des principes de l'architecture MVC (Modèle-Vue-Contrôleur) pour la création d'applications web structurées et modulaires, avec la compréhension des rôles et responsabilités de chaque composant et l'utilisation de frameworks tels que Laravel, Express.js et Angular pour implémenter cette architecture
Maîtrise de l'utilisation d'outils de développement tels que Git pour la gestion de versions, l'intégration continue pour assurer la qualité du code, et les tests unitaires et fonctionnels pour garantir le bon fonctionnement des applications web
Maîtrise de l'intégration de services tiers tels que les API de paiement, les services de messagerie et les réseaux sociaux dans les applications web, avec la compréhension des protocoles et des outils associés pour intégrer ces services de manière efficace et sécurisée
            </p>
    </AccordionTab>
    <AccordionTab header="UML" style={{marginTop: '20px'}}>
        <p className="m-0">
            Compréhension des concepts fondamentaux d'UML (Unified Modeling Language), y compris les types de diagrammes, les éléments de modélisation tels que les classes, les objets, les relations, les cas d'utilisation, les états, les activités, les séquences, les composants, et les déploiements

Capacité à créer des modèles UML pour représenter des systèmes logiciels ou des processus métier, en utilisant différents types de diagrammes selon les besoins, tels que les diagrammes de classes, les diagrammes de séquence, les diagrammes d'activités, les diagrammes d'états, les diagrammes de cas d'utilisation, et les diagrammes de déploiement

Connaissance des meilleures pratiques de modélisation avec UML, notamment la compréhension des conventions de notation et des règles de modélisation, la capacité à interpréter et à analyser les modèles UML existants, ainsi que la compétence à créer des modèles UML lisibles, compréhensibles et cohérents

Aptitude à utiliser les modèles UML comme un outil de communication efficace entre les différentes parties prenantes d'un projet, tels que les développeurs, les architectes, les analystes, les testeurs, et les clients, pour faciliter la compréhension, la collaboration et la documentation des exigences, de la conception, et de l'implémentation des systèmes logiciels.
            </p>
    </AccordionTab>
</Accordion>    
<div style={{marginTop: '70px'}}></div> 
 <Footer />
    </div>
  );
}

export default Cours;