/**
 * Traitements javascript pour HemoMap
 *
 * @version : 1.0
 * @author  : Tristan Colombo <tristan.colombo@info2dev.com>
 * @licence : GPLv3 
 */

/**
 * Création du label et du lien associés à un numéro de téléphone
 *
 * @param  phone  string  Numéro de téléphone (null si indéfini)
 *
 * @return        hash    Structure contenant le label et le lien associés
 *                        au numéro de téléphone passé en paramètre :
 *                          - val  : le label
 *                          - href : le lien pour appeler le numéro
 */
function get_phone(phone)
{
  if (phone == null)
  {
    return { 'val' : 'Indisponible', 'href' : '' };
  }
  else
  {
    return { 'val' : 'Appeler ' + phone, 'href' : 'tel:' + phone };
  }
}

/**
 * Détection de la période de la journée : jour (8h à 17h) ou nuit (17h à 8h)
 * En cas de WE (samedi et dimanche), on passe en période de nuit.
 *
 * @return  string  Période de la journée : 'day' pour jour (8h à 17h) ou
 *                  'night' pour nuit (17h à 8h) ou samedi ou dimanche
 */
function dayOrNight()
{
  var today = new Date();
  var day   = today.getDay();
  var hour  = today.getHours();
    
  // 17h -> 8h = night
  if (hour < 8 || hour >= 17)
  {
    return 'night';
  }

  // Samedi ou dimanche = night
  if (day == 0 || day == 6)
  {
    return 'night';
  }

  return 'day';
}

/**
 * Initialisation : calcul des coordonnées GPS et mise à jour des champs de la 
 * page Web
 * 
 * @return  none
 */
function init()
{
  // Fonction suc() à appeler en cas de détection du positionnement 
  var suc = function(p)
  {
    // Utilisation de la variable crth issue de data.js (banque de données)
    // crth_size correspond au nombre de CRTH référencés
    var crth_size = crth.length;

    // Conversion des coordonnées GPS en radian
    var conv2rad = 2*Math.PI/360;
    var src_lat  = p.coords.latitude * conv2rad;
    var src_long = p.coords.longitude *conv2rad;
    
    // Variables de détection de la période (jour ou nuit)
    var day         = null;
    var night       = null;
    var best_choice = null;

    // Variables permettant d'identifier le CRTH le plus proche et sa
    // distance à vol d'oiseau de la localisation actuelle
    var d        = 0;
    var d_min    = 32767;
    var i_min    = null;

    for (i=0; i<crth_size; i++)
    {
      // Calcul de la distance à vol d'oiseau entre le CRTH n°i et
      // la position actuelle
      d = 6378 * (Math.PI/2 - 
          Math.asin(Math.sin(crth[i].latitude*conv2rad)*Math.sin(src_lat) + 
          Math.cos(crth[i].longitude*conv2rad - src_long) * 
          Math.cos(crth[i].latitude*conv2rad) * Math.cos(src_lat)));
      // Sauvegarde de la distance minimale et du numéro identifiant le
      // CRTH le plus proche
      if (d < d_min)
      {
        d_min = d;
        i_min = i;
      }
    }

    // Mise à jour des champs correspondant au CRTH le plus proche
    // Nom du CRTH
    document.getElementById('crth').innerHTML  = '<em>' + 
             crth[i_min].name + '</em>';
    // Adresse du CRTH
    document.getElementById('crth_adress').innerHTML  = crth[i_min].adress;
    // Distance du CRTH
    document.getElementById('distance').innerHTML  = 'Distance à vol d\'oiseau : <em>' + 
             d_min.toFixed(2) + '</em> km';
    // Lien vers le CRTH (lein vers Google Maps pour activer le guidage GPS)
    document.getElementById('info_crth').href  = 'http://maps.google.com/maps?saddr=' + 
             p.coords.latitude + ',' + p.coords.longitude + '&daddr=' + 
             crth[i_min].latitude + ',' + crth[i_min].longitude;

    // Récupération des numéros de téléphone des services de jour et de nuit
    day         = get_phone(crth[i_min].tel_day);
    night       = get_phone(crth[i_min].tel_night);

    // Récupération du service à appeler en fonction des heures et du jour
    best_choice = dayOrNight(); 
    // Affichage du label et du numéro du service de jour
    document.getElementById('phone_day').innerHTML = 
            '<span class="call">Service de jour</span><br />' + day.val;
    document.getElementById('phone_1').href        = day.href;
    // S'il n'y a pas de numéro pour le service de jour on grise le bouton
    if (day.href == "")
    {
      document.getElementById('phone_1').style.background = '#999';
      document.getElementById('phone_day').style.color    = '#000';
    }
    // Affichage du label et du numéro du service de nuit
    document.getElementById('phone_night').innerHTML = 
            '<span class="call">Service de nuit</span><br />' + night.val;
    document.getElementById('phone_2').href          = night.href;

    // En fonction de la période, on signale le numéro de téléphone le plus 
    // approprié en entourant le bouton
    if (best_choice == 'day' && day.href != '')
    {
      document.getElementById('phone_1').style.border = '2px solid #ffd324';
    }
    else if (night.href != '')
    {
      document.getElementById('phone_2').style.border = '2px solid #ffd324';
    }
  };

  // Fonction fail() à appeler en cas d'échec de recherche de positionnement 
  var fail = function(err){
    document.getElementById('crth').innerHTML  = '<em>' + 
             'Géolocalisation impossible' + '</em><br /><br />' +
             'Vérifiez que vous acceptez de partager ' +
             'votre position';
  };

  // Récupération de la position GPS actuelle de l'utilisateur. En cas de réussite
  // appel de la fonction suc() sinon appel de fail()
  navigator.geolocation.getCurrentPosition(suc,fail, {enableHighAccuracy:true, timeout:5000});
}	
