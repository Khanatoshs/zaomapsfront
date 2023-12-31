




 var map = L.map('map').setView([0, 0], 5);
var countH = 0
var countDam = 0
var countDe = 0
 L.control.lasso().addTo(map);
 var selectedTrees = []
 

function clearTreeList(){
    let datTree = document.getElementById("treedata");
    datTree.innerHTML = ""
}

function addTree(id){
    let datTree = document.getElementById("treedata");
    //datTree.innerHTML += '<div class = "row"><div class = "col-md"><h5 class="minititle">2019</h5><img class="miniature" src ="img/trees/'+id+'_19.png" /></div>'
    datTree.innerHTML +=  '<div class = "row tree-row"><div class = "row"><div class = "col"><h5>Tree id:'+ id+'</h5></div></div><div class = "row"><div class = "col-md"><h5 class="minititle">2019</h5><img class="miniature" src ="img/trees/'+id+'_19.png" /></div><div class = "col-md"><h5 class="minititle">2020</h5><img class="miniature" src ="img/trees/'+id+'_20.png" /></div><div class = "col-md"><h5 class="minititle">2021</h5><img class="miniature" src ="img/trees/'+id+'_21.png" /></div><div class = "col-md"><h5 class="minititle">2022</h5><img class="miniature" src ="img/trees/'+id+'_22.png" /></div></div></div>'
}
function addTreeList(treelist){
    let datTree = document.getElementById("treedata");
    let seltitle = document.getElementById("selHead");
    seltitle.innerHTML += ' ' + selectedTrees.length
    datTree.innerHTML += '<div class="row"><div class="col"><h6>Healthy: '+ countH + '</h6></div><div class="col"><h6>Damaged: '+ countDam+'</h6></div><div class="col"><h6>Dead: '+ countDe+'</h6></div></div>'
    treelist.forEach(tree=>{
        addTree(tree)
    });
}
function clickMarker(e){
    //console.log(e.target.options.id)
    e.target.setStyle({fillColor: '#89CFF0'});
    addTree(e.target.options.id)
}


 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 20
  }).addTo(map);

  var de19layer = new L.Shapefile('De19.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                /*layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return '<h4 style="text-align:center">Tree Id: ' + feature.properties[k] + '</h4><div><div style="display:inline-grid"><h5 class="minititle">2019</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_19.png" /></div><div style="display:inline-grid"><h5 class="minititle">2020</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_20.png" /></div></div><div><div style="display:inline-grid"><h5 class="minititle">2021</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_21.png" /></div><div style="display:inline-grid"><h5 class="minititle">2022</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_22.png" /></div></div>';
                }).join("<br />"), {
                    maxHeight: 200
                });*/
                layer.on({
                    click: clickMarker
                });
            }
        },
        pointToLayer: function (feature, latlng) {
            var DeadMarker = {
                radius: 8,
                fillColor: "#ff0000",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
                id:feature.properties['Field'],
                type:'dead'
            };
                return L.circleMarker(latlng, DeadMarker);
            }
    });
var da19layer = new L.Shapefile('Da19.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                /*layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return '<h4 style="text-align:center">Tree Id: ' + feature.properties[k] + '</h4><div><div style="display:inline-grid"><h5 class="minititle">2019</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_19.png" /></div><div style="display:inline-grid"><h5 class="minititle">2020</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_20.png" /></div></div><div><div style="display:inline-grid"><h5 class="minititle">2021</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_21.png" /></div><div style="display:inline-grid"><h5 class="minititle">2022</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_22.png" /></div></div>';
                }).join("<br />"), {
                    maxHeight: 200
                });*/
                layer.on({
                    click: clickMarker
                });
            }
        },
        pointToLayer: function (feature, latlng) {
            var DamMarker = {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
                id:feature.properties['Field'],
                type:'damaged'
            };
                return L.circleMarker(latlng, DamMarker);
            }
    });
    
var he19layer = new L.Shapefile('He19.zip', {
        onEachFeature: function(feature, layer) {
            if (feature.properties) {
                /*layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return '<h4 style="text-align:center">Tree Id: ' + feature.properties[k] + '</h4><div><div style="display:inline-grid"><h5 class="minititle">2019</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_19.png" /></div><div style="display:inline-grid"><h5 class="minititle">2020</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_20.png" /></div></div><div><div style="display:inline-grid"><h5 class="minititle">2021</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_21.png" /></div><div style="display:inline-grid"><h5 class="minititle">2022</h5><img class="miniature" src ="img/trees/'+feature.properties[k]+'_22.png" /></div></div>';
                }).join("<br />"), {
                    maxHeight: 200
                });*/
                layer.on({
                    click: clickMarker
                });
            }
        },
        pointToLayer: function (feature, latlng) {
            var HealthMarker = {
                radius: 8,
                fillColor: "#00ff91",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
                id:feature.properties['Field'],
                type:'healthy'
            };
                return L.circleMarker(latlng, HealthMarker);
            }
    });
    
    
    de19layer.addTo(map);
    da19layer.addTo(map);
    he19layer.addTo(map);

    
   /*fetch('img/Zao1_190824_COG.tif')
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
          parseGeoraster(arrayBuffer).then(georaster => {
            console.log("georaster:", georaster);

            
            var layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.7
            });
            layer.addTo(map);
            layerControl.addOverlay(layer, "2019 - Tiff");

            map.fitBounds(layer.getBounds());


        });
          });*/
    

    var overlayMaps = {
        "2019 - Dead": de19layer,
        "2019 - Damaged": da19layer,
        "2019 - Healthy": he19layer,
        
    };
    
    var layerControl = L.control.layers(null, overlayMaps).addTo(map);
    he19layer.once("data:loaded", function() {
        console.log("finished loaded shapefile");
        
           c1 = L.latLng(he19layer.getBounds()['_northEast']['lat'],he19layer.getBounds()['_northEast']['lng'])
           c2 = L.latLng(he19layer.getBounds()['_southWest']['lat'],he19layer.getBounds()['_southWest']['lng'])
           bou = L.latLngBounds(c1,c2)
    
    map.fitBounds(bou)
    });


    function resetSelectedState() {
        selectedTrees = []
        countH = 0
        countDam = 0
        countDe = 0
        let seltitle = document.getElementById("selHead");
        seltitle.innerHTML = 'Selected Trees'
        clearTreeList()
        map.eachLayer(layer => {
            if (layer.options.type == 'healthy'){
                layer.setStyle({fillColor: '#00ff91'});
            }else if(layer.options.type == 'damaged'){
                layer.setStyle({fillColor: '#ff7800'});
            }else if(layer.options.type == 'dead'){
                layer.setStyle({fillColor: '#ff0000'});
            }
        });

    }
    function setSelectedLayers(layers) {
        resetSelectedState();
        layers.forEach(layer => {
                selectedTrees.push(layer.options.id);
                layer.setStyle({fillColor: '#89CFF0'});
                if (layer.options.type == 'healthy'){
                    countH +=1
                }else if(layer.options.type == 'damaged'){
                    countDam +=1
                }else if(layer.options.type == 'dead'){
                    countDe+=1
                }

        });
        addTreeList(selectedTrees)
    }
    
    map.on('mousedown', () => {
        resetSelectedState();
    });
    map.on('lasso.finished', event => {
        //console.log(event.layers);
        setSelectedLayers(event.layers)
    });