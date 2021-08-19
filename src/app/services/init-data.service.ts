import {Injectable} from '@angular/core';
import {Pests} from '../models/Pests';

@Injectable({
  providedIn: 'root'
})
export class InitDataService {
  private readonly pests: Pests[];

  constructor() {
    this.pests = [
      {
        name: 'Cucarachas',
        description: 'Los blatodeos (Blattodea, del latín Blatta, «cucaracha» y del griego eidés, «que tiene aspecto de») incluye a las cucarachas, cutias o baratas2​ y a las termitas (Isoptera). Es un orden de insectos hemimetábolos paurometábolos de cuerpo aplanado. ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto1.svg',
        gender: [
          {
            name: 'Cucarachas Alemana',
            description: 'La cucaracha alemana se encuentra prácticamente en todo el mundo. Al parecer se originó en África Nororiental en la región de los grandes lagos entre Etiopía y la República de Sudán. De ahí emigró hacia Europa y el resto de los continentes. Es sin duda la cucaracha comensal más importante a nivel mundial. ',
            about_url: 'https://www.environmentalscience.bayer.mx/psa/what-to-control/german-cockroach',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmaster/problem-images/pests/german-cockroach.ashx?w=550'
          },
          {
            name: 'Cucaracha Americana',
            description: 'La cucaracha americana actualmente está distribuida en todas las regiones tropicales y subtropicales del mundo. Originaria de África tropical, se considera la segunda cucaracha en importancia a nivel mundial.',
            about_url: 'https://www.environmentalscience.bayer.mx/psa/what-to-control/american-cockroach',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmaster/problem-images/pests/american-cockroach.ashx?w=550'
          },
          {
            name: 'Cucaracha banda café',
            description: 'Mide de 10 a 14 mm de longitud, las alas del macho cubren completamente el abdomen, las de la hembra dejan descubierto parte del segmento abdominal. El macho es más delgado que la hembra. La coloración café varía en tonos con los márgenes laterales del pronoto transparentes y una zona oscura central con forma de campana. El área basal y media debajo de las alas tiene un tono claro. Las ninfas presentan dos bandas cafés distintivas a través de la parte media del tórax y la inicial del abdomen. Las ootecas miden 4 mm de longitud, el menor tamaño entre las cucarachas domiciliarias.',
            about_url: 'https://www.environmentalscience.bayer.mx/psa/what-to-control/brown-banded-cockroach',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/cucarachabanda-2-800x800.ashx?w=550'
          },
          {
            name: 'Cucaracha oriental',
            description: 'La cucaracha oriental se localiza principalmente en las zonas templadas del mundo. Se cree que es originaria de África del Norte de donde se dispersa a Europa y América.   ',
            about_url: 'https://www.environmentalscience.bayer.mx/psa/what-to-control/oriental-cockroach',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmaster/problem-images/pests/oriental-cockroach.ashx?w=550'
          }
        ]
      },
      {
        name: 'Hormigas',
        description: 'Las hormigas (Formicidae) son una familia de insectos eusociales que, como las avispas y las abejas, pertenecen al orden de los himenópteros. Las hormigas evolucionaron de antepasados similares a una avispa a mediados del Cretáceo, hace entre ciento diez y ciento treinta millones de años, diversificándose tras la expansión de las plantas con flor por el mundo. Son uno de los grupos zoológicos de mayor éxito, con cerca de catorce mil especies descritas, aunque se estima que pueden ser más de veintidós mil. Se identifican fácilmente por sus antenas en ángulo y su estructura en tres secciones con una estrecha cintura. La rama de la entomología que las estudia se denomina mirmecología. ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto2.svg',
        gender: [
          {
            name: 'Hormiga Acróbata',
            description: 'Las hormigas acróbatas comen una gran variedad de alimentos, incluyendo dulces y proteínas. A las obreras les gusta el mielato de los insectos chupadores de savia (pulgones y cochinillas). Estas hormigas también cazan termitas aladas, gorgojos y polillas.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/argentine-ant.ashx?w=550'
          },
          {
            name: 'Hormiga Argentina',
            description: 'Las hormigas argentinas prefieren las cosas dulces, como el mielato, los jugos de frutas y las secreciones de algunas plantas, pero también ingieren proteínas (carne, insectos, huevos) y grasas, e incluso atacan animales pequeños y vulnerables.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/argentine-ant.ashx?w=550'
          },
          {
            name: 'Hormiga Cabezona',
            description: 'Las hormigas cabezonas hacen sus senderos rápidamente, pero generalmente no muy lejos de sus hormigueros. Sus senderos de forrajeo, en ocasiones, están cubiertos con tierra, de manera similar a los tubos subterráneos de forrajeo de las termitas.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/hcabezona.ashx?w=550'
          },
          {
            name: 'Hormiga de Fuego Importada',
            description: 'Las hormigas de fuego son plagas del sur de los Estados Unidos y norte de México. Las hormigas de fuego nativas pocas veces se vuelven plagas estructurales. Estas hormigas causan severos daños a la salud, agrícolas y a las propiedades. La hormiga de fuego importada es muy agresiva y picará repetidamente, especialmente cuando su colonia o montículo es molestada.                                                      \n' +
              '\n' +
              'Las hormigas de fuego rojas importadas prefieren los alimentos ricos en proteínas, pero comerán casi cualquier material vegetal o animal.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/fire-ant.ashx?w=550'
          },
          {
            name: 'Hormiga Fantasma',
            description: 'Las colonias de las hormigas olorosas domésticas contienen hasta 100,000 hormigas, con muchas reinas. Pueden existir súper colonias en las cuales se hace el intercambio de alimento, agua y la prole entre los lugares satélites.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/ghost-ant.ashx?w=550'
          },
          {
            name: 'Hormiga Loca',
            description: 'Las hormigas locas prefieren insectos y dulces, pero se alimentarán de cualquier comida doméstica. En el exterior, su dieta preferida incluye insectos, semillas, frutas y mielato de pulgones y cochinillas.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/hloca.ashx?w=550'
          },
          {
            name: 'Hormiga Negra',
            description: 'Las colonias de asquéles son pequeñas y contienen muchas reinas. Si son molestadas, las colonias se mudarán rápidamente a otros sitios. La hormigas aladas surgen de junio a agosto.\n' +
              '\n' +
              'En interiores, las pequeñas hormigas negras hacen sus hormigueros en la madera de la construcción, descomponiendo esa madera, así como la mampostería. Los hormigueros del exterior se encuentran en el suelo debajo de rocas, troncos o desechos.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/black-house-ant.ashx?w=550'
          },
          {
            name: 'Hormiga apestosa doméstica',
            description: 'Las colonias de las hormigas olorosas domésticas contienen hasta 100,000 hormigas, con muchas reinas. Pueden existir súper colonias en las cuales se hace el intercambio de alimento, agua y la prole entre los lugares satélites.',
            about_url: 'https://storage.googleapis.com/soyjoctan-cdn-bucket/support/clients/sefcyn2000/hormiga.svg',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/odorous-house-ant.ashx?w=550'
          }
        ]
      },
      {
        name: 'Roedores',
        description: 'Los roedores (Rodentia) son un orden de mamíferos placentarios con aproximadamente 2280 especies actuales; es el orden más numeroso de mamíferos. Pueden hallarse en gran número en todos los continentes salvo la Antártida. Los roedores más comunes son los ratones, ratas, ardillas, tamias, puercoespines, castores, hámsteres, jerbos y conejillos de indias. ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto3.svg',
        gender: [
          {
            name: 'Ratón',
            about_url: '',
            description: 'Pesan de 10 a 21 g y miden de 6 a 10 cm. Naríz puntiaguda y cuerpo delgado. Orejas relativamente grandes (aproximadamente 15 mm desde la escotadura). Coloración muy variable, desde café grisáceo hasta gris claro en el dorso y desde gris a blanco en el vientre. La cola es desnuda de pelo, de color obscuro, aproximadamente del mismo tamaño del cuerpo (7 a 11 cm).\n' +
              '\n' +
              'Habita tanto bajo tierra como en lugares altos de interiores y exteriores, es muy tolerante a condiciones áridas. Son muy curiosos ante objetos nuevos en lugares comunes para ellos, prefiriendo la mayoría de las veces alimentos nuevos a los ya conocidos. Comen de una manera intermitente.\n',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmaster/problem-images/pests/house-mouse.ashx?w=550'
          },
          {
            name: 'Rata noruega o parda',
            about_url: '',
            description: 'Pesan entre 150 y 600 g y miden de 18 a 25 cm. La naríz es corta. Las orejas son relativamente cortas (20 a 23 cm desde la escotadura) cubiertas parcialmente con pelo. El pelo es café grisáceo en el dorso y de color grisáceo en el vientre. La cola es mas corta que el cuerpo (16 a 21 cm), es bicoloreada y cubierta con pequeños pelos. Vive preferentemente bajo tierra tanto en interiores como en exteriores. Es buena nadadora tanto sobre como bajo el agua.  Son extremadamente neofóbicas, se alimentan generalmente de recursos ya explorados y bien conocidos, no obstante, el número de visitas a un nuevo recurso alimenticio se incrementa hasta en un 198% después de cuatro días. Al igual que la rata negra, comen aproximadamente el 10% de su peso diariamente.',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmaster/problem-images/pests/brown-rat.ashx?w=550'
          },
          {
            name: 'Rata negra o común',
            about_url: '',
            description: 'Pesan de 80 a 300 g y miden de 16 a 21 cm de largo. La naríz es puntiaguda. Las orejas son grandes, muy prominentes (25 a 28 cm desde la escotadura). La coloración del pelo en el dorso es café grisáceo, el vientre es blanco, gris o negro grisáceo. La cola es aproximadamente del mismo largo del cuerpo (19 a 25 cm), de color obscuro y desnuda de pelo. Es una hábil trepadora. Viven tanto en interiores como exteriores, incluso en árboles. ',
            image_url: 'https://www.environmentalscience.bayer.mx/-/media/prfmexico/problem-images/pests/mexico/icon_bcs_es_rat_print_4c.ashx?w=550'
          }
        ]
      },
      {
        name: 'Arañas',
        description: 'Son pocas las arañas con veneno lo suficientemente peligroso para el normal de la gente, en México se sabe de Latrodectus mactans (araña capulina) y Loxosceles sp (araña reclusa). Otras en cambio son benéficas como control de verdaderas plagas, como la pequeña araña saltadora, o como mascota, como la tarántula, que por desgracia está en peligro de desaparecer, ambas completamente inofensivas.',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto4.svg',
        gender: []
      },
      {
        name: 'Moscas',
        description: 'Son insectos con un par de alas bien desarrollado y otro, posterior, modificado en órganos llamados "balancines" o halterios, auxiliares en el vuelo. Los ojos están normalmente bien desarrollados, aunque sus antenas son pequeñas con un pequeño estilo cerca del extremo.',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto5.svg',
        gender: []
      },
      {
        name: 'Chinches',
        description: 'Cimex lectularius, vulgarmente conocido como chinche o chinche de las camas, es un insecto hemíptero de la familia Cimicidae. Su alimentación es hematófaga, es decir, se nutre con sangre de humanos y otros animales de sangre caliente. Su nombre vulgar proviene del hábitat frecuentemente usado: colchones, sofás y otro mobiliario. Aunque no es estrictamente nocturno su mayor actividad la desarrolla por la noche. ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto6.svg',
        gender: []
      },
      {
        name: 'Pulgas',
        description: 'Los sifonápteros (Siphonaptera, gr. σίφων síphōn, «canal, tubo» y ἄπτερα áptera, «sin alas») son un orden de pequeños insectos ápteros, conocidos popularmente como pulgas. Las pulgas son parásitos externos hematófagos de diversos animales y humanos y pueden ejecutar saltos largos en proporción a su tamaño, pudiendo así alcanzar fácilmente a nuevos huéspedes, gracias a que en sus articulaciones poseen resortes de la proteína más elástica conocida, la resilina, igual que otros insectos como saltamontes y langostas. Se conocen unas 1900 especies,varias de las cuales pueden transmitir enfermedades diversas, como el tifus, la peste negra o bubónica, o las tenias (como Dipylidium caninum). ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto7.svg',
        gender: []
      },
      {
        name: 'Pescaditos de plata',
        description: 'El pececillo de plata (Lepisma saccharina), también conocido como cordón de plata, lepisma de la harina, lepisma del azúcar, traza, “cucaracha de agua” o sardineta, es una especie cosmopolita de insecto tisanuro, antiguo orden hoy día reclasificado en dos, de los cuales esta especie es del orden Zygentoma (Thysanura s.s.), de la familia Lepismatidae y género Lepisma. Es ágil y con una fuerte fototaxia negativa (huye de la luz), lo que hace rara su observación. El nombre de la especie deriva del brillo gris metálico de su cuerpo. Las lepismas viven de materias diversas, como moho, papel, cartón y alimentos amilosos (con almidón), como la cola de encuadernar libros o el apresto para la ropa. ',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto8.svg',
        gender: []
      },
      {
        name: 'Abejas',
        description: 'Los antófilos (Anthophila, gr. ‘que aman las flores’), conocidos comúnmente como abejas, son un clado de insectos himenópteros, sin ubicación en categoría taxonómica, dentro de la superfamilia Apoidea. Se trata de un linaje monofilético con más de 20,000 especies conocidas. Las abejas, al igual que las hormigas, evolucionaron a partir de himenópteros aculeados. Los antepasados de las abejas estaban relacionados con la familia Crabronidae y eran depredadores de insectos.',
        image_url: 'https://cdn.soyjoctan.com/support/clients/sefcyn2000/insecto9.svg',
        gender: []
      }
    ];
  }

  get getPests(): Pests[] {
    return this.pests;
  }


}
