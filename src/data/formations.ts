export interface Module {
  title: string
  duration: string
  topics: string[]
}

export interface Formation {
  id: string
  title: string
  description: string
  duration: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  color: string
  icon: string
  topics: string[]
  program: Module[]
}

export const formations: Formation[] = [
  {
    id: 'python',
    title: 'Python',
    description: 'Apprenez Python de zéro jusqu\'à la programmation orientée objet, les scripts automatisés et la manipulation de fichiers.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#4285F4',
    icon: '🐍',
    topics: ['Bases du langage', 'Fonctions', 'POO', 'Fichiers', 'Modules'],
    program: [
      { title: 'Module 1 — Environnement & premiers pas', duration: 'Semaine 1-2', topics: ['Installation Python & VS Code', 'Premier script', 'print(), input()', 'Types de données : int, float, str, bool'] },
      { title: 'Module 2 — Variables & opérateurs', duration: 'Semaine 3-4', topics: ['Déclaration de variables', 'Opérateurs arithmétiques & logiques', 'Conversion de types', 'Formatage de chaînes (f-strings)'] },
      { title: 'Module 3 — Conditions & boucles', duration: 'Semaine 5-6', topics: ['if / elif / else', 'Boucle while', 'Boucle for & range()', 'break, continue, pass'] },
      { title: 'Module 4 — Fonctions', duration: 'Semaine 7-8', topics: ['Définir et appeler une fonction', 'Paramètres & valeurs de retour', 'Portée des variables (scope)', 'Fonctions lambda'] },
      { title: 'Module 5 — Structures de données', duration: 'Semaine 9-10', topics: ['Listes & méthodes', 'Tuples & ensembles (set)', 'Dictionnaires', 'Compréhensions de listes'] },
      { title: 'Module 6 — Fichiers & exceptions', duration: 'Semaine 11', topics: ['Lecture & écriture de fichiers', 'try / except / finally', 'Gestion d\'erreurs personnalisées', 'Fichiers CSV & JSON'] },
      { title: 'Module 7 — POO & modules', duration: 'Semaine 12', topics: ['Classes & objets', 'Héritage & encapsulation', 'Modules & packages (pip)', 'Projet final de synthèse'] },
    ],
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    description: 'Maîtrisez HTML, CSS, JavaScript et les frameworks modernes pour créer des sites web professionnels et responsives.',
    duration: '4 mois',
    level: 'Débutant',
    color: '#EA4335',
    icon: '🌐',
    topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Déploiement'],
    program: [
      { title: 'Module 1 — HTML5 fondamentaux', duration: 'Semaine 1-2', topics: ['Structure d\'une page HTML', 'Balises sémantiques', 'Formulaires & validation', 'Accessibilité (a11y)'] },
      { title: 'Module 2 — CSS3 & mise en page', duration: 'Semaine 3-4', topics: ['Sélecteurs & priorités', 'Box model, Flexbox, Grid', 'Responsive design & media queries', 'Animations CSS'] },
      { title: 'Module 3 — JavaScript bases', duration: 'Semaine 5-6', topics: ['Variables, types, opérateurs', 'Fonctions & portée', 'Tableaux & objets', 'DOM : sélection & modification'] },
      { title: 'Module 4 — JavaScript avancé', duration: 'Semaine 7-8', topics: ['Événements & écouteurs', 'fetch() & APIs REST', 'Async / Await & Promises', 'LocalStorage & sessionStorage'] },
      { title: 'Module 5 — Tailwind CSS', duration: 'Semaine 9', topics: ['Installation & configuration', 'Classes utilitaires', 'Responsive avec Tailwind', 'Dark mode & personnalisation'] },
      { title: 'Module 6 — React.js', duration: 'Semaine 10-14', topics: ['JSX & composants', 'Props & State', 'Hooks (useState, useEffect)', 'React Router & navigation'] },
      { title: 'Module 7 — Projet final & déploiement', duration: 'Semaine 15-16', topics: ['Conception d\'un projet complet', 'Git & GitHub', 'Déploiement sur Vercel/Netlify', 'Présentation & code review'] },
    ],
  },
  {
    id: 'algo-1',
    title: 'Algorithmique 1',
    description: 'Maîtrisez les bases de l\'algorithmique universitaire : des variables aux tableaux en passant par les structures conditionnelles et répétitives.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#34A853',
    icon: '📐',
    topics: ['Variables & types', 'Conditions', 'Boucles', 'Tableaux', 'Fonctions'],
    program: [
      { title: 'Module 1 — Introduction à l\'algorithmique', duration: 'Semaine 1-2', topics: ['Qu\'est-ce qu\'un algorithme ?', 'Notion de pseudo-code', 'Environnement de travail', 'Premier algorithme : saisie et affichage'] },
      { title: 'Module 2 — Variables, constantes & types', duration: 'Semaine 3-4', topics: ['Types primitifs : entier, réel, booléen, caractère', 'Déclaration & affectation', 'Opérateurs arithmétiques & relationnels', 'Conversions de types'] },
      { title: 'Module 3 — Structures conditionnelles', duration: 'Semaine 5-6', topics: ['Si / Sinon / FinSi', 'Imbrication de conditions', 'Selon / Cas (switch)', 'Exercices de prise de décision'] },
      { title: 'Module 4 — Structures répétitives', duration: 'Semaine 7-8', topics: ['Boucle TantQue', 'Boucle Répéter...Jusqu\'à', 'Boucle Pour', 'Choix de la bonne boucle selon le contexte'] },
      { title: 'Module 5 — Tableaux à une dimension', duration: 'Semaine 9-10', topics: ['Déclaration & initialisation', 'Parcours de tableau', 'Recherche d\'un élément', 'Min, max, somme, moyenne'] },
      { title: 'Module 6 — Tableaux à deux dimensions (matrices)', duration: 'Semaine 11', topics: ['Déclaration de matrices', 'Parcours ligne/colonne', 'Transposée, trace, diagonale', 'Exercices sur matrices'] },
      { title: 'Module 7 — Sous-programmes & fonctions', duration: 'Semaine 12', topics: ['Procédures vs fonctions', 'Passage par valeur et par référence', 'Portée des variables', 'Projet de synthèse complet'] },
    ],
  },
  {
    id: 'sql',
    title: 'Bases de données SQL',
    description: 'Maîtrisez SQL pour interroger, gérer et optimiser vos bases de données relationnelles.',
    duration: '2 mois',
    level: 'Débutant',
    color: '#4285F4',
    icon: '🗄️',
    topics: ['SQL de base', 'Jointures', 'Fonctions avancées', 'PostgreSQL', 'Optimisation'],
    program: [
      { title: 'Module 1 — Introduction aux bases de données', duration: 'Semaine 1', topics: ['Modèle relationnel', 'SGBD : MySQL, PostgreSQL', 'Création de tables (DDL)', 'Types de données SQL'] },
      { title: 'Module 2 — Requêtes SELECT', duration: 'Semaine 2-3', topics: ['SELECT, FROM, WHERE', 'ORDER BY, LIMIT, DISTINCT', 'Opérateurs : LIKE, BETWEEN, IN', 'Fonctions de chaînes & dates'] },
      { title: 'Module 3 — Fonctions d\'agrégation', duration: 'Semaine 4', topics: ['COUNT, SUM, AVG, MIN, MAX', 'GROUP BY & HAVING', 'Sous-requêtes scalaires', 'Requêtes imbriquées'] },
      { title: 'Module 4 — Jointures', duration: 'Semaine 5-6', topics: ['INNER JOIN', 'LEFT / RIGHT JOIN', 'FULL OUTER JOIN', 'Jointures multiples & auto-jointure'] },
      { title: 'Module 5 — Manipulation de données (LMD)', duration: 'Semaine 7', topics: ['INSERT INTO', 'UPDATE & DELETE', 'Transactions (COMMIT, ROLLBACK)', 'Contraintes d\'intégrité'] },
      { title: 'Module 6 — Optimisation & vues', duration: 'Semaine 8', topics: ['Index & performance', 'Vues (CREATE VIEW)', 'Procédures stockées', 'Analyse de requêtes (EXPLAIN)'] },
    ],
  },
  {
    id: 'cybersecurite',
    title: 'Cybersécurité',
    description: 'Comprenez les menaces informatiques, apprenez à sécuriser des systèmes, des réseaux et des applications web.',
    duration: '4 mois',
    level: 'Intermédiaire',
    color: '#EA4335',
    icon: '🛡️',
    topics: ['Réseaux', 'Ethical hacking', 'OWASP', 'CTF', 'Cryptographie'],
    program: [
      { title: 'Module 1 — Réseaux & protocoles', duration: 'Semaine 1-2', topics: ['Modèles OSI & TCP/IP', 'Protocoles : HTTP, DNS, DHCP, SSH', 'Analyse réseau avec Wireshark', 'Introduction à Kali Linux'] },
      { title: 'Module 2 — Linux pour la sécurité', duration: 'Semaine 3-4', topics: ['Commandes Linux essentielles', 'Gestion des droits & utilisateurs', 'Scripts Bash', 'Services & ports'] },
      { title: 'Module 3 — Cryptographie', duration: 'Semaine 5-6', topics: ['Chiffrement symétrique & asymétrique', 'Fonctions de hachage (SHA, MD5)', 'PKI & certificats SSL/TLS', 'Introduction au chiffrement RSA'] },
      { title: 'Module 4 — Sécurité web — OWASP Top 10', duration: 'Semaine 7-9', topics: ['Injection SQL', 'XSS & CSRF', 'Authentification cassée', 'Exposition de données sensibles', 'Outils : Burp Suite, OWASP ZAP'] },
      { title: 'Module 5 — Ethical hacking & pentest', duration: 'Semaine 10-12', topics: ['Phases d\'un pentest', 'Reconnaissance (OSINT)', 'Scanning (Nmap, Nessus)', 'Exploitation (Metasploit)'] },
      { title: 'Module 6 — CTF & forensics', duration: 'Semaine 13-14', topics: ['Plateformes : Root-Me, HackTheBox, TryHackMe', 'Catégories CTF : Web, Crypto, Forensics, Pwn', 'Analyse de malware basique', 'Rapport de vulnérabilité'] },
      { title: 'Module 7 — Défense & certifications', duration: 'Semaine 15-16', topics: ['Hardening système', 'Firewall & IDS/IPS', 'Préparation CEH & CompTIA Security+', 'Projet final : audit d\'une application'] },
    ],
  },
  {
    id: 'c-language',
    title: 'Langage C — Universitaire',
    description: 'Maîtrisez le C pour vos cours d\'université : algorithmique, gestion mémoire, pointeurs et structures de données.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#34A853',
    icon: '💻',
    topics: ['Syntaxe C', 'Pointeurs', 'Tableaux', 'Structures', 'Fichiers'],
    program: [
      { title: 'Module 1 — Environnement & structure d\'un programme C', duration: 'Semaine 1-2', topics: ['Installation GCC & Code::Blocks', 'Structure d\'un programme (#include, main)', 'Compilation & exécution', 'printf() & scanf()'] },
      { title: 'Module 2 — Variables, types & opérateurs', duration: 'Semaine 3', topics: ['Types : int, float, double, char', 'Constantes & #define', 'Opérateurs arithmétiques, relationnels, logiques', 'Cast (conversion de types)'] },
      { title: 'Module 3 — Structures de contrôle', duration: 'Semaine 4-5', topics: ['if / else if / else', 'switch / case', 'Boucles : while, do-while, for', 'break, continue, goto (et pourquoi éviter goto)'] },
      { title: 'Module 4 — Fonctions', duration: 'Semaine 6', topics: ['Déclaration & définition', 'Passage par valeur', 'Prototypes de fonctions', 'Récursivité'] },
      { title: 'Module 5 — Tableaux & chaînes', duration: 'Semaine 7-8', topics: ['Tableaux 1D & 2D', 'Chaînes de caractères (char[])', 'Fonctions string.h : strlen, strcpy, strcmp', 'Matrices & parcours'] },
      { title: 'Module 6 — Pointeurs', duration: 'Semaine 9-10', topics: ['Adresse mémoire & opérateur &', 'Déclaration & déréférencement (*)', 'Pointeurs & tableaux', 'Passage par référence via pointeur'] },
      { title: 'Module 7 — Structures & allocation dynamique', duration: 'Semaine 11', topics: ['struct : déclaration & utilisation', 'typedef', 'malloc(), calloc(), free()', 'Pointeurs sur structures'] },
      { title: 'Module 8 — Fichiers & projet final', duration: 'Semaine 12', topics: ['Fichiers texte & binaires', 'fopen, fread, fwrite, fclose', 'Projet : mini base de données en C', 'Débogage avec gdb'] },
    ],
  },
  {
    id: 'architecture-machine',
    title: 'Architecture Machine',
    description: 'Comprenez le fonctionnement interne d\'un ordinateur : CPU, mémoire, assembleur et systèmes d\'exploitation.',
    duration: '2 mois',
    level: 'Débutant',
    color: '#FBBC05',
    icon: '🔧',
    topics: ['Logique binaire', 'Architecture CPU', 'Assembleur x86', 'Mémoire', 'OS'],
    program: [
      { title: 'Module 1 — Représentation de l\'information', duration: 'Semaine 1-2', topics: ['Binaire, octal, hexadécimal', 'Conversion entre bases', 'Représentation des entiers signés (complément à 2)', 'Représentation des réels (IEEE 754)'] },
      { title: 'Module 2 — Algèbre de Boole & circuits logiques', duration: 'Semaine 3', topics: ['Opérateurs booléens : AND, OR, NOT, XOR', 'Tables de vérité & simplification', 'Portes logiques & circuits combinatoires', 'Additionneur & multipexeur'] },
      { title: 'Module 3 — Architecture du processeur (CPU)', duration: 'Semaine 4-5', topics: ['Composants : UAL, registres, horloge', 'Cycle fetch-decode-execute', 'Pipeline d\'instructions', 'Architectures RISC vs CISC'] },
      { title: 'Module 4 — Hiérarchie mémoire', duration: 'Semaine 6', topics: ['Registres, cache (L1/L2/L3), RAM, disque', 'Principe de localité', 'Mémoire virtuelle & pagination', 'Gestion de la pile (stack)'] },
      { title: 'Module 5 — Assembleur x86', duration: 'Semaine 7-8', topics: ['Registres x86 (EAX, EBX, ESP...)', 'Instructions de base : MOV, ADD, CMP, JMP', 'Appels de fonctions & pile', 'Lien avec le langage C'] },
    ],
  },
  {
    id: 'algo-2',
    title: 'Algorithmique 2',
    description: 'Approfondissez l\'algorithmique avec les structures de données dynamiques, la récursivité et les algorithmes de tri et de recherche.',
    duration: '3 mois',
    level: 'Intermédiaire',
    color: '#4285F4',
    icon: '📊',
    topics: ['Récursivité', 'Complexité', 'Tris', 'Listes chaînées', 'Arbres'],
    program: [
      { title: 'Module 1 — Rappels & récursivité', duration: 'Semaine 1-2', topics: ['Rappels Algorithmique 1', 'Principe de la récursivité', 'Factorielle, Fibonacci, tours de Hanoï', 'Récursivité terminale'] },
      { title: 'Module 2 — Complexité algorithmique', duration: 'Semaine 3', topics: ['Notation Grand O (O, Ω, Θ)', 'Complexité temporelle & spatiale', 'Analyse de boucles imbriquées', 'Comparaison d\'algorithmes'] },
      { title: 'Module 3 — Algorithmes de tri', duration: 'Semaine 4-5', topics: ['Tri à bulles, tri par sélection, tri par insertion', 'Tri rapide (QuickSort)', 'Tri fusion (MergeSort)', 'Comparaison des complexités de tri'] },
      { title: 'Module 4 — Algorithmes de recherche', duration: 'Semaine 6', topics: ['Recherche séquentielle', 'Recherche dichotomique (binaire)', 'Conditions sur les données triées', 'Hashage & tables de hachage'] },
      { title: 'Module 5 — Listes chaînées', duration: 'Semaine 7-8', topics: ['Liste simplement chaînée', 'Insertion, suppression, parcours', 'Liste doublement chaînée', 'Liste circulaire'] },
      { title: 'Module 6 — Piles & files', duration: 'Semaine 9', topics: ['Structure pile (LIFO) : push, pop', 'Structure file (FIFO) : enqueue, dequeue', 'Applications : expression parenthésée, BFS', 'Implémentation par tableau et par liste'] },
      { title: 'Module 7 — Arbres binaires', duration: 'Semaine 10-11', topics: ['Terminologie : racine, feuilles, hauteur', 'Arbre binaire de recherche (ABR)', 'Parcours : préfixe, infixe, suffixe', 'Insertion & suppression dans un ABR'] },
      { title: 'Module 8 — Graphes', duration: 'Semaine 12', topics: ['Représentation : matrice d\'adjacence, listes', 'BFS (parcours en largeur)', 'DFS (parcours en profondeur)', 'Projet de synthèse : algorithme de chemin'] },
    ],
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Maîtrisez les outils du marketing en ligne : SEO, réseaux sociaux, publicité digitale et stratégie de contenu.',
    duration: '3 mois',
    level: 'Débutant',
    color: '#EA4335',
    icon: '📣',
    topics: ['SEO', 'Réseaux sociaux', 'Google Ads', 'Email marketing', 'Analytics'],
    program: [
      { title: 'Module 1 — Fondamentaux du marketing digital', duration: 'Semaine 1-2', topics: ['Écosystème digital & canaux', 'Définir sa cible (persona)', 'Funnel marketing (AIDA)', 'Veille concurrentielle'] },
      { title: 'Module 2 — Création de contenu', duration: 'Semaine 3-4', topics: ['Copywriting & storytelling', 'Outils de design : Canva, Adobe Express', 'Contenu pour chaque réseau social', 'Calendrier éditorial'] },
      { title: 'Module 3 — SEO & référencement naturel', duration: 'Semaine 5-6', topics: ['Fonctionnement des moteurs de recherche', 'Recherche de mots-clés (SEMrush, Ubersuggest)', 'SEO on-page & technique', 'Netlinking & backlinks'] },
      { title: 'Module 4 — Réseaux sociaux & community management', duration: 'Semaine 7-8', topics: ['Facebook, Instagram, LinkedIn, TikTok', 'Gestion d\'une page professionnelle', 'Analyse des statistiques', 'Collaborations & influence marketing'] },
      { title: 'Module 5 — Publicité payante (SEA)', duration: 'Semaine 9-10', topics: ['Google Ads : Search & Display', 'Facebook & Instagram Ads', 'Budget, enchères & ciblage', 'Optimisation des campagnes (CTR, CPC, ROAS)'] },
      { title: 'Module 6 — Email marketing & automation', duration: 'Semaine 11', topics: ['Construire sa liste email', 'Outils : Mailchimp, Brevo', 'Séquences automatisées', 'A/B testing & taux d\'ouverture'] },
      { title: 'Module 7 — Analytics & mesure', duration: 'Semaine 12', topics: ['Google Analytics 4', 'Tableaux de bord & KPI', 'Rapport de performance', 'Projet final : stratégie digitale complète'] },
    ],
  },
]
