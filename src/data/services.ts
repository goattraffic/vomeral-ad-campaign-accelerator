export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: 'zarzadzanie-social-media',
    title: 'Zarządzanie Social Media',
    short: 'Kompleksowa obsługa Twoich profili społecznościowych z codziennym publikowaniem treści i monitoringiem',
    price: 'od 2 500 PLN/mies',
    features: [
      'Strategia content marketingowa',
      'Codzienne publikacje',
      'Monitoring i reagowanie na komentarze',
      'Miesięczne raporty analityczne',
      'Optymalizacja kampanii reklamowych'
    ],
    contentHtml: `
      <h2>Profesjonalne Zarządzanie Mediami Społecznościowymi</h2>
      <p>W dzisiejszym cyfrowym świecie obecność w mediach społecznościowych to konieczność, a nie wybór. Nasze kompleksowe usługi zarządzania social media pomagają Twojej marce budować silną i autentyczną obecność na platformach społecznościowych, które są najważniejsze dla Twojego biznesu.</p>
      
      <h3>Co obejmuje nasza usługa?</h3>
      <p>Oferujemy pełen zakres działań związanych z prowadzeniem profili społecznościowych. Zaczynamy od szczegółowej analizy Twojej branży i konkurencji, następnie opracowujemy strategię dopasowaną do Twoich celów biznesowych. Tworzymy unikalne treści, które angażują Twoją społeczność i budują rozpoznawalność marki.</p>
      
      <h3>Strategia content marketingowa</h3>
      <p>Każda skuteczna obecność w social media zaczyna się od solidnej strategii. Nasz zespół ekspertów analizuje Twoją grupę docelową, identyfikuje najlepsze godziny publikacji i określa tone of voice, który rezonuje z Twoimi odbiorcami. Opracowujemy kalendarz publikacji dostosowany do specyfiki Twojej branży i sezonowości Twojego biznesu.</p>
      
      <h3>Tworzenie angażujących treści</h3>
      <p>Content is king - i my to doskonale rozumiemy. Codziennie tworzymy i publikujemy wysokiej jakości treści, które przyciągają uwagę i zachęcają do interakcji. Od profesjonalnych grafik, przez captivating copywriting, po video content - wszystko dostosowane do Twojej marki.</p>
      
      <h3>Community management</h3>
      <p>Budowanie społeczności to kluczowy element sukcesu w social media. Nasz zespół na bieżąco monitoruje Twoje profile, odpowiada na komentarze, wiadomości prywatne i reaguje na mentions. Budujemy pozytywne relacje z Twoimi followersami i przekształcamy ich w lojalnych ambasadorów marki.</p>
      
      <h3>Analityka i raportowanie</h3>
      <p>Każdego miesiąca dostarczamy szczegółowe raporty analityczne, które pokazują realny wpływ naszych działań na rozwój Twojego biznesu. Analizujemy wskaźniki engagement, reach, impressions oraz conversion rate. Na podstawie danych optymalizujemy strategię, aby osiągać coraz lepsze wyniki.</p>
      
      <h3>Reklamy społecznościowe</h3>
      <p>Organiczny reach to podstawa, ale reklamy social media mogą znacznie przyspieszyć rozwój Twojej marki. Tworzymy i optymalizujemy kampanie reklamowe na Facebook Ads, Instagram Ads, LinkedIn Ads i innych platformach, zapewniając maksymalny zwrot z inwestycji.</p>
      
      <h3>Dlaczego warto wybrać Vomeral?</h3>
      <p>Mamy wieloletnie doświadczenie w branży SMM i portfolio zadowolonych klientów z różnych sektorów. Nasz zespół składa się z pasjonatów social media, którzy na bieżąco śledzą trendy i algorytmy platform. Oferujemy indywidualne podejście do każdego klienta i transparentną komunikację na każdym etapie współpracy.</p>
    `
  },
  {
    slug: 'kreacja-treści',
    title: 'Kreacja Treści',
    short: 'Produkcja wysokiej jakości content - grafiki, zdjęcia, video, copywriting idealnie dopasowane do Twojej marki',
    price: 'od 3 000 PLN/mies',
    features: [
      'Profesjonalne sesje zdjęciowe',
      'Grafika i design do social media',
      'Copywriting dopasowany do grupy docelowej',
      'Video content (Reels, Stories, TikTok)',
      'Infografiki i wizualizacje danych',
      'UGC i Brand Content'
    ],
    contentHtml: `
      <h2>Kreatywna Produkcja Treści dla Social Media</h2>
      <p>W erze przesycenia informacyjnego wyróżniająca się kreacja to klucz do sukcesu. Specjalizujemy się w tworzeniu unikalnych, angażujących treści, które przyciągają uwagę, budują emocjonalną więź z marką i generują realne konwersje.</p>
      
      <h3>Pełny zakres produkcji content</h3>
      <p>Od pomysłu do realizacji - oferujemy kompleksowe usługi kreacji treści dostosowane do specyfiki każdej platformy social media. Nasz zespół kreatywny składa się z grafików, fotografów, videografów, copywriterów i strategów content marketingowych, którzy wspólnie tworzą spójne narracje brandowe.</p>
      
      <h3>Fotografia produktowa i lifestylowa</h3>
      <p>Profesjonalne zdjęcia to podstawa skutecznej komunikacji w social media. Organizujemy sesje zdjęciowe w studio lub plenerze, tworzymy content lifestylowy, który pokazuje Twoje produkty w naturalnym kontekście użycia. Dbamy o każdy detal - od stylizacji, przez oświetlenie, po postprodukcję.</p>
      
      <h3>Grafika i design</h3>
      <p>Tworzymy eye-catching grafiki, które zatrzymują scroll. Od prostych postów informacyjnych, przez karuzele edukacyjne, po złożone infografiki - wszystko w spójnej identyfikacji wizualnej Twojej marki. Projektujemy również szablony Stories, covery, banery i inne elementy wizualne.</p>
      
      <h3>Video content - format przyszłości</h3>
      <p>Video to obecnie najbardziej angażujący format content w social media. Produkujemy Reels, TikToki, Stories, IGTV, YouTube videos - krótkie formy i długie. Od koncepcji, przez nagranie, po montaż i postprodukcję. Tworzymy treści, które nie tylko informują, ale przede wszystkim bawią i inspirują.</p>
      
      <h3>Copywriting, który sprzedaje</h3>
      <p>Świetna grafika to połowa sukcesu - druga połowa to przekonujący copy. Nasi copywriterzy tworzą teksty, które angażują, edukują i prowadzą do działania. Od microcopy do Stories, przez caption do postów, po długie formy do blogów i artykułów - każde słowo ma znaczenie.</p>
      
      <h3>UGC i Brand Content</h3>
      <p>User Generated Content buduje autentyczność i trust. Pomagamy organizować kampanie UGC, współpracujemy z micro-influencerami i twórcami treści, którzy naturalne promują Twoją markę. Tworzymy również Brand Content w stylu UGC, który wygląda organicznie i autentycznie.</p>
      
      <h3>Proces produkcji</h3>
      <p>Każdy projekt zaczyna się od briefu i sesji kreatywnej, podczas której wspólnie definiujemy cele, grupę docelową i kierunek kreatywny. Następnie nasz zespół opracowuje koncepcje, które prezentujemy do akceptacji. Po zatwierdzeniu przechodzimy do realizacji - produkcji zdjęć, grafik, video. Końcowym etapem jest delivery gotowych materiałów w formatach zoptymalizowanych pod każdą platformę.</p>
    `
  },
  {
    slug: 'kampanie-influencer',
    title: 'Kampanie Influencer',
    short: 'Strategiczne kampanie z influencerami - od micro po macro influencers, z pełną obsługą i raportowaniem ROI',
    price: 'od 5 000 PLN/kampania',
    features: [
      'Identyfikacja odpowiednich influencerów',
      'Negocjacje i kontrakty',
      'Brief kreatywny i guidelines',
      'Koordynacja kampanii',
      'Tracking i raportowanie efektów',
      'Budowanie długoterminowych relacji'
    ],
    contentHtml: `
      <h2>Skuteczny Influencer Marketing</h2>
      <p>Influencer marketing to jeden z najskuteczniejszych sposobów dotarcia do targetowanej grupy odbiorców z autentycznym przekazem. Specjalizujemy się w projektowaniu i realizacji kampanii influencer marketingowych, które generują realne wyniki biznesowe - od brand awareness, przez engagement, po konwersje sprzedażowe.</p>
      
      <h3>Strategiczne podejście do influencer marketingu</h3>
      <p>Każda skuteczna kampania zaczyna się od solidnej strategii. Analizujemy Twoją markę, grupę docelową, cele kampanii i budżet. Na tej podstawie opracowujemy strategię influencer marketingową, która określa typ influencerów (nano, micro, mid-tier, macro, mega), platformy (Instagram, TikTok, YouTube, Facebook), formaty content (posty, Stories, Reels, video) i KPI kampanii.</p>
      
      <h3>Selekcja influencerów - jakość nad ilością</h3>
      <p>Wykorzystujemy zaawansowane narzędzia analityczne do identyfikacji influencerów, którzy naprawdę pasują do Twojej marki. Nie patrzymy tylko na liczbę followerów - analizujemy engagement rate, jakość społeczności, autentyczność interakcji, historię współprac i brand fit. Weryfikujemy influencerów pod kątem fake followers i botów.</p>
      
      <h3>Negocjacje i kontrakty</h3>
      <p>Prowadzenie negocjacji z influencerami to sztuka. Nasz zespół ma doświadczenie w negocjowaniu korzystnych warunków współpracy, uwzględniających budżet kampanii i oczekiwane deliverables. Przygotowujemy profesjonalne kontrakty, które chronią obie strony i jasno definiują zakres współpracy, timeline, wynagrodzenie i prawa do content.</p>
      
      <h3>Brief kreatywny i guidelines</h3>
      <p>Influencerzy są kreatywni i znają swoją społeczność najlepiej - dlatego dajemy im swobodę twórczą w ramach ustalonych guidelines. Przygotowujemy szczegółowe briefy kreatywne, które komunikują key messages, brand values i must-haves, ale pozostawiają przestrzeń na kreatywność influencera. To połączenie autentyczności z brand messaging daje najlepsze rezultaty.</p>
      
      <h3>Koordynacja i project management</h3>
      <p>Zarządzanie kampanią z wieloma influencerami to skomplikowany proces. Nasz zespół koordynuje wszystkie aspekty kampanii - od harmonogramu publikacji, przez feedback do contentu, po monitoring i real-time optimization. Jesteśmy pośrednikiem między Twoją marką a influencerami, zapewniając smooth communication i timely delivery.</p>
      
      <h3>Tracking, analytics i ROI</h3>
      <p>Mierzymy efektywność kampanii na wielu poziomach. Trackujemy reach, impressions, engagement, clicks, conversions i inne KPI zależne od celów kampanii. Wykorzystujemy linki trackingowe, kody promocyjne, landing pages i narzędzia analytics do precyzyjnego mierzenia ROI. Po zakończeniu kampanii dostarczamy szczegółowy raport z rekomendacjami na przyszłość.</p>
      
      <h3>Długoterminowe relacje z influencerami</h3>
      <p>Najlepsze rezultaty dają długoterminowe współprace, nie jednorazowe kampanie. Budujemy trwałe relacje z influencerami, którzy stają się ambasadorami Twojej marki. Tworzymy influencer communities, organizujemy eventy, gifting programy i inne inicjatywy, które wzmacniają brand loyalty influencerów i ich społeczności.</p>
    `
  },
  {
    slug: 'strategie-smm',
    title: 'Strategie SMM',
    short: 'Kompleksowa strategia social media marketing - audyt, analiza konkurencji, roadmap działań i KPI',
    price: 'od 4 000 PLN',
    features: [
      'Audyt obecnej komunikacji w social media',
      'Analiza konkurencji i benchmarking',
      'Określenie celów i KPI',
      'Strategia content i publikacji',
      'Rekomendacje narzędzi i procesów',
      'Roadmap wdrożenia'
    ],
    contentHtml: `
      <h2>Strategia Social Media Marketing</h2>
      <p>Skuteczna obecność w mediach społecznościowych wymaga przemyślanej strategii. Nie wystarczy tylko publikować content - trzeba wiedzieć po co, dla kogo i jak mierzyć efekty. Opracowujemy kompleksowe strategie SMM, które łączą cele biznesowe z aktywnościami w social media, zapewniając mierzalny zwrot z inwestycji.</p>
      
      <h3>Audyt i analiza sytuacji wyjściowej</h3>
      <p>Każda dobra strategia zaczyna się od zrozumienia aktualnego stanu rzeczy. Przeprowadzamy szczegółowy audyt Twojej obecności w mediach społecznościowych - analizujemy profile, content, engagement, dynamikę wzrostu followerów, efektywność różnych formatów i tematów. Identyfikujemy strengths, weaknesses, opportunities i threats (analiza SWOT).</p>
      
      <h3>Analiza konkurencji i rynku</h3>
      <p>Nie działasz w próżni - Twoi konkurenci również są aktywni w social media. Analizujemy ich strategie, content, engagement, kampanie płatne i działania influencer marketingowe. Identyfikujemy best practices do zaadoptowania i gaps do wykorzystania. Badamy również szerszy landscape branży i emerging trends.</p>
      
      <h3>Personas i target audience</h3>
      <p>Żeby skutecznie komunikować się w social media, musisz dokładnie znać swoją grupę docelową. Tworzymy szczegółowe personas - profile idealnych klientów z demografią, psychografią, pain points, aspiracjami, zachowaniami online i preferencjami platformowymi. To podstawa do tworzenia relevant contentu.</p>
      
      <h3>Cele, KPI i metrics</h3>
      <p>Co chcesz osiągnąć dzięki social media? Zwiększyć brand awareness? Generować leady? Budować community? Każdy cel wymaga innych działań i miar sukcesu. Definiujemy SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) i dobieramy odpowiednie KPI do ich mierzenia - od vanity metrics po business metrics.</p>
      
      <h3>Strategia content i tone of voice</h3>
      <p>Content is king, ale strategia jest jego królestwem. Opracowujemy content strategy, która określa content pillars (główne tematy), formaty (posty, Stories, Reels, video), częstotliwość publikacji, kalendarz tematyczny i tone of voice. Wszystko dostosowane do Twojej marki, grupy docelowej i celów biznesowych.</p>
      
      <h3>Strategia platformowa</h3>
      <p>Każda platforma social media ma swoją specyfikę, algorytm i użytkowników. Instagram to nie Facebook, TikTok to nie LinkedIn. Opracowujemy dedykowane strategie dla każdej platformy, na której chcesz być obecny - dostosowujemy content, formaty, częstotliwość i approaches do unikatowych charakterystyk platformy.</p>
      
      <h3>Paid social strategy</h3>
      <p>Organiczny reach jest ograniczony - płatne promocje są często konieczne do osiągnięcia celów. Planujemy strategię paid social, określając budżety, typy kampanii (awareness, consideration, conversion), targeting, creative strategy i bid strategy. Wszystko z myślą o maksymalizacji ROI.</p>
      
      <h3>Roadmap wdrożenia</h3>
      <p>Strategia bez execution to tylko dokument. Tworzymy szczegółowy roadmap wdrożenia z timeline, milestones, responsibilities i resources needed. Definiujemy procesy, tools i workflows, które umożliwią efektywne wykonanie strategii. Przewidujemy również punkty kontrolne do review i optimization strategii w czasie.</p>
    `
  },
  {
    slug: 'produkcja-wideo',
    title: 'Produkcja Wideo',
    short: 'Profesjonalna produkcja video content - od koncepcji po postprodukcję, Reels, TikToki, YouTube videos',
    price: 'od 2 000 PLN/video',
    features: [
      'Koncepcja i scenariusz',
      'Nagrania w studio lub plenerze',
      'Montaż i postprodukcja',
      'Motion graphics i animacje',
      'Napisy i tłumaczenia',
      'Optymalizacja pod platformy'
    ],
    contentHtml: `
      <h2>Produkcja Video Content dla Social Media</h2>
      <p>Video to król contentu w social media - generuje największy engagement, reach i zapamiętywalność. Produkujemy wysokiej jakości video content dostosowany do specyfiki platform społecznościowych - od krótkich vertical videos na Instagram Reels i TikTok, po dłuższe horizontal videos na YouTube i Facebook.</p>
      
      <h3>Pełen cykl produkcji video</h3>
      <p>Od pomysłu do gotowego video - obsługujemy cały proces produkcji. Zaczynamy od sesji kreatywnej i opracowania koncepcji, następnie piszemy scenariusz i storyboard. Przeprowadzamy casting (jeśli potrzebni są aktorzy lub modele), organizujemy lokacje, ekipę i sprzęt. Nagrywamy, montujemy, dodajemy efekty i dostarczamy gotowe video w formatach zoptymalizowanych pod różne platformy.</p>
      
      <h3>Reels i TikToki - short form video</h3>
      <p>Short form video to obecnie najbardziej viralny format w social media. Tworzymy catchy Reels i TikToki, które zatrzymują scroll, bawią, edukują i promują Twoją markę. Znamy najnowsze trendy, sounds, transitions i tricks, które sprawiają, że video stają się viralne. Produkujemy zarówno branded content, jak i content w stylu UGC.</p>
      
      <h3>YouTube content - długie formy</h3>
      <p>YouTube to druga największa wyszukiwarka świata i potężna platforma do budowania authority w swojej branży. Produkujemy dłuższe formy video - tutoriale, vlogi, wywiady, case studies, product reviews i inne formaty, które angażują widzów i pozycjonują Twoją markę jako eksperta. Dbamy o wysoką jakość obrazu, dźwięku i montażu.</p>
      
      <h3>Brand stories i company videos</h3>
      <p>Opowiedz historię swojej marki w sposób, który porusza emocje i buduje connection. Produkujemy brand stories, company videos, behind the scenes, team introductions i inne corporate videos, które humanizują Twoją markę i budują trust. Używamy storytelling techniques, które angażują i zapamiętyają się.</p>
      
      <h3>Product demos i explainer videos</h3>
      <p>Pokaż, jak działa Twój produkt lub usługa w przystępny, visual sposób. Tworzymy product demonstrations, unboxings, tutorials i explainer videos, które edukują potencjalnych klientów i redukują bariery zakupowe. Od prostych screen recordings po elaborate productions z aktorami i scenografią.</p>
      
      <h3>Motion graphics i animacje</h3>
      <p>Nie każde video wymaga kamery - czasami animacja jest lepszym rozwiązaniem. Tworzymy motion graphics, 2D i 3D animations, animated logos, kinetic typography i inne animated content. Idealne do wyjaśniania skomplikowanych konceptów, prezentacji danych, brandingowych animacji i attention-grabbing content.</p>
      
      <h3>Live streaming i wydarzenia</h3>
      <p>Transmisje live to świetny sposób na real-time engagement z Twoją społecznością. Oferujemy usługi live streaming - od prostych transmisji mobilnych po profesjonalne multi-camera productions. Streamujemy eventy, Q&A sessions, product launches, webinary i inne wydarzenia na Facebook Live, Instagram Live, YouTube Live i inne platformy.</p>
      
      <h3>Postprodukcja i optimization</h3>
      <p>Great video to nie tylko dobre nagranie, ale przede wszystkim profesjonalny montaż. Nasi edytorzy wideo tworzą dynamic cuts, dobierają muzykę, dodają napisy (crucial dla social media gdzie większość użytkowników ogląda bez dźwięku), color grading, efekty specjalne i inne elementy postprodukcji. Optymalizujemy video pod wymagania każdej platformy - aspect ratio, długość, resolution, bitrate.</p>
    `
  },
  {
    slug: 'analityka-mediów',
    title: 'Analityka Mediów Społecznościowych',
    short: 'Zaawansowana analityka social media - tracking, raportowanie, insights i data-driven recommendations',
    price: 'od 1 500 PLN/mies',
    features: [
      'Setup narzędzi analitycznych',
      'Tracking kampanii i contentu',
      'Miesięczne raporty z insights',
      'Competitive benchmarking',
      'Sentiment analysis',
      'Rekomendacje optymalizacyjne'
    ],
    contentHtml: `
      <h2>Social Media Analytics i Data-Driven Marketing</h2>
      <p>You can't improve what you don't measure - ta maksyma jest szczególnie prawdziwa w social media marketingu. Oferujemy zaawansowane usługi analityki mediów społecznościowych, które dostarczają actionable insights do optymalizacji Twojej strategii SMM i maksymalizacji ROI z działań w social media.</p>
      
      <h3>Setup analytics stack</h3>
      <p>Zanim zaczniemy mierzyć, musimy właściwie skonfigurować narzędzia. Setupujemy kompletny analytics stack - od natywnych platform analytics (Meta Business Suite, Instagram Insights, TikTok Analytics, YouTube Studio) po zaawansowane third-party tools (Sprout Social, Hootsuite, Brand24). Konfigurujemy tracking pixels, UTM parameters, conversion events i custom dashboards.</p>
      
      <h3>Metrics that matter</h3>
      <p>Nie wszystkie metryki są równe - niektóre to vanity metrics, które dobrze wyglądają ale nic nie mówią o business impact. Fokusujemy się na metrics that matter - tych, które są aligned z Twoimi business goals. Reach i impressions to podstawa, ale patrzymy głębiej - na engagement rate, click-through rate, conversion rate, customer acquisition cost, lifetime value i inne business metrics.</p>
      
      <h3>Content performance analysis</h3>
      <p>Który content działa najlepiej? Jakie formaty generują największy engagement? O której godzinie publikować? Jakie hashtagi używać? Analizujemy performance każdego posta, Stories, Reels, video. Identyfikujemy patterns i trends - co resonates z Twoją audience, co generuje shares i saves, co prowadzi do konwersji. To insights, które informują content strategy.</p>
      
      <h3>Audience insights</h3>
      <p>Deep dive w Twoją audience - kim są, skąd są, jakie mają zainteresowania, kiedy są online, jak interagują z Twoim contentem. Analizujemy demographics (wiek, płeć, lokalizacja), interests, behaviors, device usage. Segmentujemy audience na personas i analizujemy, który content appeals do którego segmentu. To pozwala na precision targeting w paid campaigns i personalized content strategy.</p>
      
      <h3>Competitive intelligence</h3>
      <p>Benchmark yourself against competitors. Analizujemy social media presence Twojej konkurencji - ich content strategy, engagement rates, growth trajectory, paid campaigns, influencer partnerships. Identyfikujemy their strengths do sparowania i weaknesses do exploitation. Share of voice analysis pokazuje, jak Twoja marka wypada vs competitors w online conversations.</p>
      
      <h3>Sentiment analysis</h3>
      <p>Co ludzie mówią o Twojej marce w social media? Monitoring mentions to tylko połowa równania - sentiment analysis pokazuje, czy te mentions są positive, negative czy neutral. Używamy AI-powered tools do analizowania sentiment w komentarzach, mentions, reviews. Alertujemy o potential PR crises zanim eskalują.</p>
      
      <h3>Campaign tracking i attribution</h3>
      <p>Jakie kampanie social media faktycznie generują konwersje? Setupujemy zaawansowane campaign tracking z UTM parameters, conversion pixels i multi-touch attribution models. Śledzimy customer journey od pierwszego touchpoint w social media przez wszystkie interactions do final conversion. To pokazuje true ROI z social media investments.</p>
      
      <h3>Reporting i actionable recommendations</h3>
      <p>Dane są bezwartościowe bez interpretation i action. Dostarczamy miesięczne raporty, które nie tylko prezentują numbers, ale przede wszystkim wyciągają insights i dostarczają konkretne, actionable recommendations. Co działa dobrze i należy skalować? Co nie działa i należy zmienić? Jakie są opportunities na następny miesiąc? Nasze raporty są podstawą do data-driven decision making w social media strategy.</p>
    `
  }
];
