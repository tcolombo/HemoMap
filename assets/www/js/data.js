/**
 * Banque de données des CRTH français
 *
 * @version : 1.1
 * @author  : Tristan Colombo <tristan.colombo@info2dev.com>
 * @licence : GPLv3 
 */

function getData()
{
  var crth = [
  {
    'name'      : 'CRTH Nice',
    'adress'    : 'Hôpital de l\'Archet - 151 route de Saint Antoine de Ginestière 06202 Nice CEDEX 3',
    'latitude'  : 43.6950076,
    'longitude' : 7.230042,
    'valid'     : false,
    'tel_day'   : '0492035823',
    'tel_night' : '0492035415'
  },
  {
    'name'      : 'CRTH Basse Normandie Caen',
    'adress'    : 'Hôpital de la Côte de Nacre - Avenue de la Côte de Nacre 14033 Caen CEDEX 9',
    'latitude'  : 49.2058918,
    'longitude' : -0.3616412,
    'valid'     : false,
    'tel_day'   : '0231064849',
    'tel_night' : '0231064849'
  },
  {
    'name'      : 'CRTH Bourgogne',
    'adress'    : 'C.H.U. Bocage Sud - 2 Boulevard de Lattre de Tassigny 21079 DIJON CEDEX',
    'latitude'  : 47.3222576,
    'longitude' : 5.0673343,
    'valid'     : false,
    'tel_day'   : '0380293331',
    'tel_night' : '0380293314'
  },
  {
    'name'      : 'CRTH Morvan',
    'adress'    : 'C.H.U. Morvan - 2 Avenue Foch 29609 Brest',
    'latitude'  : 48.3968767,
    'longitude' : -4.4888775,
    'valid'     : false,
    'tel_day'   : '0298223650',
    'tel_night' : '0298223488'
  },
  {
    'name'      : 'CRTH Toulouse',
    'adress'    : 'Hôpital Purpan - Place du Dr. Baylac 31059 Toulouse cedex 9',
    'latitude'  : 43.6077354,
    'longitude' : 1.3974101,
    'valid'     : false,
    'tel_day'   : '0561772507',
    'tel_night' : '0567690361'
  },
  {
    'name'      : 'CRTH Bordeaux',
    'adress'    : '1er étage du Tripode - Hôpital Pellegrin - Place Amélie Rabat Léon 33076 Bordeaux',
    'latitude'  : 44.8303598,
    'longitude' : -0.6031083,
    'valid'     : false,
    'tel_day'   : '0556794879',
    'tel_night' : '0610173463'
  },
  {
    'name'      : 'CRTH Marseille',
    'adress'    : 'Hôpital de la Timone - 264 rue Saint-Pierre 13385 Marseille',
    'latitude'  : 43.2916193,
    'longitude' : 5.4030712,
    'valid'     : true,
    'tel_day'   : '0491387749',
    'tel_night' : '0491386782'
  },
  {
    'name'      : 'CRTH Languedoc-Roussillon',
    'adress'    : 'Hôpital St Eloi - 80 Avenue Augustin Fliche 34295 Montpellier',
    'latitude'  : 43.6298262,
    'longitude' : 3.8611363,
    'valid'     : false,
    'tel_day'   : '0467337771',
    'tel_night' : '0467337771'
  },
  {
    'name'      : 'CRTH Rennes',
    'adress'    : 'Hôpital de Pontchaillou - 2 rue Henri Le Guilloux 35033 Rennes',
    'latitude'  : 48.1167824,
    'longitude' : -1.6957312,
    'valid'     : false,
    'tel_day'   : '0299282410',
    'tel_night' : '0299282410'
  },
  {
    'name'      : 'CHU Trousseau',
    'adress'    : 'Avenue de la République 37170 Chambray-lès-Tours',
    'latitude'  : 47.3440912,
    'longitude' : 0.7144909,
    'valid'     : false,
    'tel_day'   : '0247474672',
    'tel_night' : '0247478120'
  },
  {
    'name'      : 'CHU Grenoble',
    'adress'    : 'Hôpital A. Michallon - Boulevard de la Chantourne  38700 La Tronche',
    'latitude'  : 45.1970886,
    'longitude' : 5.7520624,
    'valid'     : false,
    'tel_day'   : '0476765487',
    'tel_night' : '0476765501'
  },  
  {
    'name'      : 'CHU Saint-Etienne',
    'adress'    : 'Avenue Albert Raimond - 42270 Saint-Priest en Jarez',
    'latitude'  : 45.4763038,
    'longitude' : 4.3674903,
    'valid'     : false,
    'tel_day'   : '0477828024',
    'tel_night' : '0477917031'
  },  
  {
    'name'      : 'CHU Nantes',
    'adress'    : 'boulevard Jean-Monnet 44093 Nantes',
    'latitude'  : 47.2106656,
    'longitude' : -1.5520748,
    'valid'     : false,
    'tel_day'   : '0240087468',
    'tel_night' : '0240083333'
  },
  {
    'name'      : 'CHU Angers',
    'adress'    : '4 rue Larrey 49933 Angers',
    'latitude'  : 47.480684,
    'longitude' : -0.5546998,
    'valid'     : false,
    'tel_day'   : '0241355453',
    'tel_night' : '0241353435'
  },
  {
    'name'      : 'American Memorial Hospital',
    'adress'    : '47 rue Cognacq-Jay 51092',
    'latitude'  : 49.2305765,
    'longitude' : 4.0161289,
    'valid'     : false,
    'tel_day'   : '0326787515',
    'tel_night' : '0326787515'
  },
  {
    'name'      : 'CRTH Nancy',
    'adress'    : 'avenue de Bourgogne 54511 Vandoeuvre les Nancy',
    'latitude'  : 48.6495999,
    'longitude' : 6.1461287,
    'valid'     : false,
    'tel_day'   : '0383153784',
    'tel_night' : '0383153784'
  },
  {
    'name'      : 'CRTH Nord Pas de Calais',
    'adress'    : 'Boulevard du professeur Leclercq 59000 Lille',
    'latitude'  : 50.6098141,
    'longitude' : 3.0328256,
    'valid'     : false,
    'tel_day'   : '0320444842',
    'tel_night' : '0320446411'
  },
  {
    'name'      : 'CRTH Auvergne',
    'adress'    : 'CHU Hôtel Dieu - 1 place Lucie-Aubrac 63003 Clermont-Ferrand',
    'latitude'  : 45.7858953,
    'longitude' : 3.1130465,
    'valid'     : false,
    'tel_day'   : '0800800261',
    'tel_night' : '0800800261'
  },
  {
    'name'      : 'CRTH Alsace',
    'adress'    : 'Hôpital Haute Pierre - 1 Av Moliere 67098 Strasbourg',
    'latitude'  : 48.5954967,
    'longitude' : 7.7049018,
    'valid'     : false,
    'tel_day'   : '0388128371 ',
    'tel_night' : '0388116768'
  },
  {
    'name'      : 'Hôpital du Hasenrain',
    'adress'    : 'Pavillon 11, 87 Avenue d\'Altkirch 68051 Mulhouse',
    'latitude'  : 47.7359073,
    'longitude' : 7.3318162,
    'valid'     : false,
    'tel_day'   : '0989646767',
    'tel_night' : ''
  },
  {
    'name'      : 'Hôpital Edouard Herriot',
    'adress'    : '5 place d\'Arsonval 69437 Lyon',
    'latitude'  : 45.7432862,
    'longitude' : 4.8798574,
    'valid'     : false,
    'tel_day'   : '0472117338',
    'tel_night' : '0472357000'
  },
  {
    'name'      : 'CTH Le Mans',
    'adress'    : '194 Avenue Rubillard 72000 Le Mans',
    'latitude'  : 48.012897,
    'longitude' : 0.177364,
    'valid'     : false,
    'tel_day'   : '0243434360',
    'tel_night' : '0243434360'
  },
  {
    'name'      : 'Hôpital de Chambéry',
    'adress'    : '7 Square Massalaz 73011 Chambéry',
    'latitude'  : 45.5638949,
    'longitude' : 5.9115915,
    'valid'     : false,
    'tel_day'   : '0479965667',
    'tel_night' : '0479684002'
  },
  {
    'name'      : 'EFS de Metz Tessy',
    'adress'    : '1 Avenue de l\'hôpital 74370 Metz Tessy',
    'latitude'  : 45.934592,
    'longitude' : 6.117516,
    'valid'     : false,
    'tel_day'   : '0450666050',
    'tel_night' : '0450636774'
  },
  {
    'name'      : 'EFS Rhône Alpes',
    'adress'    : '1 route de Taninges 74100 Annemasse',
    'latitude'  : 46.1911705,
    'longitude' : 6.2554953,
    'valid'     : false,
    'tel_day'   : '0450876970',
    'tel_night' : '0450876970'
  },
  {
    'name'      : 'Groupe hospitalier Cochin-Saint-Vincent-de Paul',
    'adress'    : '27 rue du Faubourg Saint Jacques 75014 PARIS',
    'latitude'  : 48.8378134,
    'longitude' : 2.3390211,
    'valid'     : false,
    'tel_day'   : '0158412013',
    'tel_night' : '0158412721'
  },
  {
    'name'      : 'CRTH Hôpital Necker',
    'adress'    : '149, rue de Sèvres - 75015 Paris',
    'latitude'  : 48.8463561,
    'longitude' : 2.3154751,
    'valid'     : false,
    'tel_day'   : '0144495273',
    'tel_night' : '0144494000'
  },
  {
    'name'      : 'CRTH Haute Normandie',
    'adress'    : '1 rue de Germont 76031 Rouen',
    'latitude'  : 49.4409688,
    'longitude' : 1.1072708,
    'valid'     : false,
    'tel_day'   : '0232880249',
    'tel_night' : '0232888196'
  },
  {
    'name'      : 'CH A. Mignot',
    'adress'    : '177, rue de Versailles 78157 Le Chesnay',
    'latitude'  : 48.8297811,
    'longitude' : 2.1281997,
    'valid'     : false,
    'tel_day'   : '0139638745',
    'tel_night' : '0139639133'
  },
  {
    'name'      : 'Hôpital Nord',
    'adress'    : 'Entrée 5 - Place Victor Pauchet 80054 Amiens',
    'latitude'  : 49.9069269,
    'longitude' : 2.2904581,
    'valid'     : false,
    'tel_day'   : '0322668455',
    'tel_night' : '0322668000'
  },
  {
    'name'      : 'CRTH Poitou Charentes',
    'adress'    : '2 rue de la Miletrie 86021 Poitiers',
    'latitude'  : 46.561658,
    'longitude' : 0.379204,
    'valid'     : false,
    'tel_day'   : '0549444501',
    'tel_night' : '0549444444'
  },
  {
    'name'      : 'CHU de Limoges',
    'adress'    : '8 Avenue Dominique Larrey 87042 Limoges',
    'latitude'  : 45.8131669,
    'longitude' : 1.2408981,
    'valid'     : false,
    'tel_day'   : '0555056801',
    'tel_night' : '0555056841'
  },
  {
    'name'      : 'Hôpital Bicêtre',
    'adress'    : 'rue du Général Leclerc 94275 LE Kremlin Bicêtre',
    'latitude'  : 48.812593,
    'longitude' : 2.358367,
    'valid'     : false,
    'tel_day'   : '0145212197',
    'tel_night' : '0145213602'
  },
  {
    'name'      : 'Hôpital Simone Veil',
    'adress'    : '1 rue Jean Moulin  95160 Montmorency',
    'latitude'  : 48.9876355,
    'longitude' : 2.3174183,
    'valid'     : false,
    'tel_day'   : '0134066187',
    'tel_night' : '0134066000'
  },
  {
    'name'      : 'CHU Fort de France',
    'adress'    : 'route de Chateauboeuf, La Meynard 97261 Fort-de-France',
    'latitude'  : 14.609371,
    'longitude' : -61.07256,
    'valid'     : false,
    'tel_day'   : '0596552445',
    'tel_night' : '0596552341'
  },
  {
    'name'      : 'CTH Corse',
    'adress'    : '27 Avenue Impératrice Eugénie 20303 Ajaccio',
    'latitude'  : 41.9234484,
    'longitude' : 8.7338793,
    'valid'     : false,
    'tel_day'   : '0495299063',
    'tel_night' : ''
  },
  {
    'name'      : 'Hôpital Felix-Guyon',
    'adress'    : 'Allée des Topazes, 97400 Saint-Denis',
    'latitude'  : -20.8940075,
    'longitude' : 55.4442384,
    'valid'     : false,
    'tel_day'   : '0262905050',
    'tel_night' : ''
  }];

  return crth;
};
