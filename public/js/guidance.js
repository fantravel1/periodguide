/* ============================================
   PeriodGuide.com — Today's Guide Engine
   Rules engine + content mapping for daily guidance
   ============================================ */

const PG_GUIDANCE = (() => {
  const t = () => typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

  const DAILY_GUIDANCE = {
    menstrual: {
      summary_en: "Your body is shedding its uterine lining. Prostaglandins are elevated, which can cause cramps, fatigue, and GI symptoms. This is a time for rest and replenishment.",
      summary_es: "Tu cuerpo esta eliminando el revestimiento uterino. Las prostaglandinas estan elevadas, lo que puede causar calambres, fatiga y sintomas gastrointestinales. Es tiempo de descanso y reposicion.",
      summary_fr: "Votre corps elimine la muqueuse uterine. Les prostaglandines sont elevees, ce qui peut causer des crampes, de la fatigue et des symptomes gastro-intestinaux. C'est le moment du repos et du renouvellement.",
      tips: [
        {
          icon: "\uD83D\uDD25",
          title_en: "Apply Heat Therapy",
          title_es: "Aplica Terapia de Calor",
          title_fr: "Appliquez la Thermotherapie",
          desc_en: "A heating pad at 40°C (104°F) on your lower abdomen for 15-20 minutes can be as effective as ibuprofen for cramp relief. Heat increases blood flow and relaxes the myometrium.",
          desc_es: "Una almohadilla termica a 40°C en tu abdomen bajo por 15-20 minutos puede ser tan efectiva como el ibuprofeno para aliviar calambres. El calor aumenta el flujo sanguineo y relaja el miometrio.",
          desc_fr: "Un coussin chauffant a 40°C sur votre bas-ventre pendant 15-20 minutes peut etre aussi efficace que l'ibuprofene pour soulager les crampes. La chaleur augmente le flux sanguin et detend le myometre.",
          evidence: "strong"
        },
        {
          icon: "\uD83D\uDCA4",
          title_en: "Prioritize Sleep & Rest",
          title_es: "Prioriza el Sueno y Descanso",
          title_fr: "Priorisez le Sommeil et le Repos",
          desc_en: "Progesterone drops to its lowest point, which can disrupt sleep architecture. Aim for 8+ hours. Magnesium glycinate before bed may help sleep quality.",
          desc_es: "La progesterona cae a su punto mas bajo, lo que puede alterar la arquitectura del sueno. Apunta a 8+ horas. El glicinato de magnesio antes de dormir puede ayudar a la calidad del sueno.",
          desc_fr: "La progesterone chute a son point le plus bas, ce qui peut perturber l'architecture du sommeil. Visez 8+ heures. Le glycinate de magnesium avant le coucher peut aider la qualite du sommeil.",
          evidence: "moderate"
        },
        {
          icon: "\uD83C\uDF75",
          title_en: "Anti-inflammatory Nutrition",
          title_es: "Nutricion Antiinflamatoria",
          title_fr: "Nutrition Anti-inflammatoire",
          desc_en: "Focus on omega-3 rich foods (salmon, walnuts, flax), leafy greens for iron replacement, and ginger tea which studies show can reduce menstrual pain intensity.",
          desc_es: "Enfocate en alimentos ricos en omega-3 (salmon, nueces, linaza), verduras de hoja para reponer hierro, y te de jengibre que estudios muestran puede reducir la intensidad del dolor menstrual.",
          desc_fr: "Privilegiez les aliments riches en omega-3 (saumon, noix, lin), les legumes verts pour le remplacement du fer, et le the au gingembre dont les etudes montrent qu'il peut reduire l'intensite de la douleur menstruelle.",
          evidence: "moderate"
        }
      ],
      deep_science_en: "During menstruation (days 1-5), estrogen and progesterone are at their lowest. The endometrial lining breaks down as spiral arteries constrict. Prostaglandin F2-alpha drives myometrial contractions. NSAIDs work by inhibiting cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis. Iron loss averages 15-30mg per cycle.",
      deep_science_es: "Durante la menstruacion (dias 1-5), el estrogeno y la progesterona estan en su punto mas bajo. El revestimiento endometrial se descompone cuando las arterias espirales se contraen. La prostaglandina F2-alfa impulsa las contracciones miometriales. Los AINEs funcionan inhibiendo las enzimas ciclooxigenasa (COX), reduciendo la sintesis de prostaglandinas. La perdida de hierro promedia 15-30mg por ciclo.",
      deep_science_fr: "Pendant les menstruations (jours 1-5), l'estrogene et la progesterone sont a leur plus bas. La muqueuse endometriale se decompose lorsque les arteres spiralees se contractent. La prostaglandine F2-alpha provoque les contractions myometriales. Les AINS fonctionnent en inhibant les enzymes cyclooxygenase (COX), reduisant la synthese des prostaglandines. La perte de fer moyenne est de 15-30mg par cycle."
    },

    follicular: {
      summary_en: "Estrogen is rising steadily, bringing increased energy, clearer thinking, and improved mood. Your body is building a new endometrial lining. This is often the 'feel-good' phase.",
      summary_es: "El estrogeno esta subiendo de forma constante, trayendo mas energia, pensamiento mas claro y mejor animo. Tu cuerpo esta construyendo un nuevo revestimiento endometrial. Esta es a menudo la fase de 'sentirse bien'.",
      summary_fr: "L'estrogene augmente regulierement, apportant plus d'energie, une pensee plus claire et une meilleure humeur. Votre corps construit une nouvelle muqueuse endometriale. C'est souvent la phase 'bien-etre'.",
      tips: [
        {
          icon: "\uD83C\uDFC3",
          title_en: "Increase Exercise Intensity",
          title_es: "Aumenta la Intensidad del Ejercicio",
          title_fr: "Augmentez l'Intensite de l'Exercice",
          desc_en: "Rising estrogen improves muscle recovery and pain tolerance. This is an ideal time for strength training, HIIT, or trying new physical activities. Your body adapts well to progressive challenge now.",
          desc_es: "El estrogeno en aumento mejora la recuperacion muscular y la tolerancia al dolor. Este es un momento ideal para entrenamiento de fuerza, HIIT o probar nuevas actividades fisicas.",
          desc_fr: "L'estrogene croissant ameliore la recuperation musculaire et la tolerance a la douleur. C'est le moment ideal pour la musculation, le HIIT ou essayer de nouvelles activites physiques.",
          evidence: "moderate"
        },
        {
          icon: "\uD83E\uDD57",
          title_en: "Fuel for Growth",
          title_es: "Combustible para el Crecimiento",
          title_fr: "Carburant pour la Croissance",
          desc_en: "Support rising estrogen with phytoestrogen-containing foods (flax, soy, legumes), fermented foods for gut health, and protein-rich meals to support muscle building and repair.",
          desc_es: "Apoya el estrogeno en aumento con alimentos que contienen fitoestrogenos (linaza, soja, legumbres), alimentos fermentados para la salud intestinal y comidas ricas en proteina.",
          desc_fr: "Soutenez l'estrogene croissant avec des aliments contenant des phytoestrogenes (lin, soja, legumineuses), des aliments fermentes pour la sante intestinale et des repas riches en proteines.",
          evidence: "emerging"
        },
        {
          icon: "\uD83D\uDCDD",
          title_en: "Plan & Create",
          title_es: "Planifica y Crea",
          title_fr: "Planifiez et Creez",
          desc_en: "Estrogen enhances verbal fluency, memory, and creative thinking. Schedule brainstorming sessions, important presentations, or creative work. Your brain is primed for learning.",
          desc_es: "El estrogeno mejora la fluidez verbal, la memoria y el pensamiento creativo. Programa sesiones de brainstorming, presentaciones importantes o trabajo creativo.",
          desc_fr: "L'estrogene ameliore la fluence verbale, la memoire et la pensee creative. Programmez des seances de brainstorming, des presentations importantes ou du travail creatif.",
          evidence: "moderate"
        }
      ],
      deep_science_en: "The follicular phase (days 6-13) is driven by FSH stimulating ovarian follicle development. Rising estradiol (E2) from the dominant follicle thickens the endometrium. Estrogen upregulates serotonin and dopamine receptor sensitivity, explaining the mood boost. Insulin sensitivity tends to be at its best during this phase.",
      deep_science_es: "La fase folicular (dias 6-13) es impulsada por la FSH que estimula el desarrollo de foliculos ovaricos. El estradiol (E2) en aumento del foliculo dominante engrosa el endometrio. El estrogeno aumenta la sensibilidad de los receptores de serotonina y dopamina, explicando la mejora del animo.",
      deep_science_fr: "La phase folliculaire (jours 6-13) est dirigee par la FSH stimulant le developpement des follicules ovariens. L'estradiol (E2) croissant du follicule dominant epaissit l'endometre. L'estrogene augmente la sensibilite des recepteurs de serotonine et dopamine, expliquant l'amelioration de l'humeur."
    },

    ovulation: {
      summary_en: "Estrogen peaks and LH surges, triggering egg release. This is typically when energy, confidence, and sociability are at their highest. Your body is at peak fertility.",
      summary_es: "El estrogeno alcanza su maximo y la LH se dispara, provocando la liberacion del ovulo. Este es tipicamente cuando la energia, confianza y sociabilidad estan en su punto mas alto.",
      summary_fr: "L'estrogene atteint son pic et la LH monte en fleche, declenchant la liberation de l'ovule. C'est typiquement quand l'energie, la confiance et la sociabilite sont a leur maximum.",
      tips: [
        {
          icon: "\uD83D\uDCA7",
          title_en: "Hydrate & Electrolytes",
          title_es: "Hidratate y Electrolitos",
          title_fr: "Hydratez-vous et Electrolytes",
          desc_en: "Estrogen promotes water retention while progesterone begins to rise. Support your body with extra hydration and electrolyte-rich foods. Watch for mid-cycle bloating.",
          desc_es: "El estrogeno promueve la retencion de agua mientras la progesterona comienza a subir. Apoya tu cuerpo con hidratacion extra y alimentos ricos en electrolitos.",
          desc_fr: "L'estrogene favorise la retention d'eau tandis que la progesterone commence a monter. Soutenez votre corps avec une hydratation supplementaire et des aliments riches en electrolytes.",
          evidence: "moderate"
        },
        {
          icon: "\u26A1",
          title_en: "Peak Performance Window",
          title_es: "Ventana de Rendimiento Maximo",
          title_fr: "Fenetre de Performance Maximale",
          desc_en: "This is typically your highest-energy phase. Great for demanding workouts, presentations, difficult conversations, and social events. Maximize this natural energy peak.",
          desc_es: "Esta es tipicamente tu fase de mayor energia. Ideal para entrenamientos exigentes, presentaciones, conversaciones dificiles y eventos sociales.",
          desc_fr: "C'est typiquement votre phase de plus haute energie. Ideal pour les entrainements exigeants, les presentations, les conversations difficiles et les evenements sociaux.",
          evidence: "emerging"
        },
        {
          icon: "\uD83D\uDCCA",
          title_en: "Track Ovulation Signs",
          title_es: "Registra Senales de Ovulacion",
          title_fr: "Suivez les Signes d'Ovulation",
          desc_en: "Note cervical mucus changes (egg-white consistency), slight temperature rise, and any mittelschmerz (mid-cycle pain). These markers help confirm ovulation timing.",
          desc_es: "Nota los cambios en el moco cervical (consistencia de clara de huevo), ligero aumento de temperatura y cualquier mittelschmerz (dolor a mitad de ciclo).",
          desc_fr: "Notez les changements de glaire cervicale (consistance de blanc d'oeuf), legere hausse de temperature et toute douleur mittelschmerz (douleur a mi-cycle).",
          evidence: "strong"
        }
      ],
      deep_science_en: "Ovulation occurs around day 14 when the LH surge (triggered by peak estradiol >200pg/mL) causes the dominant follicle to rupture. The egg survives ~24 hours. Testosterone also peaks briefly, contributing to increased libido and assertiveness. Basal body temperature rises ~0.3°C post-ovulation due to progesterone.",
      deep_science_es: "La ovulacion ocurre alrededor del dia 14 cuando la oleada de LH (provocada por el estradiol pico >200pg/mL) causa la ruptura del foliculo dominante. El ovulo sobrevive ~24 horas. La testosterona tambien alcanza un pico breve, contribuyendo al aumento de la libido y la asertividad.",
      deep_science_fr: "L'ovulation se produit vers le jour 14 lorsque la poussee de LH (declenchee par le pic d'estradiol >200pg/mL) provoque la rupture du follicule dominant. L'ovule survit ~24 heures. La testosterone atteint egalement un bref pic, contribuant a l'augmentation de la libido et de l'assertivite."
    },

    luteal: {
      summary_en: "Progesterone rises and dominates. You may feel a shift toward introversion, slower pace, and increased appetite. PMS symptoms can appear in the late luteal phase.",
      summary_es: "La progesterona sube y domina. Puedes sentir un cambio hacia la introversion, un ritmo mas lento y aumento del apetito. Los sintomas de SPM pueden aparecer en la fase lutea tardia.",
      summary_fr: "La progesterone augmente et domine. Vous pouvez ressentir un virage vers l'introversion, un rythme plus lent et une augmentation de l'appetit. Les symptomes du SPM peuvent apparaitre en phase luteale tardive.",
      tips: [
        {
          icon: "\uD83E\uDDD8",
          title_en: "Gentle Movement & Calm",
          title_es: "Movimiento Suave y Calma",
          title_fr: "Mouvement Doux et Calme",
          desc_en: "Swap intense workouts for yoga, pilates, swimming, or walks in nature. Progesterone has a calming effect on GABA receptors—lean into that. Overtraining now may worsen PMS.",
          desc_es: "Cambia los entrenamientos intensos por yoga, pilates, natacion o caminatas en la naturaleza. La progesterona tiene un efecto calmante en los receptores GABA—apoyate en eso.",
          desc_fr: "Echangez les entrainements intenses contre du yoga, pilates, natation ou promenades dans la nature. La progesterone a un effet calmant sur les recepteurs GABA—appuyez-vous la-dessus.",
          evidence: "moderate"
        },
        {
          icon: "\uD83C\uDF36\uFE0F",
          title_en: "Complex Carbs & Magnesium",
          title_es: "Carbohidratos Complejos y Magnesio",
          title_fr: "Glucides Complexes et Magnesium",
          desc_en: "Progesterone increases metabolic rate by ~100-300 calories/day. Honor increased hunger with complex carbs (sweet potato, oats) and magnesium-rich foods (dark chocolate, pumpkin seeds) which can reduce PMS symptoms.",
          desc_es: "La progesterona aumenta la tasa metabolica ~100-300 calorias/dia. Honra el hambre aumentada con carbohidratos complejos (camote, avena) y alimentos ricos en magnesio (chocolate oscuro, semillas de calabaza).",
          desc_fr: "La progesterone augmente le taux metabolique de ~100-300 calories/jour. Honorez la faim accrue avec des glucides complexes (patate douce, flocons d'avoine) et des aliments riches en magnesium (chocolat noir, graines de citrouille).",
          evidence: "moderate"
        },
        {
          icon: "\uD83C\uDF3F",
          title_en: "Support Your Nervous System",
          title_es: "Apoya Tu Sistema Nervioso",
          title_fr: "Soutenez Votre Systeme Nerveux",
          desc_en: "Progesterone withdrawal in late luteal phase can trigger anxiety and mood shifts. Prioritize sleep hygiene, limit caffeine, and consider adaptogenic herbs like ashwagandha (check contraindications first).",
          desc_es: "La retirada de progesterona en la fase lutea tardia puede provocar ansiedad y cambios de humor. Prioriza la higiene del sueno, limita la cafeina y considera hierbas adaptogenas como ashwagandha (verifica contraindicaciones primero).",
          desc_fr: "Le retrait de la progesterone en phase luteale tardive peut declencher de l'anxiete et des changements d'humeur. Priorisez l'hygiene du sommeil, limitez la cafeine et considerez des herbes adaptogenes comme l'ashwagandha (verifiez les contre-indications d'abord).",
          evidence: "emerging"
        }
      ],
      deep_science_en: "The luteal phase (days 17-28) is dominated by progesterone from the corpus luteum. Progesterone raises basal body temperature, slows GI motility (causing bloating), and acts as a CNS depressant via GABA-A receptor modulation. If no implantation occurs, the corpus luteum degenerates, progesterone falls, and menstruation begins.",
      deep_science_es: "La fase lutea (dias 17-28) esta dominada por la progesterona del cuerpo luteo. La progesterona eleva la temperatura basal, ralentiza la motilidad gastrointestinal (causando hinchazon) y actua como depresor del SNC a traves de la modulacion del receptor GABA-A.",
      deep_science_fr: "La phase luteale (jours 17-28) est dominee par la progesterone du corps jaune. La progesterone eleve la temperature basale, ralentit la motilite gastro-intestinale (causant des ballonnements) et agit comme depresseur du SNC via la modulation du recepteur GABA-A."
    }
  };

  const RED_FLAGS = [
    { key: 'safety_red_flag_sudden_pain', icon: '\u26A0\uFE0F' },
    { key: 'safety_red_flag_heavy_bleeding', icon: '\uD83C\uDD98' },
    { key: 'safety_red_flag_fever', icon: '\uD83C\uDF21\uFE0F' },
    { key: 'safety_red_flag_fainting', icon: '\uD83D\uDCA5' }
  ];

  function getGuidance(phase, lang = 'en') {
    const data = DAILY_GUIDANCE[phase] || DAILY_GUIDANCE.menstrual;
    const suffix = '_' + lang;
    return {
      summary: data['summary' + suffix] || data.summary_en,
      tips: data.tips.map(tip => ({
        icon: tip.icon,
        title: tip['title' + suffix] || tip.title_en,
        desc: tip['desc' + suffix] || tip.desc_en,
        evidence: tip.evidence
      })),
      deepScience: data['deep_science' + suffix] || data.deep_science_en
    };
  }

  function getRedFlags() {
    return RED_FLAGS;
  }

  function renderGuidancePanel(container, phase, lang = 'en', mode = 'simple') {
    if (!container) return;
    const guidance = getGuidance(phase, lang);
    const tr = typeof PG_I18N !== 'undefined' ? PG_I18N.t : (k) => k;

    const evidenceLabels = {
      strong: tr('evidence_strong'),
      moderate: tr('evidence_moderate'),
      emerging: tr('evidence_emerging'),
      traditional: tr('evidence_traditional')
    };

    let html = `
      <div class="guidance-panel">
        <p class="guidance-panel__summary">${guidance.summary}</p>

        <div class="guidance-panel__tips">
          ${guidance.tips.map(tip => `
            <div class="action-card">
              <div class="action-card__icon">${tip.icon}</div>
              <div class="action-card__content">
                <div class="action-card__header">
                  <h4 class="action-card__title">${tip.title}</h4>
                  <span class="evidence-badge evidence-badge--${tip.evidence}">${evidenceLabels[tip.evidence]}</span>
                </div>
                <p class="action-card__desc">${tip.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        ${mode === 'deep' ? `
          <div class="guidance-panel__deep">
            <h4>${tr('tg_deep_view')}</h4>
            <p class="text-sm text-muted">${guidance.deepScience}</p>
          </div>
        ` : ''}

        <div class="guidance-panel__safety alert alert--warning">
          <div class="alert__icon">\u26A0\uFE0F</div>
          <div class="alert__content">
            <div class="alert__title">${tr('tg_when_to_seek_care')}</div>
            <ul>
              ${RED_FLAGS.map(f => `<li>${f.icon} ${tr(f.key)}</li>`).join('')}
            </ul>
            <p class="text-xs mt-2">${tr('safety_red_flag_disclaimer')}</p>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  return { getGuidance, getRedFlags, renderGuidancePanel, DAILY_GUIDANCE };
})();
