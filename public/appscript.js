
function countryInfo(){ 
    
  var country =$("#countryname").val();
    
    
    $.getJSON("https://restcountries.eu/rest/v2/name/"+ country,function(data){
     var cCapital=data[0].capital;
      var cPopulation=data[0].population;
      var cArea =data[0].area;
      var cLanguages = data[0].languages[0].name;
      var continent=data[0].region;

       
  
    //$("#continentname").replaceWith( " Region: " + continent);
    $("#continentname").text("Region: " + continent);
    $("#capitalname").text("Capital: "+cCapital);
    $("#populationname").text("Population:"+cPopulation);
    $("#area").text("Area in km square: " +cArea);
    $("#languagesname").text("Spoken language: "+cLanguages);
    //$("#result").replaceWith("skroll down to view result");
    $("#ss").text("Score out of 5");
    $("#cname").text("Country :" + country);


    /*var latitude =data[0].latlng[0];
     var longitude=data[0].latlng[1];
        var uluru = {lat: latitude, lng: longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
   */ 

    
});
    if(country == "Germany" || country=="germany"){
  
    $.getJSON("https://www.travel-advisory.info/api?countrycode=de",function(info){
      var riskLevel = info.data.DE.advisory.score;
      $("#areaname").text(riskLevel);
      
    });
  }
    if(country == "France"|| country=="france"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=fr",function(info){
    var riskLevel = info.data.FR.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  else{
    $("#areaname").text("blabla");
  }
  if(country == "Austria" || country=="austria"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=at",function(info){
    var riskLevel = info.data.AT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Belgium" ||country == "belgium"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=be",function(info){
    var riskLevel = info.data.BE.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Bulgaria" ||country =="bulgaria"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=bg",function(info){
    var riskLevel = info.data.BG.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Croatia" || country=="croatia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=hr",function(info){
    var riskLevel = info.data.HR.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Czechia" || country=="czechia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=cz",function(info){
    var riskLevel = info.data.CZ.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Denmark" || country=="denmark"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=dk",function(info){
    var riskLevel = info.data.DK.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Estonia" || country=="estonia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=ee",function(info){
    var riskLevel = info.data.EE.advisory.score;
    $("#areaname").text(riskLevel);
   
  });
  }
  if(country == "Ireland" || country=="ireland"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=ie",function(info){
    var riskLevel = info.data.IE.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Greece" || country=="greece"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=le",function(info){
    var riskLevel = info.data.LE.advisory.score;
    $("#areaname").text(riskLevel);
   
  });
  }
  if(country == "Spain" || country=="spain"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=es",function(info){
    var riskLevel = info.data.ES.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Italy" || country=="italy"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=it",function(info){
    var riskLevel = info.data.IT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Cyprus" || country=="cyprus"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=cy",function(info){
    var riskLevel = info.data.CY.advisory.score;
    $("#areaname").text(riskLevel);
   
  });
  }
  if(country == "Latvia" || country=="latvia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=lv",function(info){
    var riskLevel = info.data.LV.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Lithuania" || country=="lithuania"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=lt",function(info){
    var riskLevel = info.data.LT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Luxembourg" || country=="luxembourg"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=lu",function(info){
    var riskLevel = info.data.LU.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Hungary" || country=="hungary"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=hu",function(info){
    var riskLevel = info.data.HU.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Malta" || country=="malta"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=mt",function(info){
    var riskLevel = info.data.MT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Netherlands" || country=="netherlands"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=nl",function(info){
    var riskLevel = info.data.NL.advisory.score;
    $("#areaname").text(riskLevel);
   
  });
  }
  if(country == "Austria" || country=="austria"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=at",function(info){
    var riskLevel = info.data.AT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Poland" || country=="poland"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=pl",function(info){
    var riskLevel = info.data.PT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Portugal" || country=="portugal"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=pt",function(info){
    var riskLevel = info.data.PT.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Romania" || country=="romania"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=ro",function(info){
    var riskLevel = info.data.RO.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Slovenia" || country=="slovenia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=si",function(info){
    var riskLevel = info.data.SI.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Slovakia" || country=="slovakia"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=sk",function(info){
    var riskLevel = info.data.SK.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Finland" || country=="finland"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=fi",function(info){
    var riskLevel = info.data.FI.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  if(country == "Sweden" || country=="sweden"){
  
  $.getJSON("https://www.travel-advisory.info/api?countrycode=se",function(info){
    var riskLevel = info.data.SE.advisory.score;
    $("#areaname").text(riskLevel);
    
  });
  }
  else{
    $("#areaname").text("Country not member of EU");
  }
 
  
  $("#result").text("skroll down to view result");
  

    
}
