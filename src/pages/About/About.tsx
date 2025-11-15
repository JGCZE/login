const AboutPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-4xl">
    <h2 className="text-2xl">kompletně AI generated</h2>
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        O Nás
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Jsme tým nadšenců, kteří mění svět jedním projektem najednou
      </p>
    </div>

    {/* Mission Section */}
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Naše Mise
      </h2>
      <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 border-l-4 border-blue-500">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Věříme v sílu technologie a inovace. Naším cílem je vytvářet řešení, která nejen
          řeší problémy, ale inspirují k novému způsobu myšlení. Každý projekt je pro nás
          příležitostí učit se, růst a posouvat hranice možného.
        </p>
      </div>
    </div>

    {/* Team Section */}
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Náš Tým
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Jana Nováková', role: 'CEO & Founder', emoji: '👩‍💼' },
          { name: 'Petr Svoboda', role: 'Lead Developer', emoji: '👨‍💻' },
          { name: 'Marie Dvořáková', role: 'UX Designer', emoji: '🎨' }
        ].map((member, idx) => (
          <div key={idx} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-6xl mb-4">{member.emoji}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Values Section */}
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Naše Hodnoty
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: '💡 Inovace', desc: 'Neustále hledáme nové a lepší způsoby řešení problémů' },
          { title: '🤝 Spolupráce', desc: 'Společně dosahujeme více než každý z nás jednotlivě' },
          { title: '🎯 Kvalita', desc: 'Nikdy nekompromitujeme na kvalitě naší práce' },
          { title: '🌱 Růst', desc: 'Učíme se a rozvíjíme každý den' }
        ].map((value, idx) => (
          <div key={idx} className="p-6 bg-linear-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Section */}
    <div className="text-center bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
      <h2 className="text-3xl font-bold mb-4">Pojďme Spolupracovat</h2>
      <p className="text-lg mb-6 opacity-90">
        Máte projekt nebo nápad? Rádi si s vámi promluvíme!
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Kontaktujte Nás
      </button>
    </div>
  </div>
)

export default AboutPage;
