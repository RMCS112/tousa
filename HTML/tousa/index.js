slider = document.getElementById("translateSlider")
para = document.getElementById('bodyPara')
translatable = document.querySelectorAll(':not([id="nul"])')

translations = {
    'contentPara':['From AP classes to GPA to scholarships, everything you need to know about the American high-school system is in our <a href="content.html">content</a> tab','Seja classes AP, GPA, ou bolsas, tudo que voce precisa saber sobre o sistema de ensino medio americano esta na nossa aba de <a href="content.html">conteudo</a>'],
    'tutoringPara':['Having trouble with classwork? Schedule a FREE <a href="tutoring.html">tutoring</a> session in your native language.','Esta com dificuldade de acompanhar as aulas? Agende uma <a href="tutoring.html">aula particular</a> GRATUITA na sua lingua nativa.'],
    'content':['content','conteúdo'],
    'tutoring':['tutoring','tutoria'],
    'aboutus':['about us','sobre nós'],
    'basics':['The Basics','O Básico'],
    'basics1':['Same classes every day','Mesmas aulas todos os dias'],
    'basics2':['6-8 classes per day plus lunch','6-8 aulas por dia mais horário de almoço'],
    'basics3':['Students can take extra classes online through <a href="https://www.flvs.net/">FLVS</a>','Estudantes podem cursar aulas extras online pela plataforma <a href="https://www.flvs.net/">FLVS</a>'],
    'gpa':["GPA is the unified way that high schools represent a student's grades with a single number. The calculation considers all grades (generally by semester) from 9th to 12th grade. It is usually goes from 0 to 4.0 or 0 to 6.0 depending on if it is unweighted or weighted.",'GPA é a maneira que todas as escolas usam para representar as notas de um estudante'],
    'gpa1':['Unweighted GPA','GPA sem rigor'],
    'gpa2':["The GPA that does not take class difficulty into account. All classes' grades count the same, regardless of rigor.",'Esse GPA não considera a dificuldade das aulas no cálculo. Todas as aulas tem o mesmo valor, independente do rigor.'],
    'gpa3':['Weighted GPA','GPA com rigor'],
    'gpa4':['The GPA that takes class difficulty into account. On a 6.0 scale, an A in a standard class is worth 4.0. An A in an honors (harder) class is worth 5.0. An A in an AP (hardest) class is worth 6.0.','Esse GPA leva a dificuldade das aulas em consideração.'],
    'gpa5':['WIP','WIP'],
    'rigor':['There are different levels of difficulty to classes, also referred to as rigor. These are standard, honors, and AP or college level.','Existem níveis diferentes de dificuldade para as aulas, também conhecidos como rigor. Esses nívels são standard (padrão), honors (difícil) e AP ou nível de universidade (mais difícil)'],
    'rigor1':['This is the most common (and easiest) class type and it is worth a maximum of 4.0 on either of your GPAs.','Esse é o tipo mais comum e fácil de aula. Ele vale um máximo de 4.0 em qualquer tipo de GPA.'],
    'rigor2':['Also referred to as Pre-AICE or Pre-AP, these classes move at a faster pace and require some independent work. These are worth 4.0 on your unweighted GPA and 5.0 on your weighted GPA.','Também conhecidas como Pre-AICE ou Pre-AP, essas aulas tem um passo rápido e requerem mais trabalho independente. Essas aulas valem 4.0 no GPA sem rigor e 5.0 no GPA com rigor.'],
    'rigor3':['Also known as college level or AICE, these are the most advanced and rigorous classes. They are worth a 4.0 unweighted GPA and 6.0 weighted GPA.','Também conhecidas como aulas de nível de universidade ou aulas AICE, essas são as classes mais avançadas e rigorosas. Elas valem 4.0 no GPA sem rigor e 6.0 no GPA com rigor.'],
    'rigor4':['These are ACTUAL college classes, which means they offer a broader range of subjects, but taking these counts towards your college GPA and therefore is an important decision. They are generally worth the same as Honors classes for GPA.','Essas são REALMENTE aulas de universidade, o que quer dizer que elas oferecem matérias mais diversas, mas essas aulas contam para o seu GPA da universidade, então cursar elas é uma decisão importante. Essas aulas geralmente tem o mesmo valor que aulas Honors para o GPA.'],
    'st':['Standardized Testing','Testes Padronizados'],
    'st1':['The SAT is the major test used in college admissions. It is a multiple choice test that can be taken as many times as needed, but there is a fee. Usually, the school offers two free SATs for students on predetermined dates. This test has a score range of 400-1600 composed by two sections:','O SAT é o teste mais usado para admissão em universidades. Ele é um teste de múltipla escolha que pode ser feito quantas vezes necessário, mas tem uma taxa. Geralmente, a escola oferece dois SATs grátis para estudantes em datas predeterminadas. A nota dessa prova é entre 400-1600 e é composta de duas seções:'],
    'st2':['Math (200-800)','Matemática (200-800)'],
    'st3':['Reading & Writing (200-800)','Leitura e Escrita (200-800)'],
    'st4':['The ACT is the most popular alternative to the SAT and is also accepted by all colleges that accept the SAT. It is a multiple choice test with a score range of 1-36 that also has a fee. It has the following sections:','O ACT é a alternativa mais popular para o SAT e também é aceito por todas as universidades que aceitam o SAT. Ele é um teste de múltipla escolha cuja nota fica na faixa de 1-36. Esse teste também tem uma taxa. Ele tem as seguintes seções:'],
    'st5':['English (1-36)','Inglês (1-36)'],
    'st6':['Math (1-36)','Matemática (1-36)'],
    'st7':['Reading (1-36)','Leitura (1-36)'],
    'st8':['Science (1-36)','Ciência (1-36)'],
    'st9':['The composite score is the average of section scores rounded to the nearest whole number','A nota composta é a média das notas de todas as seções arredondada para o número inteiro mais próximo'],
    'ss':['Scholarships','Bolsas de Estudo'],
    'ss1':['Scholarships are crucial to paying college in the US (even public colleges). There are two types:','Bolsas de estudo são cruciais para pagar universidades nos EUA (até universidades públicas). Existem dois tipos:'],
    'ss2':['Merit-based','Baseadas em Mérito'],
    'ss3':["Awarded based on the student's performance and achievements",'Distribuídas com base na performance e nas conquistas do estudante.'],
    'ss4':['Need-based','Baseadas em Necessidade'],
    'ss5':["Awarded based on the student's financial situation.",'Distribuídas com base na situação financeira do estudante.'],
    'basict':['Basic Tutoring','Tutoria Básica'],
    'b1':['In your language','Na sua língua'],
    'b2':['Available once a week at specific times','Disponível uma vez por semana em horários específicos'],
    'b3':['Free','Grátis'],
    'blink':['book','agendar'],
    'advancedt':['Advanced Tutoring','Tutoria Avançada'],
    'a1':['In your language','Na sua língua'],
    'a2':['Available as many times as needed','Disponível quantas vezes for necessário'],
    'a3':['Flexible scheduling','Agendamento flexível'],
    'a4':['Elite tutors','Tutores de elite'],
    'alink':['book','agendar'],
    'tsignup':['Wanna tutor?','Quer ser tutor?'],
    'slink':['Sign Up','Registre‑se'],
}
console.log(translatable)
slider.onclick = translate

function translate() {
    index=0
    if (slider.checked) {
        index=1
    }
    for (let i=0; i<translatable.length; i++){
        try{
            translatable[i].innerHTML = translations[translatable[i].id][index]
        }
        catch(err){}
    }

}