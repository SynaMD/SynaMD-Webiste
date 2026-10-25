// All the website text in one place: English (en) and Arabic (ar)
const texts = {
  en: {
    home: "Home",
    contact: "Contact",
    taglineTop: "Your Health, Your Community,",
    taglineBottom: "Your Impact.",

    problemTitle: "The Problem",
problemText: "Everyone has a health story — but today it lies in fragments: a record in one hospital, a pre-scription in another, results that never left the lab. SynaMD starts from a simple belief: your health belongs with you. Your complete- medical history — structured, simple, and with you at every visit. A community where you can share a diagnosis, a worry, or a small victory with people walking the same road. And when your community is in need of blood donation, SynaMD shows you where your impact matters most.",
    solutionTitle: "Our Solution: Three Pillars",
    solutionSub: "Your health, your community, your impact",
    pillars: [
      { icon: "/medical_icon.png", title: "Medical File", sub: "Your Health", text: " Conditions, surgeries, medications, allergies, ICU admissions, vaccinations, labs, family history, and prenatal care — your complete history, structured the way clinicians think." },
      { icon: "/community_icon.png", title: "Community", sub: "Your People",   text: "Join or create communities for any health, medical, or wellbeing topic. Connect anonymously with people who share your diagnosis — share struggles, concerns, and advice with people who truly get it.",},
{ icon: "/donation_blood_icon.png", title: "Blood Donation", sub: "Your Impact", text: "See nearby hospitals that need blood right now — and answer the call. Every donation becomes part of your own record: impact you can point to." },    ],

    whyTitle: "Why Now — Why Saudi Arabia",
    whyText:
      "Vision 2030 has made digital health a national ambition, and a new generation expects their health to live where their life does: on their phone. SynaMD arrives at exactly that moment. A medical record that belongs to the patient, not the filing cabinet. Communities where a diagnosis starts a conversation instead of ending one. And a donation map that turns someone's emergency into your moment to act. Patient owned. Standards-based. Arabic-first. Built for how care actually works in the Kingdom.",

    contactTitle: "Get in Touch",
    emailLabel: "SynaMD Email",
    email: "SynaMD@outlook.com",
    linkedinLabel: "Founder's LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/saraalidan",
  },

  ar: {
    home: "الرئيسية",
    contact: "تواصل",
    taglineTop: "صحتك و مجتمعك",
    taglineBottom: "و بصمتك",

    problemTitle: "ماهي المشكلة؟",
    problemText:
      "عندما يتعلق الأمر بالصحة، فإن لكل إنسان قصة، ولكن في وضعها الراهن مبعثرة، جزء منها كسجل في مستشفى، وجزء كوصفة في منشأة أخرى أو تحليل طبي لم يغادر أدراج المختبر. ساينامد بدأ بمفهومه البسيط، وهو أن كل مايتعلق بصحتك ينتمي لك، حيث أنك الوحيد القادر على جمع الأجزاء المتناثرة في ملف طبي واحد منظم ومتكامل تحمله معك في كل زيارة. كما يمكنك الانضمام إلى مجتمعات طبية تعنى بالصحة بجميع أطوارها وأشكالها، حيث تلتقي أولئك الذين يشاركونك المعاناة و المخاوف أو الاهتمامات والانتصارات الصحية، وعندما يكون مجتمعك بحاجة لك (للتبرع بالدم) فساينامد يحرص على مساعدتك في ترك بصمتك.",

    solutionTitle: "الحل يكمن في ثلاث ركائز",
    solutionSub: "صحتك، مجتمعك، بصمتك",
    pillars: [
      { icon: "/medical_icon.png", title: "الملف الطبي", sub: "صحتك", text: "الحالة الصحية، الإجراءات الطبية، الحساسية، الأدوية، زيارات العناية المركزة، جدول التطعيمات، التحاليل الطبية، التاريخ الطبي للعائلة ومتابعة الحمل للسيدات، حيث الملف الطبي متكامل بصورة منظمة ", },
      { icon: "/community_icon.png", title: "المجتمع", sub: "مجتمعك", text: "انضم أو أنشئ مجتمعك الخاص، لأي موضوع صحي أو طبي أو متعلق بالجودة الحياتية. تواصل مع من يشاركونك المعاناة والمخاوف و الاهتمامات والتحديات." },
      { icon: "/donation_blood_icon.png", title: "التبرع بالدم", sub: "بصمتك", text: "تستطيع دعم مجتمعك وذلك بالتبرع بالدم للمنشآت الصحية القريبة منك، كل تبرع هو أكثر من مجرد إضافة لملفك الطبي وإنما بصمة تدل على عطائك"}],

    whyTitle: "لماذا الآن، في المملكة العربية السعودية؟",
    whyText:"وضعت رؤية 2030  الحجر الأساس لدعم التحول الرقمي في كافة المجالات، وعلى رأسها الصحة حيث جعلتها أولوية وطنية، كما أصبح الجيل الجديد متطلعًا لأن تكون صحته جزءًا من عالمه الرقمي، متاحة له أينما كان، تمامًا كما هي بقية جوانب حياته، وهنا يأتي دور ساينامد، فضلًا عن أجزاء ملفك الطبي المبعثرة في مختلف أنظمة المنشآت الصحية، فإن ساينامد يقدم تجربة فريدة حيث ملف طبي للمستخدم منظم، ومتكامل، ومجتمعات صحية يصبح فيها التشخيص بداية للحوار والتواصل، لا نهاية له كما يوفر منصة للتبرع بالدم وترسيخ الأثر المجتمعي. ",
      
    contactTitle: "تواصل معنا",
    emailLabel: "البريد الالكتروني SynaMD",
    email: "SynaMD@outlook.com",
    linkedinLabel: "صفحة المؤسس في لنكد إن",
    linkedinUrl: "https://www.linkedin.com/in/saraalidan",
  },
};

export default texts;
