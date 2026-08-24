import { useParams, Link } from "react-router-dom"
import { ClipboardList, Target, BookOpen, TrendingUp, Link2, Clock} from "lucide-react"

function RealisationDetail() {
  const { slug } = useParams()
  const competences = [
  {
    slug: "salon-2025",
    image : "https://plus.unsplash.com/premium_photo-1733306428104-90afe41a4ad5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nom: "Salon Pollutec Lyon 2025",
 competences_mobilisees: [
  { titre: "Rigueur budgétaire", slug: "rigueur-budgetaire"},
  { titre: "Coordination d'équipes", slug: "coordination-equipes"},
  { titre: "Autonomie opérationnelle", slug: "autonomie-operationnelle"},],
    presentation: "Le salon Pollutec Lyon est un événement professionnel où plusieurs acteurs de l'environnement se retrouvent afin de partager leurs créations, nouveautés, réseauter ou rencontrer de potentiels prospects. Il s'y déroule chaque année avec un peu plus de 50 000 professionnels répondant présent. Megatec, acteur dans l'environnement et spécialisé dans la mesure de la qualité de l'air, s'y est représenté du 7 au 10 octobre 2025.",
    objectif: "L'objectif principal était d'acquérir au moins 30 leads qualifiés pour rentabiliser le coût du salon. Le budget fixé était de 15 000€. Le risque principal était de ne pas atteindre suffisamment de leads pour justifier l'investissement. Un second risque concernait la logistique car tout problème le jour J aurait impacté l'image de l'équipe sur place.",
 
  etapes: [
  { titre: "Analyse des besoins", description: "Identification de tous les postes : stand, goodies, transport et hébergement pour 3 personnes. Définition des priorités et des contraintes budgétaires dès le départ.", }, 
  { titre: "Planning Trello", description: "Création d'un board dédié avec checklists, assignations et deadlines par responsable. La direction pouvait suivre l'avancement en temps réel sans réunion de statut.", }, 
  { titre: "Optimisation budgétaire", description: "Recherche de fournisseurs, comparaison des offres, négociation le budget est passé de 15 000€ à 11 144€, soit -26%, sans compromis sur la qualité ni sur la présence.", }, 
  { titre: "Coordination d'équipe", description: "Animation de points mensuels sur l'avancement avec les 2 collègues commerciaux et reporting régulier à la direction pour validation des étapes clés.", }, 
  { titre: "Jour J- logistique fluide", description: "Grâce au planning réalisé en amont, l'équipe a pu se concentrer entièrement sur le salon et ses objectifs commerciaux, sans avoir à gérer les imprévus organisationnels.", }, 
],
  acteurs: [
  { titre: "Moi", description: "Pilotage complet de l'organisation : budget, planning, coordination et logistique.", },
  { titre: "2 collègues commerciaux", description: "Présents sur le stand, en charge des échanges clients et de la collecte des leads.", },
  { titre: "Direction MEGATEC", description: "Validation du budget et des décisions stratégiques à chaque étape.", },
  { titre: "Organisateurs Pollutec", description: "Interlocuteur pour la réservation du stand et les contraintes techniques de l'événement.", },
 ],

  resultats:  [
  { titre: "25 leads qualifiés générés", description: "sur 30 visés résultat solide compte tenu des conditions"},
  { titre: "-26% de budget économisé", description: "11 144€ dépensés sur 15 000€ prévus"},
  { titre: "80% des délais respectés", description: "planning Trello globalement tenu"},
  { titre: "Direction satisfaite", description: "et souhait de réitérer l'expérience"},
 ],
description_resultat : "La décoration du stand, sobre mais fidèle à la charte graphique MEGATEC, a contribué à une image professionnelle et cohérente. L'équipe a pu se concentrer sur ses objectifs commerciaux grâce à une logistique préparée en amont.",

lendemain : "Suite aux résultats du salon, la direction souhaite renouveler l'expérience et en faire un rendez-vous régulier. L'objectif serait d'atteindre les 30 leads visés lors des prochaines éditions en s'appuyant sur ce premier retour d'expérience.",
  critique: [
  { titre: "Ce qui a fonctionné", description: "L'utilisation de Trello comme outil de pilotage a été un vrai plus : visibilité immédiate sur l'avancement, aucune tâche oubliée, et une équipe autonome le jour J. La priorisation budgétaire a permis d'économiser 3 856€ sans dégrader la qualité du stand.", },
{ titre: "Ce qui aurait pu mieux fonctionner", description: "Les rendez-vous clients auraient pu être anticipés et planifiés avant le salon, pour maximiser les échanges qualifiés sur place plutôt que de compter uniquement sur le flux spontané.", },
{ titre: "Ce que je ferais différemment", description: "J'anticiperais mieux les risques logistiques dès le départ : transport, stand, matériel, pour éviter les imprévus le jour J.", },
],

  },


{
    slug: "deploiement-dolibarr",
    image : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nom: "Déploiement Dolibarr ",
  competences_mobilisees: [
  { titre: "Intégration d'ERP", slug: "Intégration-ERP"},
  { titre: "Autonomie opérationnelle", slug: "autonomie-operationnelle"},
  { titre: "Pédagogie et transmission", slug: "pédagogie-transmission"},
  { titre: "Écoute active", slug: "ecoute-active"},],
    presentation: "Dolibarr est un ERP open source multi-services (RH, comptabilité, commercial). Il permet de centraliser toutes les données d'une entreprise. Ce qui en fait sa particularité est son côté open source qui le rend modulable et adaptable selon les besoins, et sa communauté proposant diverses solutions aux problèmes posés. Avant ce déploiement, les données et documents au sein de MEGATEC étaient dispersés sur plusieurs canaux et certains restaient en format papier. Certaines tâches telles que les factures et les suivis de devis étaient également réalisées manuellement.",
    objectif: "L'objectif principal était de digitaliser MEGATEC et de centraliser les données dans un seul outil partagé entre tous les services. Concrètement : supprimer les doublons, les fichiers éparpillés, les échanges par mail pour retrouver une information. Le risque principal était humain : une résistance au changement de la part des équipes, habituées à leurs outils depuis des années.",
 
  etapes: [
{titre: "Découverte autonome de l'outil", description: "Prise en main complète de Dolibarr en autonomie : documentation officielle, sandbox, forums. Exploration des modules clés pour comprendre leur potentiel avant de les adapter au contexte MEGATEC.", }, 
{titre: "Réunions individuelles de recueil des besoins", description: "Entretiens avec chaque service (RH, commercial, direction) pour comprendre les parcours utilisateurs actuels, identifier les points de friction et adapter le paramétrage aux usages réels et non l'inverse.", }, 
{titre: "Paramétrage et migration des données", description: "Configuration des modules retenus, migration des données depuis Excel et autres formats vers Dolibarr. Paramétrage du masque aux couleurs de la charte graphique MEGATEC.", }, 
{titre: "Formations individuelles et collectives", description: "12 sessions de formation animées pour 4 utilisateurs : démonstrations, pratique guidée, mini-guides visuels remis à chaque participant pour favoriser l'autonomie post-formation.", }, 
{titre: "Réunions de suivi et accompagnement au changement", description: "Points réguliers pour recueillir les retours terrain, résoudre les blocages et ajuster l'outil. Stratégies ciblées pour réduire les résistances à l'utilisation identifiées en cours de déploiement.", }, 
{titre: "Résolution autonome de 12 bugs", description: "Identification et correction de 12 bugs fonctionnels (imports, affichages, doublons) sans intervention d'un prestataire externe. 2 000€ de consulting évités.", }, 
],
  acteurs: [
{ titre: "Moi", description: "Pilotage complet du déploiement : découverte, paramétrage, formation, suivi et résolution des bugs.", },
{ titre: "Service RH", description: "Utilisateur principal des modules notes de frais et congés. Impliqué dès le recueil des besoins.", },
{ titre: "Équipe commerciale", description: "Utilisateur du module commercial (devis, commandes, facturation). Retours terrain déterminants pour l'adaptation de l'outil.", },
{ titre: "Direction MEGATEC", description: "Commanditaire du projet. Validation des choix de paramétrage et suivi de l'avancement global.", },
 ],

  resultats:  [
{ titre: "100% notes de frais & congés", description: "gérés dans Dolibarr"},
{ titre: "80% factures & commandes", description: "traitées dans l'outil"},
{ titre: "+20% gain de temps estimé", description: "sur les tâches administratives"},
{ titre: "2k€ de consulting évités", description: "grâce à l'autonomie technique"},
 ],
description_resultat : "Les notes de frais et demandes de congés sont désormais facilitées et plus claires visuellement. Les documents sont centralisés et faciles à retrouver. L'ensemble des produits est géré dans l'outil, et 3 emailings ont été réalisés via Dolibarr. Taux d'adoption estimé à 85% en 1 mois.",

lendemain : "Le déploiement de Dolibarr a posé les bases de la transformation digitale de MEGATEC. À terme, l'objectif est d'étendre les modules à de nouveaux usages et de connecter Dolibarr aux autres outils de l'entreprise. Ce premier projet ouvre également la voie à des déploiements plus complexes avec davantage d'utilisateurs.",
  critique: [
  { titre: "Ce qui a fonctionné", description: "L'autonomie technique a été un vrai atout : aucun prestataire externe, 2 000€ économisés, et une montée en compétence rapide sur l'outil. Les formations individuelles ont favorisé une adoption progressive et adaptée à chaque profil utilisateur.", },
{ titre: "Ce qui aurait pu mieux fonctionner", description: "Certaines résistances à l'utilisation auraient pu être anticipées. Partir directement sur la solution sans avoir suffisamment diagnostiqué l'entreprise en amont a généré des ajustements en cours de route qui auraient pu être évités.", },
{ titre: "Ce que je ferais différemment", description: "Sur ce premier projet, je commencerais par un diagnostic complet de l'entreprise : comprendre les équipes, leurs habitudes, leurs freins et leur rapport au changement  avant même de toucher à la solution. Cela aurait permis de mieux anticiper les résistances et d'adapter la stratégie de déploiement dès le départ.", },
],

  },

  {
    slug: "refonte-site",
    image : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nom: "Refonte site MEGATEC",
 competences_mobilisees: [
  { titre: "Autonomie opérationnelle", slug : "autonomie-operationnelle"},
  { titre: "Coordination d'équipes", slug : "coordination-equipes"},
  { titre: "Déploiement de solutions numériques", slug : "Intégration-ERP"},],
    presentation: "Dans le cadre de la stratégie de communication de MEGATEC, une refonte complète du site web a été lancée. J'ai participé à ce projet dès le départ : cahier des charges, prise en main du CMS Strapi, rédaction des contenus et formation des équipes. C'était ma première expérience sur un projet web de cette envergure, menée en collaboration avec un chef de projet et un prestataire technique.",
    objectif: "L'objectif principal était de moderniser l'image de MEGATEC en ligne, dans un contexte fort : l'entreprise venait d'être reprise et tout avait été refait locaux, équipe, positionnement. Le site devait refléter cette nouvelle ère et incarner ce renouveau. L'enjeu était double : gagner en crédibilité avec un design moderne et professionnel, et améliorer la visibilité de l'entreprise en ligne pour que les prospects trouvent une image cohérente avec la réalité du terrain. Le risque principal : un manque de synchronisation entre les acteurs (marketing, technique, direction) pouvant générer des allers-retours coûteux et diluer la cohérence du rendu final.",
 
  etapes: [
  { titre: "Prise en main autonome de Strapi", description: "Découverte et configuration du CMS Strapi en autonomie : création des collections, structuration des contenus, paramétrage des accès. Aucun support externe sollicité.", }, 
  { titre: "Rédaction et intégration des contenus", description: "Rédaction des textes pour l'ensemble des pages du site (page d'accueil, pages produits, à propos…) avec une attention portée au ton de marque MEGATEC. Intégration de 40+ fiches produits avec textes, visuels et métadonnées directement dans Strapi.", }, 
  { titre: "Optimisation SEO", description: "Rédaction des balises titres, méta-descriptions et textes optimisés pour le référencement naturel sur les pages clés. Structuration des contenus pour améliorer la lisibilité par les moteurs de recherche.", }, 
  { titre: "Coordination des acteurs", description: "Interface entre le prestataire technique (développement), l'équipe marketing (contenus) et la direction (validations). Suivi de l'avancement via Trello, avec colonnes dédiées par responsable.", }, 
  { titre: "Formation des référents contenu", description: "Formation de 2 référents contenu à la gestion autonome du CMS : prise en main, mise à jour des fiches, ajout de contenu. Objectif : zéro dépendance au prestataire pour les mises à jour courantes.", }, 
  { titre: "Gestion des bugs et demandes", description: "Remontée et suivi des anomalies (erreurs 404, problèmes d'affichage) sur 4 sites gérés via Strapi.", }, 
],
  acteurs: [
  { titre: "Moi - Coordination globale", description: "Prise en main de Strapi, rédaction des contenus, formation des équipes et coordination avec les acteurs du projet.", },
  { titre: "Équipe marketing MEGATEC", description: "Productrice des contenus (textes, visuels) et utilisatrice finale du CMS après livraison.", },
  { titre: "Prestataire technique", description: "En charge du développement front-end et de l'intégration Strapi. Interlocuteur technique principal.", },
  { titre: "Direction MEGATEC", description: "Validation des maquettes, des contenus stratégiques et de la mise en ligne.", },
 ],

  resultats:  [
  { titre: "40+ fiches produits créées", description: "dans Strapi, avec textes et visuels"},
  { titre: "30 demandes traitées", description: "sans support externe"},
  { titre: "1 site géré", description: "via le CMS Strapi"},
  { titre: "Image modernisée", description: "cohérente avec le renouveau de l'entreprise"},
 ],
description_resultat : "Le site a été livré dans les délais négociés, propre et sans friction entre les équipes. Les référents contenu sont désormais autonomes sur les mises à jour, supprimant la dépendance au prestataire pour les modifications courantes. L'image de MEGATEC en ligne reflète désormais son positionnement réel.",

lendemain : "La refonte du site a posé les bases d'une présence digitale cohérente et maîtrisée en interne. L'étape suivante serait de connecter Strapi aux autres outils de l'entreprise pour automatiser certaines mises à jour. Ce projet m'a également permis de découvrir la valeur d'un CMS pour une PME : autonomie et flexibilité dans la gestion des contenus.",
  critique: [
  { titre: "Ce qui a fonctionné", description: "La coordination via Trello a permis à chaque acteur de connaître son rôle et ses délais sans avoir besoin de réunions de statut constantes. La prise en main autonome de Strapi a évité une dépendance totale au prestataire et accéléré la livraison des contenus.", },
{ titre: "Ce qui aurait pu mieux fonctionner", description: "Les allers-retours sur certaines validations de contenus ont parfois ralenti l'avancement. Un processus de validation plus cadré dès le départ aurait réduit ces frictions.", },
{ titre: "Ce que je ferais différemment", description: "Je définirais un brief contenu plus précis en amont avec l'équipe marketing, pour éviter les révisions tardives. Et j'intégrerais une phase de recette utilisateur plus structurée avant la mise en ligne.", },
],

  },


  {
    slug: "onboarding-stagiaires",
    image : "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    nom: "Onboarding Stagiaires",
 competences_mobilisees: [
  { titre: "Pédagogie et transmission", slug : "pédagogie-transmission"},
  { titre: "Autonomie opérationnelle", slug : "autonomie-operationnelle"},
 ],
    presentation: "L'intégration d'un nouveau collaborateur est un moment clé qui conditionne sa rapidité à devenir opérationnel. Chez Rouge Rouge 3, j'ai pris en charge l'onboarding de 2 stagiaires et d'un employé appelé à me remplacer par la suite. L'enjeu était double : former rapidement sur les outils internes (CRM Zoho, campagnes marketing Zoho), et assurer une transmission complète des processus à l'employé pour garantir la continuité après mon départ.",
    objectif: "L'objectif était de rendre chaque personne opérationnelle sur ses outils le plus rapidement possible, avec un enjeu supplémentaire pour l'employé : qu'il soit capable d'assurer la continuité de mes missions sans perte d'information ni de qualité. L'enjeu pédagogique était de trouver le bon équilibre entre montrer, faire pratiquer et laisser faire. Le risque : une formation trop théorique sans pratique immédiate, qui n'aurait rien ancré ou un lâcher-prise trop rapide sans accompagnement suffisant, surtout pour la transmission à l'employé.",
 
  etapes: [
  { titre: "Formation CRM Zoho", description: "Prise en main guidée du CRM Zoho : navigation, gestion des contacts, suivi des interactions. Méthode : démonstration puis pratique immédiate sur des cas réels.", }, 
  { titre: "Formation campagnes marketing Zoho", description: "Formation à la création et au suivi de campagnes email via Zoho Campaigns : segmentation, paramétrage, envoi et analyse des résultats.", }, 
  { titre: "Transmission des processus à l'employé remplaçant", description: "Accompagnement approfondi de l'employé appelé à me succéder : transmission des processus, des habitudes de travail, des contacts clés et des points de vigilance pour assurer une continuité sans friction.", }, 
  { titre: "Accompagnement jusqu'à l'autonomie", description: "Suivi des premières réalisations, réponse aux questions, corrections guidées. Objectif : que chaque personne soit autonome sur son périmètre le plus vite possible.", }, 
],
  acteurs: [
  { titre: "Moi", description: "Formateur et référent pendant toute la période d'onboarding, et garant de la transmission à l'employé remplaçant.", },
  { titre: "2 stagiaires", description: "En charge de missions marketing et communication chez Rouge Rouge 3.", },
  { titre: "Employé remplaçant", description: "Appelé à prendre la suite de mes missions formation et transmission prioritaires.", },
  { titre: "Direction Rouge Rouge 3", description: "Commanditaire de l'intégration, attendant une continuité assurée après mon départ.", },
 ],

  resultats:  [
  { titre: "3 personnes formées", description: "2 stagiaires + 1 employé remplaçant"},
  { titre: "2 outils maîtrisés", description: "CRM Zoho, Zoho Campaigns"},
  { titre: "Continuité assurée", description: "transmission complète à l'employé"},
  { titre: "Retours positifs", description: "de la direction et des formés"},
 ],
description_resultat : "Les stagiaires ont pu contribuer rapidement à leurs missions sans mobiliser les équipes pour des questions récurrentes. L'employé remplaçant a bénéficié d'une transmission structurée des processus, assurant une reprise sans perte d'information.",

lendemain : "Cette expérience a mis en évidence l'importance d'une passation structurée. À terme, l'objectif serait de créer des supports d'onboarding réutilisables pour que chaque nouvelle arrivée soit plus rapide et autonome.",
  critique: [
  { titre: "Ce qui a fonctionné", description: "L'approche démonstration + pratique immédiate sur des cas réels a permis une acquisition rapide. La transmission à l'employé remplaçant a été anticipée suffisamment tôt pour ne pas être précipitée.", },
{ titre: "Ce qui aurait pu mieux fonctionner", description: "L'onboarding s'est appuyé principalement sur une transmission orale et en direct, sans supports écrits réutilisables. Si d'autres personnes arrivent à l'avenir, tout est à refaire depuis zéro.", },
{ titre: "Ce que je ferais différemment", description: "Je produirais des supports structurés dès le départ  mini-guides Notion ou vidéos Loom pour capitaliser sur la formation et la rendre reproductible sans investissement supplémentaire à chaque nouvelle arrivée.", },
],

  },

  {
    slug: "espace-client",
    image : "https://plus.unsplash.com/premium_photo-1700830193308-73775665bcb0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nom: "Projet Espace Client",
 competences_mobilisees: [
  { titre: "Écoute active", slug : "ecoute-active"},
  { titre: "Développement front-end (React)", slug : "developpement-frontend"},
  { titre: "Intégration back-end & base de données (Supabase)", slug : "base-de-donnees-supabase"},
  { titre: "Sécurité applicative (RLS)" , slug : "securite-rls"},
  { titre: "Versioning & déploiement (Git / Netlify)" , slug : "versioning-deploiement"},],
    presentation: "Dans le cadre de la digitalisation de la relation client chez MEGATEC, un projet d'application Espace Client a été lancé. L'objectif : offrir aux clients un accès direct à leurs documents et fiches techniques, sans passer par les équipes internes pour chaque demande. J'ai mené ce projet du cadrage jusqu'au développement : recueil des besoins et cahier des charges, puis développement de l'application (front-end React, base de données et authentification via Supabase, sécurité des accès) et mise en ligne. Aujourd'hui, l'application permet à chaque client de se connecter à son espace de manière sécurisée et d'accéder uniquement à ses propres documents.",
    objectif: "L'objectif était de définir précisément ce que devait faire l'application avant que la moindre ligne de code ne soit écrite. L'enjeu : éviter le syndrome du tunnel développer une application qui ne correspond pas aux vrais besoins des utilisateurs faute d'un recueil suffisant. Le risque identifié : des attentes divergentes entre la direction (vision stratégique) et les utilisateurs finaux (usage quotidien), pouvant mener à des allers-retours en cours de développement.",
 
  etapes: [
  { titre: "Analyse des notes et comptes rendus existants", description: "Revue des notes de réunions de fin d'année, d'entretiens individuels et d'échanges avec les clients pour identifier les besoins exprimés et les attentes implicites.", }, 
   { titre: "Réunions de cadrage fonctionnel", description: "Organisation de réunions structurées avec la direction et les équipes concernées pour comprendre les parcours utilisateurs, les fonctionnalités attendues et les priorités.", },
     { titre: "Modélisation des besoins", description: "Structuration des besoins identifiés en fonctionnalités priorisées, avec description des parcours utilisateurs et des cas d'usage principaux.", },
       { titre: "Production du cahier des charges fonctionnel", description: "Rédaction du document de référence pour le développement : fonctionnalités, priorités, contraintes techniques et critères de validation.", },
       { titre: "Développement de l'interface (front-end)", description: "Développement des écrans de l'application en React et Tailwind : page de connexion, tableau de bord, affichage des documents et fiches techniques, liste des produits en location.", },
  { titre: "Base de données & authentification (Supabase)", description: "Mise en place de la base de données et de l'authentification via Supabase : stockage des documents et des informations, gestion sécurisée des comptes clients.", },
  { titre: "Sécurisation et mise en ligne", description: "Mise en place de la sécurité des accès (RLS) pour que chaque client ne voie que ses propres documents, puis déploiement de l'application en ligne sur Netlify.", },
],
  acteurs: [
  { titre: "Moi", description: "Chef de projet en phase de cadrage : recueil des besoins, analyse, coordination et production du cahier des charges.", },
  { titre: "Direction MEGATEC", description: "Commanditaire du projet, porteuse de la vision stratégique et des objectifs business.", },
  { titre: "Équipes internes", description: "Utilisateurs indirects de l'application, impliqués dans le recueil des besoins pour comprendre leurs interactions quotidiennes avec les clients.", },
  { titre: "Clients MEGATEC", description: "Utilisateurs finaux de l'application, dont les attentes et usages ont guidé la définition fonctionnelle.", },
 ],

  resultats:  [
  { titre: "Application livrée", description: "du cahier des charges au déploiement", },
  { titre: "Connexion sécurisée", description: "chaque client accède à son espace privé", },
  { titre: "Accès isolé par client", description: "grâce à la sécurité RLS", },
  { titre: "En ligne", description: "déployée sur Netlify", },
 ],
description_resultat : "Le projet a permis de poser un cadre clair avant le développement, limitant les risques d'incompréhension entre les équipes. Le cahier des charges fonctionnel a servi de référence commune pour aligner direction, équipes internes et développeur.",

lendemain : "Le cadrage fonctionnel réalisé a permis de lancer le développement de l'application sur des bases claires. À terme, l'espace client devrait réduire la charge des équipes internes sur les demandes récurrentes et améliorer la relation client de MEGATEC. Ce projet a également renforcé ma conviction que le cadrage est la phase la plus critique d'un projet IT et souvent la plus sous-estimée.",
  critique: [
  { titre: "Ce qui a fonctionné", description: "La démarche d'écoute active et la synthèse des besoins à partir de sources multiples (réunions, notes, entretiens) ont permis de produire un cadrage solide et représentatif des attentes réelles.", },
{ titre: "Ce qui aurait pu mieux fonctionner", description: "Certaines fonctionnalités ont émergé tardivement, après le démarrage du développement ce qui a nécessité des ajustements. Un atelier de co-construction plus tôt aurait pu les faire remonter plus tôt.", },
{ titre: "Ce que je ferais différemment", description: "J'organiserais un atelier avec toutes les parties prenantes dès le départ pour aligner les visions avant même la rédaction du cahier des charges.", },
],

  },



]

const realisation = competences.find(c => c.slug === slug)

return (
  <div>
    {/* HERO */}
    <div className="relative h-80 w-full flex items-end p-8" 
         style={{backgroundImage: `url(${realisation.image})`, backgroundSize: 'cover'}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <h1 className="relative text-3xl font-bold text-white">{realisation.nom}</h1>
    </div>

    <section className="bg-white max-w-4xl mx-auto px-6 py-8">

      {/* Retour */}
      <Link to="/realisations" className="text-gray-500 text-sm mb-6 block">← Retour aux réalisations</Link>

      {/* Compétences mobilisées */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 mb-6">
        <h3 className="text-indigo-700 font-semibold mb-4">Compétences mobilisées</h3>
                <div className="flex flex-wrap gap-3">
          {realisation.competences_mobilisees.map((comp, index) => (
            <Link key={index} to={`/competences/${comp.slug}`} className="border border-indigo-300 rounded-full px-4 py-1.5 text-sm text-indigo-700 transition hover:bg-indigo-100">{comp.titre} →</Link>
          ))}
        </div>
      </div>

      {/* Présentation */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-blue-600 rounded-full bg-indigo-100 mb-3 text-sm font-semibold"><ClipboardList size={16} /> Présentation & Définition</span>
        <p className="text-gray-500 text-base leading-8">{realisation.presentation}</p>
      </div>

      {/* Objectifs */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-orange-600 rounded-full bg-orange-100 mb-3 text-sm font-semibold"><Target size={16} /> Objectifs, Contexte, Enjeux & Risques</span>
        <p className="text-gray-500 text-base leading-8">{realisation.objectif}</p>
      </div>

      {/* Étapes */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-green-600 rounded-full bg-green-100 mb-4 text-sm font-semibold"><Clock size={16} /> Étapes Ce que j'ai fait</span>
        {realisation.etapes.map((etape, index) => (
          <div key={index} className="flex items-start gap-3 mb-4">
            <p className="inline-flex items-center justify-center w-6 h-6 text-green-600 rounded-full bg-green-100 text-xs font-bold shrink-0">{index + 1}</p>
            <div>
              <p className="font-semibold text-black">{etape.titre}</p>
              <p className="text-gray-500 text-sm">{etape.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Acteurs */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-violet-600 rounded-full bg-violet-100 mb-4 text-sm font-semibold"><BookOpen size={16} /> Acteurs</span>
        {realisation.acteurs.map((acteur, index) => (
          <div key={index} className="flex items-start gap-3 mb-4">
            <p className="inline-flex items-center justify-center w-6 h-6 text-violet-600 rounded-full bg-violet-100 text-xs font-bold shrink-0">{index + 1}</p>
            <div>
              <p className="font-semibold text-black">{acteur.titre}</p>
              <p className="text-gray-500 text-sm">{acteur.description}</p>
            </div>
          </div>
        ))}
      </div>

        {/* Résultats*/}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <h3 className="text-indigo-700 font-semibold mb-4">Résultats</h3>
        <div className="grid grid-cols-4 gap-4 ">
          {realisation.resultats.map((comp, index) => (
            <div key={index} className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-center">
  <p className="font-semibold text-indigo-700 text-lg mb-3">{comp.titre}</p>
  <p className="text-gray-500 text-xs">{comp.description}</p>
</div>
          ))}
        </div>
      </div>
      {/* Lendemains */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-teal-600 rounded-full bg-teal-100 mb-3 text-sm font-semibold"><TrendingUp size={16} /> Lendemains</span>
        <p className="text-gray-500 text-base leading-8">{realisation.lendemain}</p>
      </div>


         {/* Regard critique  */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-orange-600 rounded-full bg-orange-100 mb-4 text-sm font-semibold"><BookOpen size={16} />Regard critique </span>
        {realisation.critique.map((critique, index) => (
          <div key={index} className="flex items-start gap-3 mb-4">
            <p className="inline-flex items-center justify-center w-6 h-6 text-orange-600 rounded-full bg-orange-100 text-xs font-bold shrink-0">{index + 1}</p>
            <div>
              <p className="font-semibold text-black">{critique.titre}</p>
              <p className="text-gray-500 text-sm">{critique.description}</p>
            </div>
          </div>
        ))}
      </div>

      

    </section>
  </div>
)

}
export default RealisationDetail 