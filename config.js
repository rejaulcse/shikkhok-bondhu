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
        { title: "ইসলামি আরবি বিশ্ববিদ্যালয়", url: "http://iau.edu.bd" },
        { title: "জাতীয় বিশ্ববিদ্যালয়", url: "https://nu.ac.bd" },
        {
          title: "শিক্ষা বোর্ড",
          children: [
            { title: "মাদ্রাসা বোর্ড", url: "https://bmeb.gov.bd" },
            { title: "দিনাজপুর বোর্ড", url: "https://dinajpureducationboard.gov.bd" },
            { title: "রাজশাহী বোর্ড", url: "https://rajshahieducationboard.gov.bd" },
            { title: "ঢাকা বোর্ড", url: "https://dhakaeducationboard.gov.bd" },
            { title: "সিলেট বোর্ড", url: "https://sylhetboard.gov.bd" },
            { title: "ময়মনসিংহ বোর্ড", url: "https://mymensingheducationboard.gov.bd" },
            { title: "যশোর বোর্ড", url: "https://jessoreboard.gov.bd" },
            { title: "চট্রগ্রাম বোর্ড", url: "https://web.bise-ctg.gov.bd" },
            { title: "কুমিল্লা বোর্ড", url: "https://comillaboard.portal.gov.bd" },
            { title: "বরিশাল বোর্ড", url: "https://barisalboard.gov.bd" },
            { title: "কারিগরি বোর্ড", url: "https://bteb.gov.bd" },
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
        { title: "স্কুল কলেজের নীতিমালা ও পরিপত্র", url: "https://shed.gov.bd/pages/moedu-policies?filters=%7B%22category%22%3A%20%22691995ee933eb65569ddc1be%22%7D" },
        { title: "মাদ্রাসার নীতিমালা ও পরিপত্র", url: "https://dme.gov.bd/pages/policies" },
        { title: "কারিগরি প্রতিষ্ঠানের নীতিমালা ও পরিপত্র", url: "https://tmed.gov.bd/pages/moedu-policies/%E0%A6%AC%E0%A7%87%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%97%E0%A6%B0%E0%A6%BF-%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%B7%E0%A7%8D%E0%A6%A0%E0%A6%BE%E0%A6%A8-%E0%A6%9C%E0%A6%A8%E0%A6%AC%E0%A6%B2-%E0%A6%95%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%AE%E0%A7%8B-%E0%A6%93-%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF%E0%A6%93-%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%BE-%E0%A7%A8%E0%A7%A6%E0%A7%A86-%E0%A6%AD%E0%A7%8B%E0%A6%95%E0%A7%87%E0%A6%B6%E0%A6%A8%E0%A6%BE%E0%A6%B2-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A6%BE%E0%A7%9F-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A7%8B%E0%A6%B2%E0%A6%9C%E0%A6%BF-%E0%A6%AC%E0%A6%BF%E0%A6%8F%E0%A6%AE%E0%A6%9F%E0%A6%BF-%E0%A6%93-%E0%A6%A1%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%8B%E0%A6%AE%E0%A6%BE-wp72cd-69805c3dbd5cfa37c12b5d48" },
      ],
    },
    {
      title: "MPO কপি",
      children: [
        { title: "মাদ্রাসা এমপিও শিট", url: "https://dme.gov.bd" },
        { title: "স্কুল কলেজ এমপিও", url: "https://dshe.gov.bd/pages/static-pages/691997bd933eb65569ddeab5" },
      ],
    },
    {
      title: "MEMIS সেল",
      url: "https://memis.gov.bd",
    },
    {
      title: "EMIS সেল",
      url: "http://103.248.15.123/emis",
    },
    {
      title: "বদলি ব্যবস্থাপনা",
      children: [
        { title: "কলেজ বদলি", url: "https://ngttvacant.vercel.app" },
        { title: "মাদ্রাসা বদলি", url: "https://example.com/madrasha-bodli" },
      ],
    },
    {
      title: "শিক্ষক ও প্রতিষ্ঠানের তথ্য",
      children: [
        { title: "ক্লিক করে EIIN দেখুন", url: "https://locator.eduportalbd.com/institutes/list.php#search" },
        { title: "শিক্ষকদের তথ্য (স্কুল কলেজ)", url: "http://103.248.15.123/EMIS/portal" },
        { title: "শিক্ষকদের তথ্য (মাদ্রাসা)", url: "http://182.252.85.84:3080/" },
        { title: "NTRCA সুপারিশকৃতদের তথ্য-১", url: "http://103.230.104.210:8088/ntrca/c7/app/requisition-list.php?result=true" },
        { title: "NTRCA সুপারিশকৃতদের তথ্য-২", url: "http://103.230.104.210:8088/ntrca/c8/app/requisition-list.php?result=true" },
        { title: "শিক্ষকদের তথ্য (ফোন নাম্বার সহ)", url: "https://report1.memis.gov.bd:8087/" },
      ],
    },
    {
      title: "পাবলিক পরিক্ষার ফলাফল",
      children: [
        { title: "Education board Result Link 1", url: "https://www.educationboardresults.gov.bd/v2/home" },
        { title: "Education board Result Link 2", url: "https://eduboardresults.gov.bd" },
        { title: "Madrasha Board Result Link 3", url: "https://bmeb.gov.bd" },
        { title: "Madrasha Board Result Link 4", url: "https://ebmeb.gov.bd" },
       ],
    },
    {
      title: "সকল শ্রেণীর বই",
      url: "https://nctb.gov.bd/pages/static-pages/695b97ffc4774958d7b70329",
    },
    {
      title: "সকল প্রশিক্ষণ কেন্দ্র",
      children: [
        { title: "NACTAR", url: "https://nactar.gov.bd" },
        { title: "BMTTI", url: "https://bmtti.gov.bd" },
        { title: "NAEM", url: "https://naem.gov.bd" },
        { title: "TT College, Rangpur", url: "https://ttcrangpur.edu.bd" },
      ],
    },
  ],

  designerName: "Designed by Md.Rejaul Islam",
  designerRole: "Lecturer, ICT",
  designerInstitute: "Boro Rangpur Karamatia Kamil Madrasah",
  designerPhoto: "images/designer.jpg", // আপনার ছবি images ফোল্ডারে এই নামে রাখুন (না রাখলে ছবি দেখাবে না, সমস্যা নেই)
};
