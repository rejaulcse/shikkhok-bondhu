/* ==========================================================================
   এই ফাইলটি এডিট করেই আপনার অ্যাপের সব বাটন, সাব-মেনু ও লিংক পরিবর্তন করতে পারবেন।
   index.html বা app.js এ হাত দেয়ার দরকার নেই।

   দুই ধরনের আইটেম আছে:

   ১) সরাসরি লিংক বাটন:
      { title: "বাটনের নাম", url: "https://example.com" }

   ২) সাব-মেনু (ভিতরে আরো বাটন থাকবে) — যত লেভেল খুশি নেস্ট করা যাবে:
      { title: "বাটনের নাম", children: [ ...আরো আইটেম... ] }

   টাইটেল ও আইকন এখানেই বদলাতে পারবেন (নিচে APP_CONFIG এর শুরুতে)।
   ========================================================================== */

const APP_CONFIG = {
  appTitle: "শিক্ষক সেবা",
  heroImage: "images/hero.jpg", // এই ছবিটি বদলে আপনার নিজের ছবি (images ফোল্ডারে রেখে নাম মিলিয়ে) দিন
  themeColor: "#0A3A3D",

  menu: [
    {
      title: "সকল নোটিশ",
      children: [
        { title: "শিক্ষা মন্ত্রনালয় (স্কুল-কলেজ)", url: "https://shed.gov.bd" },
        { title: "শিক্ষা মন্ত্রনালয় (মাদ্রাসা ও কারিগরি)", url: "https://tmed.gov.bd" },
        { title: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর (মাউশি)", url: "https://dshe.gov.bd" },
        { title: "মাদ্রাসা শিক্ষা অধিদপ্তর", url: "https://dme.gov.bd" },
        { title: "কারিগরি শিক্ষা অধিদপ্তর", url: "https://techedu.gov.bd" },
        { title: "ইসলামি আরবি বিশ্ববিদ্যালয়", url: "https://iau.edu.bd" },
        { title: "জাতীয় বিশ্ববিদ্যালয়", url: "https://nu.ac.bd" },
        {
          title: "শিক্ষা বোর্ড",
          children: [
            { title: "মাদ্রাসা বোর্ড", url: "https://example.com/madrasha-board" },
            { title: "দিনাজপুর বোর্ড", url: "https://example.com/dinajpur-board" },
            { title: "রাজশাহী বোর্ড", url: "https://example.com/rajshahi-board" },
            { title: "ঢাকা বোর্ড", url: "https://example.com/dhaka-board" },
            { title: "সিলেট বোর্ড", url: "https://example.com/sylhet-board" },
            { title: "ময়মনসিংহ বোর্ড", url: "https://example.com/mymensingh-board" },
            { title: "যশোর বোর্ড", url: "https://example.com/jessore-board" },
            { title: "চট্রগ্রাম বোর্ড", url: "https://example.com/chittagong-board" },
            { title: "কুমিল্লা বোর্ড", url: "https://example.com/comilla-board" },
            { title: "বরিশাল বোর্ড", url: "https://example.com/barisal-board" },
            { title: "কারিগরি বোর্ড", url: "https://example.com/technical-board" },
          ],
        },
        { title: "NTRCA", url: "https://ntrca.gov.bd" },
        { title: "ব্যানবেইস", url: "https://banbeis.gov.bd" },
        { title: "উপবৃত্তি সংক্রান্ত", url: "https://pmeat.gov.bd" },
      ],
    },
    {
      title: "নীতিমালা এবং পরিপত্র",
      children: [
        { title: "স্কুল কলেজের নীতিমালা ও পরিপত্র", url: "https://example.com/school-college-nitimala" },
        { title: "মাদ্রাসার নীতিমালা ও পরিপত্র", url: "https://example.com/madrasha-nitimala" },
        { title: "কারিগরি প্রতিষ্ঠানের নীতিমালা ও পরিপত্র", url: "https://example.com/karigori-nitimala" },
      ],
    },
    {
      title: "MPO কপি",
      children: [
        { title: "মাদ্রাসা এমপিও শিট", url: "https://example.com/madrasha-mpo-sheet" },
        { title: "স্কুল কলেজ এমপিও", url: "https://example.com/school-college-mpo" },
      ],
    },
    {
      title: "MEMIS সেল",
      url: "https://memis.gov.bd",
    },
    {
      title: "EMIS সেল",
      url: "https://emis.gov.bd",
    },
    {
      title: "শিক্ষক ও প্রতিষ্ঠানের তথ্য",
      children: [
        { title: "ক্লিক করে EIIN দেখুন", url: "https://example.com/eiin" },
        { title: "শিক্ষকদের তথ্য (স্কুল কলেজ)", url: "https://example.com/teacher-info-school-college" },
        { title: "শিক্ষকদের তথ্য (মাদ্রাসা)", url: "https://example.com/teacher-info-madrasha" },
        { title: "NTRCA সুপারিশকৃতদের তথ্য-১", url: "https://example.com/ntrca-recommend-1" },
        { title: "NTRCA সুপারিশকৃতদের তথ্য-২", url: "https://example.com/ntrca-recommend-2" },
        { title: "শিক্ষকদের তথ্য (ফোন নাম্বার সহ)", url: "https://example.com/teacher-info-phone" },
        { title: "আমি লুকিয়ে আছি", url: "https://example.com/hidden" },
      ],
    },
    {
      title: "পাবলিক পরিক্ষার ফলাফল",
      children: [
        { title: "লিংক ১", url: "https://example.com/link-1" },
        { title: "লিংক ২", url: "https://example.com/link-2" },
        { title: "লিংক ৩", url: "https://example.com/link-3" },
        { title: "লিংক ৪", url: "https://example.com/link-4" },
      ],
    },
    {
      title: "সকল শ্রেণীর বই",
      url: "https://nctb.gov.bd",
    },
    {
      title: "সকল প্রশিক্ষণ কেন্দ্র",
      children: [
        { title: "NACTAR", url: "https://example.com/nactar" },
        { title: "BMTTI", url: "https://example.com/bmtti" },
        { title: "NAEM", url: "https://example.com/naem" },
        { title: "TT College, Rangpur", url: "https://example.com/tt-college-rangpur" },
      ],
    },
  ],

  designerName: "designed by আপনার নাম",
  designerRole: "Assistant Teacher, ICT",
  designerInstitute: "আপনার প্রতিষ্ঠানের নাম",
  designerPhoto: "images/designer.jpg", // আপনার ছবি images ফোল্ডারে এই নামে রাখুন (না রাখলে ছবি দেখাবে না, সমস্যা নেই)
};
