/* ============================================
   PeriodGuide.com — Internationalization (i18n)
   Supports: English (en), Spanish (es), French (fr)
   ============================================ */

const PG_I18N = (() => {
  const translations = {
    en: {
      // Navigation
      nav_home: "Home",
      nav_today: "Today's Guide",
      nav_cycle_day: "Cycle Day",
      nav_track: "Track",
      nav_insights: "Insights",
      nav_toolkits: "Toolkits",
      nav_traditions: "Traditions",
      nav_clinic_pack: "Clinic Pack",
      nav_privacy: "Privacy",
      nav_about: "About",
      nav_accessibility: "Accessibility",

      // Homepage Hero
      hero_title: "Your Cycle, Your Companion",
      hero_subtitle: "Evidence-based guidance for every day of your cycle. Not just when you're on your period.",
      hero_cta: "Find My Cycle Day",
      hero_cta_secondary: "Explore Today's Guide",
      hero_privacy_note: "Privacy-first. No account required. Your data stays yours.",

      // Cycle Day Finder
      cdf_title: "Where Am I in My Cycle?",
      cdf_subtitle: "Select your cycle day or let us help you figure it out. No app setup needed.",
      cdf_select_day: "Select your cycle day",
      cdf_day: "Day",
      cdf_last_period: "When did your last period start?",
      cdf_not_sure: "Not sure? That's okay.",
      cdf_help_text: "Day 1 is the first day of your period bleeding. Count from there.",
      cdf_get_guide: "Get My Guide",
      cdf_phase: "Phase",
      cdf_typical_length: "Typical cycle length",

      // Phases
      phase_menstrual: "Menstrual",
      phase_follicular: "Follicular",
      phase_ovulation: "Ovulation",
      phase_luteal: "Luteal",
      phase_menstrual_desc: "Your period is here. Focus on rest, warmth, and gentle nourishment.",
      phase_follicular_desc: "Energy is rising. Great time for new projects and social activities.",
      phase_ovulation_desc: "Peak energy and confidence. Your body is at its most fertile.",
      phase_luteal_desc: "Winding down. Honor the need for slower pace and self-care.",

      // Today's Guide
      tg_title: "Today's Guide",
      tg_subtitle: "Your personalized daily plan based on your cycle day and symptoms.",
      tg_top_actions: "Top 3 Actions for Today",
      tg_simple_view: "Simple",
      tg_deep_view: "Deep Science",
      tg_safety: "Safety Notes",
      tg_when_to_seek_care: "When to Seek Care",
      tg_track_today: "Track Today",

      // Tracking
      track_title: "Daily Check-in",
      track_subtitle: "Quick daily tracking to personalize your guidance over time.",
      track_pain: "Pain Level",
      track_bleeding: "Bleeding",
      track_mood: "Mood",
      track_energy: "Energy",
      track_sleep: "Sleep (hours)",
      track_stress: "Stress",
      track_notes: "Notes (optional)",
      track_save: "Save Entry",
      track_saved: "Saved!",
      track_bleeding_none: "None",
      track_bleeding_light: "Light",
      track_bleeding_medium: "Medium",
      track_bleeding_heavy: "Heavy",

      // Insights
      insights_title: "Your Insights",
      insights_subtitle: "Patterns and trends from your tracked data. Non-diagnostic.",
      insights_cycle_overview: "Cycle Overview",
      insights_symptom_trends: "Symptom Trends",
      insights_correlations: "Correlations",
      insights_try_next: "Try Next Cycle",
      insights_not_enough: "Track for at least 2 cycles to see patterns emerge.",
      insights_pattern_found: "Pattern Detected",

      // Toolkits
      toolkit_cramps_title: "Cramps Toolkit",
      toolkit_cramps_subtitle: "Evidence-graded interventions for menstrual cramps, from immediate relief to long-term strategies.",
      toolkit_pms_title: "PMS & PMDD Companion",
      toolkit_pms_subtitle: "Understand, manage, and track premenstrual symptoms with clinical-grade guidance.",
      toolkit_immediate: "Immediate Relief",
      toolkit_short_term: "Short-term Strategies",
      toolkit_long_term: "Long-term Approaches",
      toolkit_when_care: "When to Seek Care",

      // Traditions
      traditions_title: "Traditions Library",
      traditions_subtitle: "Ancestral and traditional approaches to menstrual wellness, presented with cultural context and safety information.",
      traditions_ayurveda: "Ayurveda",
      traditions_tcm: "Traditional Chinese Medicine",
      traditions_indigenous: "Indigenous Practices",
      traditions_disclaimer: "Traditional practices are presented as cultural viewpoints, not medical recommendations. Always check contraindications.",

      // Clinic Pack
      clinic_title: "Doctor Visit Pack",
      clinic_subtitle: "Prepare for your healthcare appointment with an exportable summary of your cycle data and questions to ask.",
      clinic_export: "Export My Summary",
      clinic_questions: "Questions to Ask",

      // Privacy
      privacy_title: "Privacy Center",
      privacy_subtitle: "Your intimate health data belongs to you. Period.",
      privacy_anonymous: "Anonymous Mode",
      privacy_local_only: "Local-Only Mode",
      privacy_export: "Export My Data",
      privacy_delete: "Delete All Data",
      privacy_promise: "We do not sell intimate data. Period.",
      privacy_no_trackers: "No ad trackers on health pages",

      // About
      about_title: "About PeriodGuide",
      about_subtitle: "We're building the daily companion your cycle deserves.",
      about_mission: "Our Mission",
      about_principles: "Our Principles",
      about_evidence: "Evidence Process",

      // Evidence Badges
      evidence_strong: "Strong Evidence",
      evidence_moderate: "Moderate Evidence",
      evidence_emerging: "Emerging Research",
      evidence_traditional: "Traditional Use",

      // Common
      learn_more: "Learn More",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
      back: "Back",
      next: "Next",
      skip: "Skip",
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      low: "Low",
      high: "High",
      none: "None",
      mild: "Mild",
      moderate: "Moderate",
      severe: "Severe",

      // Footer
      footer_tagline: "Your cycle companion. Evidence-based. Privacy-first. Culturally respectful.",
      footer_tools: "Tools",
      footer_resources: "Resources",
      footer_company: "Company",
      footer_legal: "Legal",
      footer_copyright: "PeriodGuide.com. All rights reserved.",

      // Accessibility
      skip_to_content: "Skip to main content",
      accessibility_title: "Accessibility",
      accessibility_subtitle: "PeriodGuide is designed to be accessible to everyone.",

      // Red Flag Safety
      safety_red_flag_title: "Seek Medical Attention",
      safety_red_flag_sudden_pain: "Sudden, severe abdominal or pelvic pain",
      safety_red_flag_heavy_bleeding: "Soaking through a pad/tampon every hour for several hours",
      safety_red_flag_fever: "Fever with pelvic pain",
      safety_red_flag_fainting: "Fainting or severe dizziness",
      safety_red_flag_disclaimer: "This is not medical advice. If you're concerned, contact a healthcare provider.",

      // Life Stages
      stage_teen: "Teen",
      stage_adult: "Adult",
      stage_postpartum: "Postpartum",
      stage_perimenopause: "Perimenopause",
      stage_menopause: "Menopause",

      // Actions
      action_heat: "Apply Heat",
      action_heat_desc: "Use a heating pad or warm water bottle on your lower abdomen for 15-20 minutes.",
      action_hydrate: "Stay Hydrated",
      action_hydrate_desc: "Aim for 8+ glasses of water. Warm herbal tea can also help with cramps.",
      action_move: "Gentle Movement",
      action_move_desc: "Light walking, stretching, or yoga can help relieve cramps and boost mood.",
      action_rest: "Prioritize Rest",
      action_rest_desc: "Listen to your body. It's okay to slow down and rest when you need to.",
      action_nourish: "Nourish Well",
      action_nourish_desc: "Focus on iron-rich foods, anti-inflammatory options, and magnesium sources.",
      action_track: "Track Symptoms",
      action_track_desc: "Note your pain, mood, and energy today to build personalized insights over time.",
    },

    es: {
      // Navigation
      nav_home: "Inicio",
      nav_today: "Guia de Hoy",
      nav_cycle_day: "Dia del Ciclo",
      nav_track: "Registro",
      nav_insights: "Perspectivas",
      nav_toolkits: "Herramientas",
      nav_traditions: "Tradiciones",
      nav_clinic_pack: "Pack Clinico",
      nav_privacy: "Privacidad",
      nav_about: "Acerca de",
      nav_accessibility: "Accesibilidad",

      // Homepage Hero
      hero_title: "Tu Ciclo, Tu Companera",
      hero_subtitle: "Orientacion basada en evidencia para cada dia de tu ciclo. No solo cuando tienes tu periodo.",
      hero_cta: "Encontrar Mi Dia del Ciclo",
      hero_cta_secondary: "Explorar la Guia de Hoy",
      hero_privacy_note: "Privacidad primero. Sin cuenta requerida. Tus datos son tuyos.",

      // Cycle Day Finder
      cdf_title: "Donde Estoy en Mi Ciclo?",
      cdf_subtitle: "Selecciona tu dia del ciclo o dejanos ayudarte a descubrirlo. Sin necesidad de configurar una app.",
      cdf_select_day: "Selecciona tu dia del ciclo",
      cdf_day: "Dia",
      cdf_last_period: "Cuando empezo tu ultimo periodo?",
      cdf_not_sure: "No estas segura? Esta bien.",
      cdf_help_text: "El Dia 1 es el primer dia de sangrado de tu periodo. Cuenta desde ahi.",
      cdf_get_guide: "Obtener Mi Guia",
      cdf_phase: "Fase",
      cdf_typical_length: "Duracion tipica del ciclo",

      // Phases
      phase_menstrual: "Menstrual",
      phase_follicular: "Folicular",
      phase_ovulation: "Ovulacion",
      phase_luteal: "Lutea",
      phase_menstrual_desc: "Tu periodo esta aqui. Enfocate en descanso, calor y nutricion suave.",
      phase_follicular_desc: "La energia esta subiendo. Buen momento para nuevos proyectos y actividades sociales.",
      phase_ovulation_desc: "Energia y confianza al maximo. Tu cuerpo esta en su punto mas fertil.",
      phase_luteal_desc: "Desacelerando. Honra la necesidad de un ritmo mas lento y autocuidado.",

      // Today's Guide
      tg_title: "Guia de Hoy",
      tg_subtitle: "Tu plan diario personalizado basado en tu dia del ciclo y sintomas.",
      tg_top_actions: "3 Acciones Principales para Hoy",
      tg_simple_view: "Simple",
      tg_deep_view: "Ciencia Profunda",
      tg_safety: "Notas de Seguridad",
      tg_when_to_seek_care: "Cuando Buscar Atencion",
      tg_track_today: "Registrar Hoy",

      // Tracking
      track_title: "Registro Diario",
      track_subtitle: "Registro rapido diario para personalizar tu orientacion con el tiempo.",
      track_pain: "Nivel de Dolor",
      track_bleeding: "Sangrado",
      track_mood: "Estado de Animo",
      track_energy: "Energia",
      track_sleep: "Sueno (horas)",
      track_stress: "Estres",
      track_notes: "Notas (opcional)",
      track_save: "Guardar Registro",
      track_saved: "Guardado!",
      track_bleeding_none: "Ninguno",
      track_bleeding_light: "Ligero",
      track_bleeding_medium: "Medio",
      track_bleeding_heavy: "Abundante",

      // Insights
      insights_title: "Tus Perspectivas",
      insights_subtitle: "Patrones y tendencias de tus datos registrados. No diagnostico.",
      insights_cycle_overview: "Vision General del Ciclo",
      insights_symptom_trends: "Tendencias de Sintomas",
      insights_correlations: "Correlaciones",
      insights_try_next: "Probar el Proximo Ciclo",
      insights_not_enough: "Registra al menos 2 ciclos para ver patrones emerger.",
      insights_pattern_found: "Patron Detectado",

      // Toolkits
      toolkit_cramps_title: "Kit de Calambres",
      toolkit_cramps_subtitle: "Intervenciones graduadas por evidencia para calambres menstruales, desde alivio inmediato hasta estrategias a largo plazo.",
      toolkit_pms_title: "Companero de SPM y TDPM",
      toolkit_pms_subtitle: "Comprende, maneja y registra sintomas premenstruales con orientacion de grado clinico.",
      toolkit_immediate: "Alivio Inmediato",
      toolkit_short_term: "Estrategias a Corto Plazo",
      toolkit_long_term: "Enfoques a Largo Plazo",
      toolkit_when_care: "Cuando Buscar Atencion",

      // Traditions
      traditions_title: "Biblioteca de Tradiciones",
      traditions_subtitle: "Enfoques ancestrales y tradicionales para el bienestar menstrual, presentados con contexto cultural e informacion de seguridad.",
      traditions_ayurveda: "Ayurveda",
      traditions_tcm: "Medicina Tradicional China",
      traditions_indigenous: "Practicas Indigenas",
      traditions_disclaimer: "Las practicas tradicionales se presentan como puntos de vista culturales, no como recomendaciones medicas. Siempre verifica contraindicaciones.",

      // Clinic Pack
      clinic_title: "Pack para la Consulta Medica",
      clinic_subtitle: "Preparate para tu cita medica con un resumen exportable de tus datos del ciclo y preguntas para hacer.",
      clinic_export: "Exportar Mi Resumen",
      clinic_questions: "Preguntas para Hacer",

      // Privacy
      privacy_title: "Centro de Privacidad",
      privacy_subtitle: "Tus datos intimos de salud te pertenecen. Punto.",
      privacy_anonymous: "Modo Anonimo",
      privacy_local_only: "Modo Solo Local",
      privacy_export: "Exportar Mis Datos",
      privacy_delete: "Eliminar Todos los Datos",
      privacy_promise: "No vendemos datos intimos. Punto.",
      privacy_no_trackers: "Sin rastreadores publicitarios en paginas de salud",

      // About
      about_title: "Acerca de PeriodGuide",
      about_subtitle: "Estamos construyendo la companera diaria que tu ciclo merece.",
      about_mission: "Nuestra Mision",
      about_principles: "Nuestros Principios",
      about_evidence: "Proceso de Evidencia",

      // Evidence
      evidence_strong: "Evidencia Fuerte",
      evidence_moderate: "Evidencia Moderada",
      evidence_emerging: "Investigacion Emergente",
      evidence_traditional: "Uso Tradicional",

      // Common
      learn_more: "Saber Mas",
      close: "Cerrar",
      save: "Guardar",
      cancel: "Cancelar",
      back: "Atras",
      next: "Siguiente",
      skip: "Omitir",
      loading: "Cargando...",
      error: "Algo salio mal",
      retry: "Reintentar",
      low: "Bajo",
      high: "Alto",
      none: "Ninguno",
      mild: "Leve",
      moderate: "Moderado",
      severe: "Severo",

      // Footer
      footer_tagline: "Tu companera de ciclo. Basada en evidencia. Privacidad primero. Culturalmente respetuosa.",
      footer_tools: "Herramientas",
      footer_resources: "Recursos",
      footer_company: "Empresa",
      footer_legal: "Legal",
      footer_copyright: "PeriodGuide.com. Todos los derechos reservados.",

      // Accessibility
      skip_to_content: "Saltar al contenido principal",
      accessibility_title: "Accesibilidad",
      accessibility_subtitle: "PeriodGuide esta disenado para ser accesible para todos.",

      // Safety
      safety_red_flag_title: "Busca Atencion Medica",
      safety_red_flag_sudden_pain: "Dolor abdominal o pelvico severo y repentino",
      safety_red_flag_heavy_bleeding: "Empapar una toalla/tampon cada hora durante varias horas",
      safety_red_flag_fever: "Fiebre con dolor pelvico",
      safety_red_flag_fainting: "Desmayo o mareo severo",
      safety_red_flag_disclaimer: "Esto no es consejo medico. Si te preocupa, contacta a un proveedor de salud.",

      // Life Stages
      stage_teen: "Adolescente",
      stage_adult: "Adulta",
      stage_postpartum: "Postparto",
      stage_perimenopause: "Perimenopausia",
      stage_menopause: "Menopausia",

      // Actions
      action_heat: "Aplicar Calor",
      action_heat_desc: "Usa una almohadilla termica o botella de agua caliente en tu abdomen bajo por 15-20 minutos.",
      action_hydrate: "Mantente Hidratada",
      action_hydrate_desc: "Apunta a 8+ vasos de agua. El te de hierbas caliente tambien puede ayudar con los calambres.",
      action_move: "Movimiento Suave",
      action_move_desc: "Caminar ligero, estiramientos o yoga pueden ayudar a aliviar calambres y mejorar el animo.",
      action_rest: "Prioriza el Descanso",
      action_rest_desc: "Escucha tu cuerpo. Esta bien ir mas lento y descansar cuando lo necesites.",
      action_nourish: "Nutrete Bien",
      action_nourish_desc: "Enfocate en alimentos ricos en hierro, opciones antiinflamatorias y fuentes de magnesio.",
      action_track: "Registra Sintomas",
      action_track_desc: "Anota tu dolor, animo y energia hoy para construir perspectivas personalizadas con el tiempo.",
    },

    fr: {
      // Navigation
      nav_home: "Accueil",
      nav_today: "Guide du Jour",
      nav_cycle_day: "Jour du Cycle",
      nav_track: "Suivi",
      nav_insights: "Aperçus",
      nav_toolkits: "Outils",
      nav_traditions: "Traditions",
      nav_clinic_pack: "Pack Clinique",
      nav_privacy: "Confidentialite",
      nav_about: "A Propos",
      nav_accessibility: "Accessibilite",

      // Homepage Hero
      hero_title: "Votre Cycle, Votre Compagne",
      hero_subtitle: "Des conseils fondes sur la science pour chaque jour de votre cycle. Pas seulement pendant vos regles.",
      hero_cta: "Trouver Mon Jour de Cycle",
      hero_cta_secondary: "Explorer le Guide du Jour",
      hero_privacy_note: "Confidentialite d'abord. Pas de compte requis. Vos donnees restent les votres.",

      // Cycle Day Finder
      cdf_title: "Ou en Suis-je dans Mon Cycle?",
      cdf_subtitle: "Selectionnez votre jour de cycle ou laissez-nous vous aider. Pas besoin de configurer une app.",
      cdf_select_day: "Selectionnez votre jour de cycle",
      cdf_day: "Jour",
      cdf_last_period: "Quand vos dernieres regles ont-elles commence?",
      cdf_not_sure: "Pas sure? C'est normal.",
      cdf_help_text: "Le Jour 1 est le premier jour de saignement de vos regles. Comptez a partir de la.",
      cdf_get_guide: "Obtenir Mon Guide",
      cdf_phase: "Phase",
      cdf_typical_length: "Duree typique du cycle",

      // Phases
      phase_menstrual: "Menstruelle",
      phase_follicular: "Folliculaire",
      phase_ovulation: "Ovulation",
      phase_luteal: "Luteale",
      phase_menstrual_desc: "Vos regles sont la. Concentrez-vous sur le repos, la chaleur et une alimentation douce.",
      phase_follicular_desc: "L'energie monte. Bon moment pour de nouveaux projets et activites sociales.",
      phase_ovulation_desc: "Energie et confiance au maximum. Votre corps est a son plus fertile.",
      phase_luteal_desc: "Ralentissement. Honorez le besoin d'un rythme plus lent et de soins personnels.",

      // Today's Guide
      tg_title: "Guide du Jour",
      tg_subtitle: "Votre plan quotidien personnalise base sur votre jour de cycle et vos symptomes.",
      tg_top_actions: "3 Actions Principales pour Aujourd'hui",
      tg_simple_view: "Simple",
      tg_deep_view: "Science Approfondie",
      tg_safety: "Notes de Securite",
      tg_when_to_seek_care: "Quand Consulter",
      tg_track_today: "Suivre Aujourd'hui",

      // Tracking
      track_title: "Bilan Quotidien",
      track_subtitle: "Suivi quotidien rapide pour personnaliser vos conseils au fil du temps.",
      track_pain: "Niveau de Douleur",
      track_bleeding: "Saignement",
      track_mood: "Humeur",
      track_energy: "Energie",
      track_sleep: "Sommeil (heures)",
      track_stress: "Stress",
      track_notes: "Notes (optionnel)",
      track_save: "Sauvegarder",
      track_saved: "Sauvegarde!",
      track_bleeding_none: "Aucun",
      track_bleeding_light: "Leger",
      track_bleeding_medium: "Moyen",
      track_bleeding_heavy: "Abondant",

      // Insights
      insights_title: "Vos Aperçus",
      insights_subtitle: "Tendances et schemas de vos donnees suivies. Non diagnostique.",
      insights_cycle_overview: "Vue d'Ensemble du Cycle",
      insights_symptom_trends: "Tendances des Symptomes",
      insights_correlations: "Correlations",
      insights_try_next: "Essayer au Prochain Cycle",
      insights_not_enough: "Suivez au moins 2 cycles pour voir des tendances emerger.",
      insights_pattern_found: "Schema Detecte",

      // Toolkits
      toolkit_cramps_title: "Kit Crampes",
      toolkit_cramps_subtitle: "Interventions graduees par evidence pour les crampes menstruelles, du soulagement immediat aux strategies a long terme.",
      toolkit_pms_title: "Compagnon SPM et TDPM",
      toolkit_pms_subtitle: "Comprenez, gerez et suivez les symptomes premenstruels avec des conseils de qualite clinique.",
      toolkit_immediate: "Soulagement Immediat",
      toolkit_short_term: "Strategies a Court Terme",
      toolkit_long_term: "Approches a Long Terme",
      toolkit_when_care: "Quand Consulter",

      // Traditions
      traditions_title: "Bibliotheque des Traditions",
      traditions_subtitle: "Approches ancestrales et traditionnelles du bien-etre menstruel, presentees avec contexte culturel et informations de securite.",
      traditions_ayurveda: "Ayurveda",
      traditions_tcm: "Medecine Traditionnelle Chinoise",
      traditions_indigenous: "Pratiques Autochtones",
      traditions_disclaimer: "Les pratiques traditionnelles sont presentees comme des points de vue culturels, pas comme des recommandations medicales. Verifiez toujours les contre-indications.",

      // Clinic Pack
      clinic_title: "Pack Visite Medicale",
      clinic_subtitle: "Preparez votre rendez-vous medical avec un resume exportable de vos donnees de cycle et des questions a poser.",
      clinic_export: "Exporter Mon Resume",
      clinic_questions: "Questions a Poser",

      // Privacy
      privacy_title: "Centre de Confidentialite",
      privacy_subtitle: "Vos donnees intimes de sante vous appartiennent. Point final.",
      privacy_anonymous: "Mode Anonyme",
      privacy_local_only: "Mode Local Uniquement",
      privacy_export: "Exporter Mes Donnees",
      privacy_delete: "Supprimer Toutes les Donnees",
      privacy_promise: "Nous ne vendons pas de donnees intimes. Point final.",
      privacy_no_trackers: "Pas de traceurs publicitaires sur les pages de sante",

      // About
      about_title: "A Propos de PeriodGuide",
      about_subtitle: "Nous construisons la compagne quotidienne que votre cycle merite.",
      about_mission: "Notre Mission",
      about_principles: "Nos Principes",
      about_evidence: "Processus d'Evidence",

      // Evidence
      evidence_strong: "Evidence Solide",
      evidence_moderate: "Evidence Moderee",
      evidence_emerging: "Recherche Emergente",
      evidence_traditional: "Usage Traditionnel",

      // Common
      learn_more: "En Savoir Plus",
      close: "Fermer",
      save: "Sauvegarder",
      cancel: "Annuler",
      back: "Retour",
      next: "Suivant",
      skip: "Passer",
      loading: "Chargement...",
      error: "Quelque chose s'est mal passe",
      retry: "Reessayer",
      low: "Bas",
      high: "Eleve",
      none: "Aucun",
      mild: "Leger",
      moderate: "Modere",
      severe: "Severe",

      // Footer
      footer_tagline: "Votre compagne de cycle. Basee sur la science. Confidentialite d'abord. Culturellement respectueuse.",
      footer_tools: "Outils",
      footer_resources: "Ressources",
      footer_company: "Entreprise",
      footer_legal: "Legal",
      footer_copyright: "PeriodGuide.com. Tous droits reserves.",

      // Accessibility
      skip_to_content: "Aller au contenu principal",
      accessibility_title: "Accessibilite",
      accessibility_subtitle: "PeriodGuide est concu pour etre accessible a tous.",

      // Safety
      safety_red_flag_title: "Consultez un Medecin",
      safety_red_flag_sudden_pain: "Douleur abdominale ou pelvienne soudaine et severe",
      safety_red_flag_heavy_bleeding: "Tremper une serviette/tampon chaque heure pendant plusieurs heures",
      safety_red_flag_fever: "Fievre avec douleur pelvienne",
      safety_red_flag_fainting: "Evanouissement ou vertige severe",
      safety_red_flag_disclaimer: "Ceci n'est pas un avis medical. Si vous etes inquiete, contactez un professionnel de sante.",

      // Life Stages
      stage_teen: "Adolescente",
      stage_adult: "Adulte",
      stage_postpartum: "Post-partum",
      stage_perimenopause: "Perimenopause",
      stage_menopause: "Menopause",

      // Actions
      action_heat: "Appliquer de la Chaleur",
      action_heat_desc: "Utilisez une bouillotte ou coussin chauffant sur votre bas-ventre pendant 15-20 minutes.",
      action_hydrate: "Restez Hydratee",
      action_hydrate_desc: "Visez 8+ verres d'eau. La tisane chaude peut aussi aider contre les crampes.",
      action_move: "Mouvement Doux",
      action_move_desc: "La marche legere, les etirements ou le yoga peuvent aider a soulager les crampes et ameliorer l'humeur.",
      action_rest: "Priorisez le Repos",
      action_rest_desc: "Ecoutez votre corps. C'est normal de ralentir et de se reposer quand vous en avez besoin.",
      action_nourish: "Nourrissez-vous Bien",
      action_nourish_desc: "Privilegiez les aliments riches en fer, les options anti-inflammatoires et les sources de magnesium.",
      action_track: "Suivez vos Symptomes",
      action_track_desc: "Notez votre douleur, humeur et energie aujourd'hui pour construire des aperçus personnalises au fil du temps.",
    }
  };

  let currentLang = 'en';

  function detectLanguage() {
    const pathLang = window.location.pathname.split('/')[1];
    if (['es', 'fr'].includes(pathLang)) return pathLang;

    const stored = localStorage.getItem('pg_lang');
    if (stored && translations[stored]) return stored;

    const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (translations[browserLang]) return browserLang;

    return 'en';
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('pg_lang', lang);
    document.documentElement.lang = lang;
    translatePage();
    updateLangSwitcher();
  }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
      || (translations.en && translations.en[key])
      || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });
  }

  function updateLangSwitcher() {
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  function getLang() { return currentLang; }
  function getTranslations() { return translations; }

  function init() {
    currentLang = detectLanguage();
    document.documentElement.lang = currentLang;
    translatePage();
    updateLangSwitcher();

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-switcher__btn');
      if (btn && btn.dataset.lang) {
        setLanguage(btn.dataset.lang);
      }
    });
  }

  return { init, setLanguage, t, getLang, getTranslations, translatePage };
})();

if (typeof module !== 'undefined') module.exports = PG_I18N;
