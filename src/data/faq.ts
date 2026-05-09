export type FAQItem = { question: string; reponse: string }

export const faqItems: FAQItem[] = [
  {
    question: 'Les cours sont-ils en direct ou enregistrés ?',
    reponse:
      'Les cours sont dispensés en direct via Google Meet selon un planning fixe. Chaque session est également enregistrée automatiquement et mise à disposition dans ton espace personnel dans les 24h. Tu peux donc revoir un cours autant de fois que tu le souhaites.',
  },
  {
    question: 'Quel niveau faut-il pour s\'inscrire ?',
    reponse:
      'Aucun prérequis pour la majorité de nos formations — nous accueillons les débutants complets. Certaines formations avancées (comme la Cybersécurité ou Algorithmique 2) recommandent d\'avoir suivi une formation de base, mais le formulaire d\'inscription t\'indique clairement les prérequis de chaque parcours.',
  },
  {
    question: 'Les cours sont dispensés en quelle langue ?',
    reponse:
      'Les cours sont principalement en darija algérien avec les termes techniques en français et en anglais, pour que tout le monde comprenne facilement. Les supports écrits (exercices, slides) sont en français.',
  },
  {
    question: 'Que se passe-t-il si je rate une session ?',
    reponse:
      'Pas de panique. Toutes les sessions sont enregistrées et accessibles dans ton espace étudiant. Tu reçois aussi un résumé écrit et les exercices de chaque cours par email. Le professeur est disponible sur le groupe Telegram de la promotion pour répondre à tes questions entre les sessions.',
  },
  {
    question: 'Comment se déroule le paiement ?',
    reponse:
      'Le paiement s\'effectue par virement bancaire CCP ou Baridimob avant le début de la formation. Les détails te sont envoyés après validation de ton inscription. Nous proposons également un paiement en deux tranches pour certaines formations — contacte-nous pour en savoir plus.',
  },
  {
    question: 'Y a-t-il un certificat à la fin de la formation ?',
    reponse:
      'Oui. Tout étudiant ayant suivi au moins 80 % des sessions et rendu les exercices reçoit un certificat D.C.D (Digital Campus Dz) de fin de formation. Le certificat mentionne la formation suivie, la durée et la date de délivrance. Il est envoyé en PDF et peut être partagé sur LinkedIn.',
  },
]
